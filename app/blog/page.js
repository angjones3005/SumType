export const metadata = {
  title: "Boundary Sufficiency — SumType",
  description: "Local validation of spanning tree protocol configurations without full-network recomputation.",
};

export default function BlogPage() {
  return (
    <main>
      <div className="wrap">
        <article className="post-page">
          <header className="post-header">
            <span className="eyebrow">NETWORK VERIFICATION / FORMAL METHODS</span>
            <h1>Boundary Sufficiency: Local Validation of Spanning Tree Protocol Configurations Without Full-Network Recomputation</h1>
            <p className="post-dek">
              A practical summary of a formal result about validating local STP changes without recomputing the whole network.
            </p>
          </header>

          <div className="post-content">
            <p className="post-lead">
              Network changes are often local, but the verification work is not. A small spanning-tree configuration change can appear to require recomputing port roles across every switch, even when the affected area is separated from the rest of the network by only a few links.
            </p>

            <h2>The central result</h2>
            <p>
              This paper shows that full-network recomputation is unnecessary under a precise condition: the sub-network being checked does not contain the elected root. If a region <em>N</em> is separated from the rest of the network <em>R</em> by a boundary <em>B</em>, then the roles inside <em>N</em> depend only on its own topology and configuration, plus the root-path distances supplied at the boundary switches.
            </p>
            <p>
              Everything else about the remote network can be discarded. The boundary acts as a compact interface between the part being changed and the part that is already known to be stable.
            </p>

            <h2>A denotational model of STP</h2>
            <p>
              The model treats STP as an executable function from a topology and configuration to a total assignment of port roles. A topology is a finite set of switches connected by links with positive costs. A configuration supplies bridge priorities, port-cost overrides, and optional RootGuard or LoopGuard settings.
            </p>
            <p>
              Bridge identifiers elect a unique root. Once the root is known, each switch chooses a lowest-cost path toward it, with bridge identifiers and port identifiers providing deterministic tie-breakers. The resulting root, designated, and blocking roles form the active spanning tree.
            </p>

            <h2>Why the boundary is enough</h2>
            <p>
              Two observations make the decomposition work. First, when the root is in <em>R</em>, a shortest path from a boundary switch to the root never benefits from entering <em>N</em> and returning. All link costs are positive, so detouring through the isolated region can only make the path longer. Boundary distances can therefore be computed entirely within <em>R</em>.
            </p>
            <p>
              Second, every shortest path from a switch in <em>N</em> has an equivalent path that crosses the boundary exactly once. The path can be split into an internal prefix and a shortest continuation beginning at the boundary. This gives the local computation the exact information it needs without exposing the internal structure of <em>R</em>.
            </p>

            <div className="post-callout">
              <strong>Boundary sufficiency.</strong> If the elected root lies in <em>R</em>, port roles on switches in <em>N</em> are determined by <em>N</em>'s topology, <em>N</em>'s configuration, and the vector of root-path distances at <em>B</em>. No other information about <em>R</em> is required.
            </div>

            <figure className="paper-figure">
              <div className="boundary-diagram">
                <div className="diagram-region region-n">
                  <span className="diagram-label">N</span>
                  <span className="diagram-node node-n-one">n1</span>
                  <span className="diagram-node node-n-two">n2</span>
                  <span className="diagram-line internal-line one"></span>
                  <span className="diagram-line internal-line two"></span>
                </div>
                <div className="boundary-links">
                  <span></span>
                  <span></span>
                </div>
                <div className="diagram-region region-r">
                  <span className="diagram-label">R</span>
                  <span className="diagram-node node-b-one">b1</span>
                  <span className="diagram-node node-b-two">b2</span>
                  <span className="diagram-node node-root">root</span>
                  <span className="diagram-line r-line one"></span>
                  <span className="diagram-line r-line two"></span>
                  <span className="diagram-line r-line three"></span>
                </div>
              </div>
              <figcaption>Figure 1. A local region <em>N</em> can see the rest of the network <em>R</em> through boundary distances at <em>B</em>.</figcaption>
            </figure>

            <h2>Mechanized in Haskell</h2>
            <p>
              The result was mechanized in Haskell using the same relaxation and role-assignment functions for both the monolithic computation and the local witness function. This matters because agreement cannot be dismissed as an artifact of two independently implemented algorithms.
            </p>
            <p>
              The local function seeds the boundary switches with their known distances, then computes roles over the internal switches and cut edges. It was checked against the full computation on five structurally different cases: a six-switch ring, a minimal one-switch region, a two-arm topology, a RootGuard case, and a negative control with the root placed inside the local region.
            </p>

            <pre className="post-code"><code>{`data Weekend = Saturday | Sunday

showDay :: Weekend -> String
showDay Saturday = "Drink some coffee."
showDay Sunday   = "Think about things."`}</code></pre>

            <figure className="paper-figure">
              <div className="ring-diagram">
                <span className="ring-node ring-a">A</span>
                <span className="ring-node ring-b">B</span>
                <span className="ring-node ring-c">C</span>
                <span className="ring-node ring-d">D</span>
                <span className="ring-node ring-e">E</span>
                <span className="ring-node ring-f">F</span>
                <span className="ring-edge edge-ab"></span>
                <span className="ring-edge edge-bc"></span>
                <span className="ring-edge edge-cd"></span>
                <span className="ring-edge edge-de"></span>
                <span className="ring-edge edge-ef"></span>
                <span className="ring-edge edge-fa"></span>
                <span className="cut-label cut-left">cut</span>
                <span className="cut-label cut-right">cut</span>
                <span className="ring-root-label">root</span>
              </div>
              <figcaption>Figure 2. A six-switch ring split into local region <em>N</em> and remote region <em>R</em>, with two cut edges and the root in <em>R</em>.</figcaption>
            </figure>

            <h2>The measured speedup</h2>
            <p>
              Correctness was followed by a scaling measurement on a 500-switch ring with a 20-switch local region and a boundary of width two. Averaged over three trials, the full recomputation took 2,634 ms. The local computation, given the two boundary distances as fixed inputs, took 2.0 ms: roughly a 1,300x difference.
            </p>
            <p>
              The absolute numbers come from an intentionally unoptimized reference implementation, but both paths share those inefficiencies. The relative improvement comes from never touching the remote region, exactly as the theorem predicts.
            </p>

            <h2>Where the guarantee fails</h2>
            <p>
              The precondition is load-bearing. If the root migrates into <em>N</em>, the effect can travel arbitrarily far through <em>R</em>. For every distance <em>k</em>, construct a chain extending <em>k</em> hops from the boundary. When the root is at the far end, that switch has no root port. When the root moves into <em>N</em>, the same switch acquires a root port toward the chain. Its role changes exactly <em>k</em> hops away.
            </p>
            <p>
              This rules out any fixed-radius static guarantee in the failure case. It does not rule out incremental shortest-path algorithms that touch only switches whose distances actually change; that is a different, output-sensitive problem left for future work.
            </p>

            <figure className="paper-figure">
              <div className="chain-diagram">
                <span className="chain-label chain-before">root = r5 (far end)</span>
                <span className="chain-label chain-after">root migrated into N</span>
                <div className="chain-row">
                  <span className="chain-node local">N1</span>
                  <span className="chain-node">r0</span>
                  <span className="chain-node">r1</span>
                  <span className="chain-node">r2</span>
                  <span className="chain-node">r3</span>
                  <span className="chain-node">r4</span>
                  <span className="chain-node root-old">r5</span>
                </div>
                <div className="chain-row second">
                  <span className="chain-node local root-new">N1</span>
                  <span className="chain-node">r0</span>
                  <span className="chain-node">r1</span>
                  <span className="chain-node">r2</span>
                  <span className="chain-node">r3</span>
                  <span className="chain-node changed">r4</span>
                  <span className="chain-node">r5</span>
                </div>
              </div>
              <figcaption>Figure 3. Root migration can change a port role arbitrarily far from the boundary.</figcaption>
            </figure>

            <h2>Limitations and next steps</h2>
            <p>
              The model captures RootGuard and LoopGuard as configuration constraints, but it does not model every physical failure mode, such as asymmetric unidirectional loss. The mechanization uses synthetic topologies and one 500-switch benchmark rather than production data. Guard compositionality and incremental recomputation also remain open questions.
            </p>
            <p>
              The broader lesson is deliberately narrow: general-purpose modular verification is valuable, but some protocols have enough structure to admit exact decompositions with no solver in the loop. STP is one such case. The useful engineering move is to identify the boundary, validate the precondition, and pass only the summary the local computation actually needs.
            </p>

            <div className="post-footer-note">Based on “Boundary Sufficiency: Local Validation of Spanning Tree Protocol Configurations Without Full-Network Recomputation,” draft v0.3.</div>
          </div>
        </article>
      </div>
    </main>
  );
}