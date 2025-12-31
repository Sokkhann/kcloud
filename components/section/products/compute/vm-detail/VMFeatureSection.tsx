import FeatureCardV2 from "@/components/card/FeatureCardV2";
import { ShieldCheck, RefreshCw, Cpu, Zap, CalendarClock } from "lucide-react";
import React from "react";

const vmFeatures = [
    {
    title: "Automated High Availability (HA)",
    icon: ShieldCheck,
    desc: "Never worry about hardware failure. If your underlying host goes down, GCX Cloud automatically detects the failure and restarts your instance on healthy hardware."
  },
  {
    title: "Live Migration",
    icon: RefreshCw,
    desc: "Zero-downtime maintenance. We can move your running instances between physical hosts without ever interrupting your service."
  },
  {
    title: "Instance Lifecycle Control",
    icon: Cpu,
    desc: "Complete power in your hands. Start, Stop, Reboot, and Destroy instances via our portal or API. You only pay for what you use."
  },
  {
    title: "Flexible Resource Scaling",
    icon: Zap,
    desc: "Grow as you go. Change your 'Service Offering' (CPU and RAM) on the fly to handle traffic spikes without rebuilding your server."
  },
  {
    title: "Scheduled Lease Operations",
    icon: CalendarClock,
    desc: "Cost Optimization. Set an 'Expiration Date' for temporary workloads (like dev/test environments) to automatically shut down and save you money."
  }
]


export default function VMFeatureSection() {

  return (
    <div className="max-w-7xl mx-auto lg:py-12 md:py-12 py-6">
      <div className="text-center pb-8 lg:mx-8 md:mx-8 mx-4">
        <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
          Key Features
        </p>
        <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
          Flexible and powerful computing resources to run your workloads
          efficiently. Scale CPU, memory, and storage as needed. Ideal for
          applications, services, and containerized workloads. Reliable, high
          performance, and ready for any demand.
        </p>
      </div>

      {/* feature card section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-8 justify-items-center items-stretch lg:mx-8 md:mx-8 mx-4"
      >
        {vmFeatures.map((card, index) => (
          <FeatureCardV2
            key={index}
            title={card.title}
            icon={card.icon}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  );
}
