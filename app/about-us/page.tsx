import AboutPage from '@/components/page/AboutPage'
import { Metadata } from "next";

const aboutMetadata = {
  title: "Kcloud Cambodia | Leading Cloud Solutions in Cambodia",
  description: "Kcloud is Cambodia's trusted provider for reliable cloud services. Discover our vision, mission, and journey to transform Cambodia's digital landscape.",
  keywords: [
    "Kcloud",
    "Kcloud Cambodia",
    "Cambodia Cloud Provider",
    "Cloud Solutions Cambodia",
    "Digital Transformation Cambodia",
    "Reliable Cloud Products",
    "Kcloud Vision",
    "Kcloud Mission",
    "Cambodia's Leading cloud product",
    "Cloud Product Phnom Penh",
    "Prioritize Your Security and Privacy",
    "Cloud Infrastructure",
    "24/7 Support Cloud Support in Khmer and English"
  ],
  image: "https://gcx6.sovichetra.com/wp-content/uploads/2025/07/about_us.jpg",
};

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, keywords, image } = aboutMetadata;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/about-us`,
      siteName: "Kcloud",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/about-us`,
    },
  };
}

export default function page() {
  return (
    <div>
      <AboutPage/>
    </div>
  )
}
