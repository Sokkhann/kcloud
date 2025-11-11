import SimpleCard from "@/components/card/SimpleCard";
import React from "react";

export default function VMUseCaseSection() {
  const vmUseCases = [
    {
      id: "1",
      title: "Software Development & Testing",
      desc: "Run multiple virtual machines to test applications across different operating systems without needing separate hardware.",
    },
    {
      id: "2",
      title: "Server Consolidation",
      desc: "Host multiple servers on a single physical machine to save cost, reduce space, and improve efficiency.",
    },
    {
      id: "3",
      title: "Disaster Recovery",
      desc: "Quickly back up and restore virtual machines to recover from hardware failures or unexpected outages.",
    },
    {
      id: "4",
      title: "Cloud Hosting & SaaS",
      desc: "Provide scalable and isolated environments for clients, forming the foundation of most cloud services.",
    },
    {
      id: "5",
      title: "Training & Sandbox Environments",
      desc: "Use isolated virtual machines for safe experimentation, learning, or testing new software.",
    },
    {
      id: "6",
      title: "Running Legacy Applications",
      desc: "Run older operating systems or applications on modern hardware without compatibility issues.",
    },
  ];

  return (
    <div className=" w-screen">
      <div className=" max-w-7xl mx-auto py-16 md:py-32 lg:py-32">
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
          {vmUseCases.map((card, index) => (
            <div key={index} className="relative">
              <SimpleCard title={card.title} desc={card.desc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
