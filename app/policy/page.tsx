
import PrivacyPolicyPage from '@/components/page/PolicyPage'
import { Metadata } from 'next';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "Privacy Policy | GCX K-Cloud",
  description: "Read the privacy policy of GCX K-Cloud. Learn how we collect, use, and protect your data when using our cloud services.",
  keywords: ["GCX K-Cloud", "Privacy Policy", "Data Protection", "Cloud Services Cambodia"],

  openGraph: {
    title: "Privacy Policy | GCX K-Cloud",
    description: "Read the privacy policy of GCX K-Cloud. Learn how we collect, use, and protect your data.",
    url: `${domain}/privacy-policy`,
    siteName: "GCX K-Cloud",
    images: [
      {
        url: `${domain}/about-us.png`, // can reuse your default image
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud Privacy Policy",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | GCX K-Cloud",
    description: "Read the privacy policy of GCX K-Cloud. Learn how we collect, use, and protect your data.",
    images: [`${domain}/about-us.png`],
  },
};

export default function page() {
  return (
    <div className='mt-10'>
      <PrivacyPolicyPage />
    </div>
  )
}
