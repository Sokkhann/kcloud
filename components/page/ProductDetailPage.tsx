import React from "react";
import HeroComponent from "../HeroComponent";
import { productDetailLayout } from "@/type/productDetailLayout";

interface ProductDetailProps {
  slug: string;
}

export default function ProductDetailPage({ slug }: ProductDetailProps) {
  console.log("This is the slug: ", slug);

  const product = productDetailLayout.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 rounded-lg">
          <div className="mb-6 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 14 14"
              className="text-green-900"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6a6 6 0 1 0 3.476 10.89l2.817 2.817a1 1 0 0 0 1.414-1.414l-2.816-2.816A6 6 0 0 0 6 0"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-green-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn&apos;t find the product you&apos;re looking for. It
            may have been moved or doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

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
          slug={product.slug}
        />
      </div>

      <div className="">
        <LayoutComponent product={product} />
      </div>
    </div>
  );
}
