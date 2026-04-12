import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-700">
      <h1 className="text-xl font-bold">Mukul Kalsait</h1>
      <div className="flex gap-4 text-sm">
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Infrastructure / DevOps Engineer
      </h2>
      <p className="text-zinc-300 max-w-2xl">
        Building reliable systems, automating infrastructure, and keeping production stable.
      </p>

      <div className="flex gap-4 mt-6">
        <a href="https://github.com/Mukulkalsait" target="_blank" className="px-2">
          <FaGithub className="hover:text-blue-700 text-4xl" />
        </a>
        <a href="https://www.linkedin.com/in/mukul-kalsait-7629242b3/" target="_blank" className="px-2" >
          <FaLinkedin className="hover:text-blue-400 text-4xl" />
        </a>
        <a href="mailto:mukul.kalsait21@gmail.com" className="px-2" >
          <IoMdMail className="hover:text-yellow-400 text-4xl" />
        </a>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "Docker","Linux","Terraform","Ansible","AWS","Prometheus","Grafana","Kubernetes","Nginx","Rust","Bash"
  ];

  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-zinc-800 rounded-xl text-sm hover:bg-zinc-500">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact" className="px-6 py-16 max-w-5xl mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
      <p className="text-zinc-400 mb-6">Open to DevOps / SRE opportunities</p>
      <a
        href="mailto:mukul.kalsait21@gmail.com"
        className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600"
      >
        Contact Me
      </a>
    </section>
  );
}


function Projects() {
const projects = [
  // {
  //   title: "Production-Grade 3-Tier Kubernetes Platform (k3s + Helm)",
  //   desc: "Deployed a full 3-tier MERN application on a 2-node k3s cluster using Terraform + Helm. Implemented Prometheus + Grafana monitoring, alerting, and load testing — achieving <2s response time under 500 concurrent users on homelab hardware.",
  //   link: "#" // add after you build it
  // },
  // {
  //   title: "AI-Powered DevOps Assistant (Local LLM)",
  //   desc: "Built a chatbot using quantized small LLM (Qwen 3.5 4B on RTX 4050) that analyzes logs/metrics, suggests fixes, and auto-generates Terraform/Helm snippets. Integrated with home server monitoring stack.",
  //   link: "#" 
  // },
  {
    title: "Terraform + Vault Multi-Node Infrastructure Automation",
    desc: "Provisioned 3-node infrastructure using Terraform with HashiCorp Vault for dynamic secret injection. Reduced manual configuration effort by ~70% with reusable IaC and Jenkins pipelines.",
    link: "https://github.com/Mukulkalsait/A07_Terraform_Vault-Based_Multi-Node_Infra_Automation"
  },
  {
    title: "Sys Watch – Rust CLI Real-Time Monitoring Tool",
    desc: "Developed a high-performance Rust CLI tool for live monitoring of CPU, memory, and 100+ processes (<1s refresh, <5% CPU overhead).",
    link: "https://github.com/Mukulkalsait/A06_Sys_Watch"
  },
  {
    title: "Blockchain Node Deployment & Reliability Setup",
    desc: "Deployed Ethereum Sepolia node with Prometheus/Grafana monitoring and automated systemd recovery, achieving 99%+ uptime and 60% faster incident recovery.",
    link: "https://github.com/Mukulkalsait/A05_Blockchain_Node_Deployment-Reliability_Setup"
  },
  {
    title: "Linux Production Ops Lab",
    desc: "Implemented production-grade Linux hardening, automated backups, log rotation, and monitoring stack (Prometheus + Grafana) with documented architecture and operational workflows.",
    link: "https://github.com/Mukulkalsait/A04_Linux_Production_OPS-LAB"
  },
  {
    title: "Multi-App Container Platform (Podman + Nginx)",
    desc: "Designed a containerized platform to host multiple applications under a single domain using Podman and Nginx reverse proxy with isolated runtime environments.",
    link: "#" // add later
  },
  {
    title: "Custom CI/CD Pipeline (Containerized Jenkins)",
    desc: "Built fully containerized Jenkins pipelines with Git polling, build, packaging, and rsync-based deployments, reducing deployment time by ~80% without external registries.",
    link: "#" // add later
  },
  {
    title: "2-Tier MERN App (Podman Compose)",
    desc: "Deployed a 2-tier MERN stack application using Podman Compose with containerized backend and database, simulating production-like isolated environments.",
    link: "https://github.com/Mukulkalsait/A_2Tear-podmanCompose-mern-App"
  },
];

  return (
    <section id="projects" className="px-6 py-12 max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="p-5 bg-zinc-800 rounded-2xl hover:bg-zinc-700 transition">
            <h4 className="text-lg font-bold">{p.title}</h4>
            <p className="text-zinc-400 text-sm mt-2">{p.desc}</p>

            <a
              href={p.link}
              target="_blank"
              className="text-blue-400 text-sm mt-3 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
