import ProductDetailPage from "@/components/page/ProductDetailPage";
import React from "react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: ProductPageProps) {
  const resolvedParams = await params; // ✅ wait for params before using
  const { slug } = resolvedParams;

  // simulate async delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 100));

  return <ProductDetailPage slug={slug} />;
}