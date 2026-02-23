import ProductDetailPage from "@/components/page/ProductDetailPage";
import { productDetailLayout } from "@/type/productDetailLayout";
import { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ slug: string }>; // params is a Promise
}

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://portal.gcxcloud.cc";

// Dynamic metadata for the product
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params; // unwrap the Promise

  const product = productDetailLayout.find((p) => p.slug === slug);

  const title = product ? `${product.title} | GCX KCloud` : "Product | GCX KCloud";
  const description = product
    ? product.desc
    : "Explore GCX KCloud products and services for scalable, secure, and reliable cloud solutions in Cambodia.";

  const imageUrl = product ? `${domain}/products/${slug}.png` : `${domain}/about-us.png`;
  const pageUrl = `${domain}/products/${slug}`;

  return {
    metadataBase: new URL(domain),
    title,
    description,
    keywords: product
      ? [
          `${product.title} Pricing`,
          `${product.title} Cloud`,
          "GCX KCloud",
          "Cloud Services Cambodia",
          "Enterprise Cloud Solutions",
          "Scalable Cloud Infrastructure",
        ]
      : ["GCX KCloud", "Cloud Services Cambodia", "Enterprise Cloud Solutions"],

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "GCX KCloud",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    category: "technology",
  };
}

// Main product page component
export default async function Page({ params }: ProductPageProps) {
  const resolvedParams = await params; // wait for params
  const { slug } = resolvedParams;

  // Optional: simulate async delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return <ProductDetailPage slug={slug} />;
}