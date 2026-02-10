import UsageCard from "@/components/card/UsageCard";
import { Box, Radio, BarChart3, HardDriveDownload } from "lucide-react";

const cards = [
  {
    title: "Subnet IP Capacity",
    desc: "Monitor the consumption of available IP addresses within your subnets to plan for infrastructure scaling.",
    icon: Box
  },
  {
    title: "Inter-Zone Traffic",
    desc: "Analyze data transfer volumes between different availability zones to manage latency and bandwidth costs.",
    icon: Radio
  },
  {
    title: "Throughput Analysis",
    desc: "Track the total bandwidth utilized across all attached gateways and peered network connections.",
    icon: BarChart3
  },
  {
    title: "Active Resource Count",
    desc: "View the total number of VMs, Load Balancers, and Databases currently operating within this VPC environment.",
    icon: HardDriveDownload
  }
];

export default function VPCUsageSection() {
  return (
    <div>
      <section className='max-w-7xl mx-auto pb-16 lg:pb-32 md:pb-32'>
        <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
          <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
            VPC Usage & Performance
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
            Monitor the distribution of resources across your subnets and track inter-zone data transfer volumes. Analyze IP address availability and traffic flow patterns to optimize network performance and cost efficiency.
          </p>
        </div>

        <div className='pb-8 mx-4 lg:mx-8 md:mx-8'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {cards.map((f, i) => (
              <div key={i} className="h-full">
                <UsageCard title={f.title} desc={f.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
