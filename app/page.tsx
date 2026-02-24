import type { Metadata } from "next";
import PageComponent from "@/components/page/OverviewPage";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "Cloud Connectivity | GCX K-Cloud",
  description: "High-performance cloud connection services for enterprises in Cambodia. Reliable, fast, and scalable cloud networking solutions.",

  keywords: [
    "GCX K-Cloud",
    "Cloud Connectivity",
    "Enterprise Cloud Services",
    "High-Performance Networking",
    "Cloud Networking Cambodia",
  ],

  openGraph: {
    title: "Cloud Products | GCX K-Cloud",
    description: "High-performance cloud connection services for enterprises in Cambodia. Reliable, fast, and scalable cloud networking solutions.",
    url: `${domain}/`,
    siteName: "GCX K-Cloud",
    images: [
      {
        url: `${domain}/about-us.png`, // your public homepage image
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud Cloud Connectivity",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cloud Connectivity | GCX K-Cloud",
    description: "High-performance cloud connection services for enterprises in Cambodia. Reliable, fast, and scalable cloud networking solutions.",
    images: [`${domain}/about-us.png`],
  },
}


export default function Home() {
  return (
    <div className=" bg-gray-500">
      <PageComponent />
    </div>
  );
}
