import AboutPage from '@/components/page/AboutPage'
import { Metadata } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "About Us | GCX K-Cloud",
  description: "Learn about GCX K-Cloud, Cambodia's trusted cloud service provider. Discover our vision, mission, and journey to deliver reliable cloud and internet solutions.",
  keywords: ["GCX K-Cloud", "About Us", "Cloud Services Cambodia", "Cloud Solutions", "Digital Transformation"],

  openGraph: {
    title: "About Us | GCX K-Cloud",
    description: "Learn about GCX K-Cloud, Cambodia's trusted cloud service provider. Discover our vision, mission, and journey to deliver reliable cloud and internet solutions.",
    url: `${domain}/about-us`,
    siteName: "GCX K-Cloud",
    images: [
      {
        url: `${domain}/about-us.png`,
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud About Us",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | GCX K-Cloud",
    description: "Learn about GCX K-Cloud, Cambodia's trusted cloud service provider. Discover our vision, mission, and journey to deliver reliable cloud and internet solutions.",
    images: [`${domain}/about-us.png`],
  },
};
export default function page() {
  return (
    <div>
      <AboutPage/>
    </div>
  )
}
