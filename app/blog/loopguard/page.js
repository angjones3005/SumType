export const metadata = {
  title: "A Snapshot Safety Theorem for LoopGuard — SumType",
  description: "A static safety theorem for LoopGuard under BPDU loss and physical link failure.",
};

export default function LoopGuardPage() {
  return (
    <main>
      <div className="wrap">
        <article className="post-page">
          <header className="post-header">
            <span className="eyebrow">NETWORK VERIFICATION / FORMAL METHODS</span>
            <h1>A Snapshot Safety Theorem for LoopGuard in Spanning Tree Protocol</h1>
            <p className="post-dek">
              Formalizing LoopGuard reveals a simpler result first: under a memoryless model, temporal safety reduces to checking every reachable failure snapshot.
            </p>
          </header>

          <div className="post-content">
            <p className="post-lead">
              LoopGuard protects against a specific failure: a redundant port stops receiving BPDUs while its physical link remains live. Without protection, the port can self-promote into a forwarding state and close a physical loop. LoopGuard refuses that promotion and keeps the port Blocking.
            </p>

            <h2>The question looked temporal</h2>
            <p>
              A network can evolve through link failures, BPDU loss, recovery, and repeated flapping. That naturally suggests a coalgebraic model: states transition through events, and a safe implementation should behave correctly along every possible trajectory. One might formulate the goal as a bisimulation between the guarded system and an ideal always-safe reference.
            </p>
            <p>
              Formalizing the reference computation surfaces an important simplification. The role-assignment function is memoryless. It recomputes roles from the current physical topology, perceived topology, configuration, and failure snapshot. It does not remember which sequence of events produced that snapshot.
            </p>

            <div className="post-callout">
              <strong>Memorylessness collapses the temporal claim.</strong> For a memoryless reference, safety under every event sequence is equivalent to safety at every reachable snapshot. The path through the state space adds no information to the observable result.
            </div>

            <h2>Two topologies, two kinds of failure</h2>
            <p>
              The model starts from a denotational STP computation that assigns Root, Designated, and Blocking roles. A dynamic state is a pair: the ports currently losing BPDUs and the links that are physically down.
            </p>
            <p>
              These failure types are deliberately kept separate. A down link is removed from the physical topology. A BPDU-lost port still has a live physical link, but that link is removed from the perceived topology used by the role computation. Loop safety is checked against the physical topology, because that is where a real cycle would exist.
            </p>

            <h2>The snapshot safety theorem</h2>
            <p>
              Assume the perceived topology remains connected. If every physically present link missing from the perceived topology has LoopGuard configured on at least one endpoint, then the active-role subgraph contains no cycle.
            </p>
            <p>
              The proof is direct. The perceived topology receives an ordinary STP spanning tree, call it <em>T</em>. Every link missing from that perceived topology is processed by the failure rule. The hypothesis guarantees that at least one endpoint of every such link is guarded, so the link remains inactive. The physical active subgraph is therefore exactly <em>T</em>, which is connected and acyclic.
            </p>

            <h2>Exhaustive mechanization</h2>
            <p>
              The theorem was implemented in Haskell by extending the existing static role-assignment code. The checker enumerated every combination of BPDU-lost ports and physically down links for two small topologies: a guarded triangle and a guarded four-switch ring.
            </p>
            <p>
              The hypothesis held for 125 of 512 triangle snapshots and 625 of 4,096 ring snapshots. Every one of those 750 snapshots was loop-free. This is an exhaustive check for these topologies, not a sample intended to stand in for proof or generality.
            </p>

            <pre className="post-code"><code>{`rolesUnderFailure :: Graph -> Config -> State -> Roles
rolesUnderFailure graph config state =
  assignPortRoles (perceived graph state) config

safeSnapshot graph config state =
  connected (perceived graph state)
    && guardedMissingLinks graph config state`}</code></pre>

            <h2>A useful correction</h2>
            <p>
              Exhaustive checking also caught an initially plausible but false necessity claim. Violating the LoopGuard hypothesis does not always produce a loop. On the unguarded triangle, 387 of 512 snapshots violated the hypothesis, but only 63 produced a loop. On the unguarded four-switch ring, 3,471 violations produced only 255 loops.
            </p>
            <p>
              Multiple simultaneous failures can leave an active tree that does not allow a missing link to close a cycle. The theorem is therefore a sufficient condition, not a characterization of every unsafe state. Reporting that correction is part of the result: exhaustive checking prevented the stronger false claim from becoming part of the final argument.
            </p>

            <h2>What remains genuinely temporal</h2>
            <p>
              A real temporal LoopGuard model would need state that persists across events: timers, hysteresis, recovery delays, and behavior under links that flap faster than the protective timer. In that setting, a port’s behavior would depend on how long it has been silent and on its transition history. Bisimulation would become relevant again because the current snapshot would no longer determine the complete observable behavior.
            </p>

            <h2>Limitations and next steps</h2>
            <p>
              Necessity is not fully characterized, BPDU loss is modeled as symmetric silence, and only two small synthetic topologies were checked. The perceived-topology-connected assumption also excludes network partitions, which are a separate failure mode.
            </p>
            <p>
              The next step is a timed model with real memory. That would test whether the snapshot safety guarantee survives timers and fast link flapping, and would answer the coalgebraic question that the memoryless model makes unnecessary.
            </p>

            <div className="post-footer-note">
              <a href="/blog/boundary-sufficiency">Read the first post: Boundary Sufficiency</a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}