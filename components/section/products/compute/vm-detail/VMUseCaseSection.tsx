import SimpleCard from "@/components/card/SimpleCard";
import data from "@/data/dataCards.json"
import { Terminal, Key, FileJson, Lock } from "lucide-react";
import React from "react";

const usecase = [
  {
    title: "Dynamic Security Groups",
    icon: <Lock size={24} strokeWidth={1.5} />,
    desc: "Control ingress and egress traffic with stateful firewalls at the instance level for granular security control."
  },
  {
    title: "VNC Console Access",
    icon: <Terminal size={24} strokeWidth={1.5} />,
    desc: "Locked out of SSH? Use our web-based emergency console to access your instance directly from your browser, even without network connectivity."
  },
  {
    title: "SSH Key Management",
    icon: <Key size={24} strokeWidth={1.5} />,
    desc: "Secure your Linux instances with industry-standard SSH key pairs instead of vulnerable passwords to prevent brute-force attacks."
  },
  {
    title: "User Data & Metadata",
    icon: <FileJson size={24} strokeWidth={1.5} />,
    desc: "Automate your server configuration at boot-time using cloud-init scripts and custom metadata for rapid deployment."
  }
]

export default function VMUseCaseSection() {

  return (
    <div className=" w-screen">
      <div className=" max-w-7xl mx-auto py-6 lg:py-12 md:py-12">
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
          {usecase.map((card, index) => (
            <div key={index} className="relative">
              <SimpleCard title={card.title} desc={card.desc} icon={card.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
