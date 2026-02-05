import KubernetesPricingPage from "@/components/page/pricing/KubernetesPricingPage";
import { getPackageK8s } from "@/lib/api/getPackage";
import type { Metadata } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "Kubernetes Pricing | GCX K-Cloud",
  description:
    "Discover scalable and transparent Kubernetes pricing on GCX K-Cloud. Run containerized workloads efficiently with our managed Kubernetes solutions.",

  keywords: [
    "Kubernetes Pricing",
    "GCX K-Cloud",
    "Managed Kubernetes Cambodia",
    "Cloud Container Platform",
    "K8s Pricing Cambodia",
    "Enterprise Kubernetes",
    "Scalable Container Infrastructure",
    "Cloud Native Services",
  ],

  openGraph: {
    title: "Kubernetes Pricing | GCX K-Cloud",
    description:
      "Scalable and transparent Kubernetes pricing on GCX K-Cloud. Efficiently manage your containerized workloads with enterprise-grade solutions.",
    url: `${domain}/pricing/kubernetes`,
    siteName: "GCX K-Cloud",
    images: [
      {
        url: `${domain}/about-us.png`,
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud Kubernetes Pricing",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kubernetes Pricing | GCX K-Cloud",
    description:
      "Scalable and transparent Kubernetes pricing on GCX K-Cloud. Manage container workloads efficiently with our managed K8s services.",
    images: [
      `${domain}/about-us.png`,
    ],
  },
};


export default async function page() {

  const packages = await getPackageK8s({ service: "Kubernetes" })

  return (
    <div>
      <div>
        <KubernetesPricingPage plans={packages ?? []} />
      </div>
    </div>
  );
}
