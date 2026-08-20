import PostCard from "./components/PostCard";

const posts = [
  {
    tag: "NETWORKING",
    tagClass: "",
    title: "Home lab network architecture",
    blurb: "Two-tier Cisco/FortiGate topology with VLAN segmentation, DHCP snooping, and Dynamic ARP Inspection across a multi-vendor environment.",
    readTime: "7 MIN READ",
    category: "INFRASTRUCTURE",
    href: "https://github.com/angjones3005/home-lab-network",
  },
  {
    tag: "MONITORING",
    tagClass: "blue",
    title: "Kubernetes-based monitoring stack",
    blurb: "A two-node k3s cluster running Prometheus, Grafana, and Alertmanager, extended with SNMP polling for real-time network visibility.",
    readTime: "5 MIN READ",
    category: "OBSERVABILITY",
    href: "https://github.com/angjones3005/k8s-monitoring-snmp",
  },
  {
    tag: "AUTOMATION",
    tagClass: "green",
    title: "Home lab automation with Ansible",
    blurb: "Ansible automation across Cisco IOS switches, a FortiGate firewall, and Proxmox hosts, with Vault-secured credentials and a real paramiko auth bug fixed along the way.",
    readTime: "6 MIN READ",
    category: "AUTOMATION",
    href: "https://github.com/angjones3005/home-lab-ansible",
  },
];

export default function HomePage() {
  return (
    <main>
      <div className="wrap">
        <section className="hero">
          <h1>Notes on things I'm doing.</h1>
          <pre className="hero-code">
            <code>
              <span className="code-keyword">data</span>{" Activity = Work | DrinkCoffee\n\n"}
              <span className="code-keyword">data</span>{" Tree a = Leaf a\n            | Node (Tree a) (Tree a)\n\n"}
              <span className="code-type">weekdayPlan</span> :: <span className="code-type">Tree Activity</span>{"\n"}
              <span className="code-type">weekdayPlan</span> = Node{"\n  "}
              (Node (Leaf DrinkCoffee) (Leaf Work)){"\n  "}
              (Leaf DrinkCoffee){"\n\n"}
              <span className="code-type">describe</span> :: <span className="code-type">Activity</span> -&gt; <span className="code-type">String</span>{"\n"}
              <span className="code-type">describe</span> Work        = <span className="code-string">&quot;Time to work.&quot;</span>{"\n"}
              <span className="code-type">describe</span> DrinkCoffee = <span className="code-string">&quot;Time to drink some coffee.&quot;</span>{"\n\n"}
              <span className="code-type">runTree</span> :: <span className="code-type">Tree Activity</span> -&gt; [<span className="code-type">String</span>]{"\n"}
              <span className="code-type">runTree</span> (Leaf a)   = [describe a]{"\n"}
              <span className="code-type">runTree</span> (Node l r) = runTree l ++ runTree r
            </code>
          </pre>
        </section>

        <section style={{padding: '32px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)'}}>
          <span className="eyebrow">Currently building</span>
          <h2 style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', fontWeight: 700}}>
            Specter: SSH terminal, file browser, and editor in one
          </h2>
          <p style={{color: 'var(--text-muted)', marginTop: '10px', maxWidth: '520px'}}>
            Built for real infrastructure work. Currently in beta.
          </p>
          <a className="tip-btn" href="https://www.dawnrail.net/" style={{marginTop: '16px'}}>
            <span className="sq"></span> Check it out
          </a>
        </section>

        <div className="section-label">Recently written</div>
        <div className="grid">
          {posts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
