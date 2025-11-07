import React from "react";
import HeroComponent from "../HeroComponent";
import { productDetailLayout } from "@/data/productDetailLayout";

interface ProductDetailProps {
  slug: string;
}

export default function ProductDetailPage({ slug }: ProductDetailProps) {
  console.log("This is the slug: ", slug);

  const product = productDetailLayout.find((p) => p.slug === slug);

  if (!product)
    return <div className="p-8 text-red-500">Product not found</div>;

  const LayoutComponent = product.layout;

  return (
    <div className="bg-gray-200 w-screen">
      <div>
        <HeroComponent
          image={"/hero-bg.png"}
          title={product.title}
          description={product.desc}
          showContactSales={true}
          showGetStarted={true}
        />
      </div>

      <div className=" pt-10">
        <LayoutComponent product={product} />
      </div>
    </div>
  );
}
