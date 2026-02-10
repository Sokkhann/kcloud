import FeatureCardV2 from "@/components/card/FeatureCardV2";
import { Layers, ShieldCheck, Link, GlobeLock, Share2, Hash } from "lucide-react";

const features = [
  {
    title: "Multi-Tier Architecture",
    desc: "Create multiple isolated 'Network Tiers' (subnets) within a single VPC. Separate Web, Application, and Database layers for maximum security.",
    icon: Layers,
  },
  {
    title: "Advanced Access Control (ACLs)",
    desc: "Go beyond simple security groups. Use Network ACLs to control traffic entering and leaving individual tiers as a stateless granular firewall.",
    icon: ShieldCheck,
  },
  {
    title: "Site-to-Site VPN",
    desc: "Securely connect your on-premises office to your GCX VPC via an encrypted IPsec VPN tunnel for a seamless hybrid cloud experience.",
    icon: Link,
  },
  {
    title: "Private Gateways",
    desc: "Enable direct, private communication between your VPC and external physical networks without traversing the public internet.",
    icon: GlobeLock,
  },
  {
    title: "Inter-VPC Peering",
    desc: "Connect multiple VPCs within the same zone to share resources across different projects or departments securely and at high speeds.",
    icon: Share2,
  },
  {
    title: "Elastic IP & Static NAT",
    desc: "Assign persistent public IP addresses to specific instances for consistent, reliable external access to your cloud resources.",
    icon: Hash,
  },
];

export default function VPCFeatureSection() {
  return (
    <div>
      <section className='max-w-7xl mx-auto py-6 lg:py-12 md:py-12'>
        <div className="text-center pb-8 mx-4 lg:mx-8 md:mx-8">
          <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700">
            VM Snapshot Features
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
            Advanced point-in-time recovery tools that capture the complete state of your virtual disk and configurations. Seamlessly revert to stable versions, clone environments, and manage incremental data consistency across your infrastructure.
          </p>
        </div>

        <div className='pb-8 mx-4 lg:mx-8 md:mx-8'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className='h-full'>
                <FeatureCardV2 icon={f.icon} title={f.title} desc={f.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
