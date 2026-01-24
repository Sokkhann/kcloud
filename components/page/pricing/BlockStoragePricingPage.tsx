"use client";

import HeroComponent from "@/components/HeroComponent";
import { blockStorageColumns } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";
import { PackageData } from "@/type/dataTypes";
import BlockStoragePricingSection from "@/components/section/pricing/block-storage/BlockStoragePricingSection";
import QuestionCard from "@/components/card/QuestionCard";

interface PackageProps {
  packageProxmox: PackageData[]
  packageCloudStack: PackageData[]
}

const blockStorageFaqs = [
  {
    question: "What is GCX Block Storage?",
    answer: "Block Storage acts like a high-speed external hard drive for your Virtual Machines. It allows you to store data independently of your VM, making your data more secure and persistent."
  },
  {
    question: "Is local storage faster than cloud storage located abroad?",
    answer: "Yes. Because our storage clusters are located locally in Cambodia, the physical distance between your VM and the data is minimal. This results in faster disk read/write speeds (IOPS) for your applications."
  },
  {
    question: "Can I move a Block Storage volume between different VMs?",
    answer: "Absolutely. You can detach a volume from one VM and attach it to another in seconds. This makes it easier to migrate data or upgrade your infrastructure without losing information."
  },
  {
    question: "Does deleting my VM delete my Block Storage?",
    answer: "No. Block Storage is independent. You can delete your VM while keeping your data volumes safe. This provides an extra layer of security for your important databases and files."
  },
  {
    question: "What performance tiers do you offer?",
    answer: "We offer different tiers based on your needs, from standard HDD for backups to high-performance SSD for heavy-duty databases. You only pay for the performance and capacity you need."
  },
  {
    question: "How do I back up my Block Storage?",
    answer: "GCX makes it easier to protect your data through automated Snapshots. You can capture the state of your disk at any moment and restore it instantly if needed."
  }
];

export default function BlockStoragePricingPage({ packageCloudStack, packageProxmox }: PackageProps) {

  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Block Storage"
        description="GCX Private Network allows your virtual machines and resources to communicate securely and efficiently within an isolated environment, without exposing traffic to the public internet. Perfect for multi-tier applications, internal services, and sensitive workloads."
      />

      <div className="w-screen mt-10">
        {/* Proxmox */}
        <div className="py-6 lg:py-12 md:py-12">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="lg:mx-8 md:mx-8 mx-4 pb-6 lg:pb-12 md:pb-12">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Block Storage
              </p>
              <p className="text-base text-gray-600 max-w-5xl">
                An IP Address is a unique identifier that allows your server or
                device to communicate on a network. It enables public access to
                your applications and secure internal connectivity between cloud
                resources. Used for hosting websites, APIs, and managing remote
                access.
              </p>
            </div>

            {/* Proxmox */}
            <section id="proxmox" className="scroll-mt-40">
              <div className="px-4 lg:px-8 md:px-8" >
                <p className="xl:text-2xl text-xl text-gray-700 font-bold mb-2">
                  Proxmox Cloud Compute
                </p>
                <p className="text-gray-600 max-w-5xl">
                  Take full control of your infrastructure with Proxmox. Whether you need full hardware virtualization with KVM or lightweight isolated containers, our Proxmox nodes offer high-speed I/O and low-latency networking to keep your development pipeline moving fast.
                </p>
              </div>

              <div className="px-4 lg:px-8 md:px-8 pb-6 lg:pb-12 md:pb-12">
                <DataTable
                  columns={blockStorageColumns("block-storage")}
                  data={packageProxmox}
                />
              </div>
            </section>

            {/* CloudStack */}
            <section id="cloudstack" className="scroll-mt-40">
              <div className="px-4 lg:px-8 md:px-8 ">
                <p className="xl:text-2xl text-xl text-gray-700 font-bold mb-2">
                  CloudStack Compute
                </p>
                <p className="text-gray-600 max-w-5xl">
                  Take full control of your infrastructure with Proxmox. Whether you need full hardware virtualization with KVM or lightweight isolated containers, our Proxmox nodes offer high-speed I/O and low-latency networking to keep your development pipeline moving fast.
                </p>
              </div>

              <div className="px-4 lg:px-8 md:px-8 pb-6 lg:pb-12 md:pb-12">
                <DataTable
                  columns={blockStorageColumns("block-storage")}
                  data={packageCloudStack}
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      <BlockStoragePricingSection />

      <QuestionCard faqData={blockStorageFaqs} />

    </div>
  );
}
