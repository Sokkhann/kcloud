"use client";

import HeroComponent from "@/components/HeroComponent";
import { PackageData } from "@/type/dataTypes";
import { k8Columns } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";
import QuestionCard from "@/components/card/QuestionCard";

interface PackageProps {
  plans: PackageData[]
}

const k8sPricingFaqs = [
  {
    question: "What is GCX Managed Kubernetes?",
    answer: "It is an easier way to deploy, manage, and scale containerized applications. We handle the control plane and infrastructure, so you can focus on your code."
  },
  {
    question: "How does local hosting benefit my K8s cluster?",
    answer: "By being local to Cambodia, your microservices communicate with lower latency. This results in faster application performance and a better experience for your end-users."
  },
  {
    question: "Is the Kubernetes Control Plane free?",
    answer: "We offer transparent pricing. You only pay for the Worker Nodes (VMs) and Load Balancers you use. The management of the K8s cluster itself is designed to be cost-effective."
  },
  {
    question: "Can I automatically scale my clusters?",
    answer: "Yes, GCX supports Horizontal Pod Autoscaling. It makes it easier to handle traffic spikes by automatically adding more pods when demand increases."
  },
  {
    question: "How secure are my containers on GCX?",
    answer: "Every cluster is isolated within a secure private network (VPC). Combined with local data residency, your containerized workloads meet the highest security standards in Cambodia."
  },
  {
    question: "Does GCX support Persistent Volumes (Storage)?",
    answer: "Yes, you can easily attach high-performance local block storage to your containers, ensuring your database and file data remain secure and persistent."
  }
];

export default function KubernetesPricingPage({ plans }: PackageProps) {
  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/price-bg.png"
        title="Kubernetes Cluster"
        description="GCX block storage delivers high-performance, low-latency persistent block storage designed to be the foundational engine for your most demanding workloads. This capability is essential for:"
      />

      <div className="w-screen mt-10">
        <div className="py-6 lg:py-12 md:py-12">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className=" lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Kubernetes Cluster Price
              </p>
              <p className="text-base text-gray-600 max-w-5xl">
                Always know what you&apos;ll pay with monthly caps and flat
                pricing across all data centers.
              </p>
            </div>

            <div className="px-4 lg:px-8 md:px-8 pb-6 md:pb-12 lg:pb-12">
              <DataTable columns={k8Columns("kubernetes")} data={plans} />
            </div>
          </div>
        </div>

        <QuestionCard faqData={k8sPricingFaqs} />
      </div>
    </div>
  );
}
