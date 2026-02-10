import SimpleCard from '@/components/card/SimpleCard'

import { Layers3, Network, LifeBuoy, FlaskConical } from "lucide-react";

const useCases = [
  {
    title: "3-Tier Web Applications",
    desc: "Deploy web servers in a public tier, app servers in a private tier, and databases in a restricted tier, allowing traffic only through the load balancer.",
    icon: <Layers3 size={24} strokeWidth={1.5} />,
  },
  {
    title: "Hybrid Cloud Extension",
    desc: "Extend your corporate network into GCX Cloud. Use a Site-to-Site VPN to make cloud VMs appear as if they are on your local office network.",
    icon: <Network size={24} strokeWidth={1.5} />,
  },
  {
    title: "Disaster Recovery (DR)",
    desc: "Maintain a 'warm' standby environment in a VPC that mirrors your local infrastructure, ready to scale up instantly if your primary site goes down.",
    icon: <LifeBuoy size={24} strokeWidth={1.5} />,
  },
  {
    title: "Dev/Test Environments",
    desc: "Quickly spin up a complete network replica of your production environment for safe testing without affecting live services.",
    icon: <FlaskConical size={24} strokeWidth={1.5} />,
  },
];

export default function VPCUseCaseSection() {
  return (
    <div className=" w-screen">
      <div className=" max-w-7xl mx-auto pb-6 lg:pb-12 md:pb-12">
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
          {useCases.map((card, index) => (
            <div key={index} className="relative">
              <SimpleCard title={card.title} desc={card.desc} icon={card.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
