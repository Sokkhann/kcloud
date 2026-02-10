import data from "@/data/dataCards.json";
import SimpleCard from "@/components/card/SimpleCard";
import { Activity, Cpu, HeartPlus, Layers } from "lucide-react";

export default function K8UseCaseSection() {
  
  const K8UseCases = [
    {
      title: "Automated Self-Healing",
      icon: <HeartPlus size={24} strokeWidth={1.5} />, // Reference for your icon library
      desc: "GCX Cloud ensures maximum uptime by monitoring both your hardware and software. If a node fails, our infrastructure automatically provisions a replacement instance and joins it to your cluster, allowing Kubernetes to reschedule your workloads without manual intervention.",
    },
    {
      title: "Multi-Cluster Management",
      icon: <Layers size={24} strokeWidth={1.5} />,
      desc: "Simplify your operations by managing multiple clusters from a single interface. GCX Cloud abstracts the underlying complexity, allowing you to standardize deployments across different environments, reduce rework, and maintain a consistent security posture.",
    },
    {
      title: "Elastic Scaling",
      icon: <Activity size={24} strokeWidth={1.5} />,
      desc: "Handle unpredictable traffic with ease. GCX Cloud enables both manual and automated scaling of your control plane and worker nodes. Our system monitors CPU and application metrics to dynamically adjust resources, ensuring peak performance during demand spikes.",
    }
  ]

  return (
    <div className=" w-screen">
      <div className=" max-w-7xl mx-auto pb-6 md:pb-12 lg:pb-12">
        <div className="text-center pb-8 max-w-3xl mx-auto">
          <p className="text-4xl font-bold text-gray-700">Use Cases</p>
          <p className="text-base text-gray-600 lg:mx-8 md:mx-8 mx-4">
            Kubernetes (K8s) is an open-source system for automating the
            deployment, scaling, and management of containerized applications.
            Its primary use cases revolve around managing complex, distributed,
            and high-scale workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 md:gap-8 mx-4 lg:mx-8 md:mx-8">
          {K8UseCases.map((card, index) => (
            <div key={index} className="relative">
              <SimpleCard title={card.title} desc={card.desc} icon={card.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
