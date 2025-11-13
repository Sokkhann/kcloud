"use client"
import React from "react";
import HeroComponent from "../HeroComponent";
import ProductCard from "../card/ProductCard";
import GetStartedCard from "../card/GetStartedCard";
import data from "@/data/products.json";
import { getReactIcon } from "@/type/getReactIcon";
import { IconCardProps } from "@/type/dataTypes";

// --- Compute tab products ---
const computeProductCards = data.computeProducts;
const computeProducts: IconCardProps[] = computeProductCards.map((card) => ({
  ...card,
  icon: getReactIcon(card.icon),
}));

// --- storage tab products ---
const storageProductCards = data.storageProducts;
const storageProduct: IconCardProps[] = storageProductCards.map((card) => ({
  ...card,
  icon: getReactIcon(card.icon),
}));

// --- networking tab products ---
const networkingProductCards = data.networkingProducts
const networkingProduct: IconCardProps[] = networkingProductCards.map((card) => ({
  ...card,
  icon: getReactIcon(card.icon),
}));

// --- product tab products ---
const policyProductCards = data.policyProducts
const policyProduct: IconCardProps[] = policyProductCards.map((card) => ({
  ...card,
  icon: getReactIcon(card.icon),
}));

export default function ProductPage() {
  return (
    <div className="bg-gray-200 w-screen">
      {/* Hero Section About page */}
      <HeroComponent
        height="h-[500px]"
        image="/hero-bg.png"
        title="Simple Predictable Pricing"
        description="Always know what you’ll pay with monthly caps and flat pricing"
      />

      <div className="mt-10 space-y-16">
        <div className="pt-16 max-w-7xl mx-auto">
          {/* title and description */}
          <div className="text-center px-6">
            <p className="xl:text-5xl md:text-4xl text-3xl font-bold text-gray-700 ">
              Compute
            </p>
            <p className="lg:text-lg text-base text-gray-600 mt-4 max-w-2xl mx-auto">
              Bringing your business to the next level with our innovative
              solutions designed to enhance performance, efficiency, and
              long-term growth.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-20 mt-20">
            {computeProducts.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                title={product.title}
                desc={product.desc}
                link={product.link}
              />
            ))}
          </div>
        </div>

        <div className=" max-w-7xl mx-auto">
          {/* title and description */}
          <div className="text-center px-6">
            <p className="xl:text-5xl md:text-4xl text-3xl font-bold text-gray-700 ">
              Storage & Data Protection
            </p>
            <p className="lg:text-lg text-base text-gray-600 mt-4 max-w-2xl mx-auto">
              Bringing your business to the next level with our innovative
              solutions designed to enhance performance, efficiency, and
              long-term growth.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-20 mt-20">
            {storageProduct.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                title={product.title}
                desc={product.desc}
                link={product.link}
              />
            ))}
          </div>
        </div>

        <div className=" max-w-7xl mx-auto">
          {/* title and description */}
          <div className="text-center px-6">
            <p className="xl:text-5xl md:text-4xl text-3xl font-bold text-gray-700 ">
              Networking
            </p>
            <p className="lg:text-lg text-base text-gray-600 mt-4 max-w-2xl mx-auto">
              Bringing your business to the next level with our innovative
              solutions designed to enhance performance, efficiency, and
              long-term growth.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-20 mt-20">
            {networkingProduct.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                title={product.title}
                desc={product.desc}
                link={product.link}
              />
            ))}
          </div>
        </div>

        <div className=" mb-16">
          {/* title and description */}
          <div className="text-center px-6">
            <p className="xl:text-5xl md:text-4xl text-3xl font-bold text-gray-700 ">
              Policy & Placement
            </p>
            <p className="lg:text-lg text-base text-gray-600 mt-4 max-w-2xl mx-auto">
              Bringing your business to the next level with our innovative
              solutions designed to enhance performance, efficiency, and
              long-term growth.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-20 mt-20">
            {policyProduct.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                title={product.title}
                desc={product.desc}
                link={product.link}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto pb-16 px-6">
          <GetStartedCard />
        </div>
      </div>
    </div>
  );
}
