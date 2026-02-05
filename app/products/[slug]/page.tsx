import ProductDetailPage from "@/components/page/ProductDetailPage";
import { productDetailLayout } from "@/type/productDetailLayout";
import { Metadata } from "next";


interface ProductPageProps {
  params: Promise<{ slug: string }>; // params is a Promise
}

const domain = process.env.NEXT_PUBLIC_DOMAIN;

// Dynamic metadata for the product
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params; // ✅ unwrap the Promise

  const product = productDetailLayout.find((p) => p.slug === slug);

  const title = product ? `${product.title} | GCX K-Cloud` : "Product | GCX K-Cloud";
  const description = product
    ? product.desc
    : "Explore GCX K-Cloud products and services for scalable cloud solutions in Cambodia.";

  const imageUrl = product ? `${domain}/products/${slug}.png` : `${domain}/about-us.png`;

  return {
    title,
    description,
    keywords: product
      ? [`${product.title} Pricing`, "GCX K-Cloud", "Cloud Services Cambodia"]
      : ["GCX K-Cloud", "Cloud Services Cambodia"],
    openGraph: {
      title,
      description,
      url: `${domain}/products/${slug}`,
      siteName: "GCX K-Cloud",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function Page({ params }: ProductPageProps) {
  const resolvedParams = await params; // ✅ wait for params before using
  const { slug } = resolvedParams;

  // simulate async delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 100));

  return <ProductDetailPage slug={slug} />;
}