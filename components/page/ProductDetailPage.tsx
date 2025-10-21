import React from "react";
import HeroComponent from "../HeroComponent";
import { products } from "@/data/products";

interface ProductDetailProps {
  slug: string;
}

export default function ProductDetailPage({ slug }: ProductDetailProps) {
  console.log("This is the slug: ", slug);

  const product = products.find((p) => p.slug === slug);

  if (!product)
    return <div className="p-8 text-red-500">Product not found</div>;

  const LayoutComponent = product.layout;

  return (
    <div>
      <div>
        <HeroComponent
          image={"/hero-bg.png"}
          title={product.title}
          description={product.desc}
          showContactSales={true}
          showGetStarted={true}
        />
      </div>

      <LayoutComponent product={product}/>
    </div>
  );
}
