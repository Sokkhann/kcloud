import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "../card/ProductCard";
import data from "@/data/products.json";
import { IconCardProps } from "@/type/dataTypes";
import { getReactIcon } from "@/type/getReactIcon";

// --- Compute tab products ---
const computeProducts = data.computeProducts;
const computeProductCards: IconCardProps[] = computeProducts.map((card) => ({
  ...card,
  icon: getReactIcon(card.icon),
}));

// --- storage tab products ---
const storageProducts = data.storageProducts;
const storageProductCards: IconCardProps[] = storageProducts.map((card) => ({
  ...card,
  icon: getReactIcon(card.icon),
}));


// --- networking tab products ---
const networkProducts = data.networkingProducts;
const networkingProductCards: IconCardProps[] = networkProducts.map((card) => ({
  ...card,
  icon: getReactIcon(card.icon),
}));

// --- product tab products ---
const policyProducts = data.policyProducts;
const policyProductCards: IconCardProps[] = policyProducts.map((card) => ({
  ...card,
  icon: getReactIcon(card.icon),
}));

export function ProductTab() {
  return (
    <div className="">
      <Tabs defaultValue="compute" className="bg-none">
        {/* Tabs List */}
        <TabsList
          className="
          w-screen
          lg:w-full
          md:w-full
          lg:px-0
          md:px-8
          px-4
          h-24
          py-auto
          border-b-2 
          rounded-none 
          flex
          justify-start
          lg:justify-center
          md:justify-center
          scroll-px-4
          overflow-x-auto 
          whitespace-nowrap
          lg:overflow-visible 
          scrollbar-hide 
          snap-x 
          snap-mandatory
          bg-gray-100
      "
        >
          <TabsTrigger
            className="text-gray-700 whitespace-nowrap px-4 flex-shrink-0 snap-start"
            value="compute"
          >
            Compute
          </TabsTrigger>
          <TabsTrigger
            className="text-gray-700 whitespace-nowrap px-4 flex-shrink-0 snap-start"
            value="storage"
          >
            Storage & Data Protection
          </TabsTrigger>
          <TabsTrigger
            className="text-gray-700 whitespace-nowrap px-4 flex-shrink-0 snap-start"
            value="networking"
          >
            Networking
          </TabsTrigger>
          <TabsTrigger
            className="text-gray-700 whitespace-nowrap px-4 flex-shrink-0 snap-start"
            value="policy"
          >
            Policy & Placement
          </TabsTrigger>
        </TabsList>

        {/* Compute Tab */}
        <TabsContent value="compute">
          <TabsContent value="compute">
            <div
              className="grid justify-center justify-items-center 
               lg:gap-8 md:gap-8 gap-4 mt-20 mx-4 md:mx-8 lg:md-0
               grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
            >
              {computeProductCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <ProductCard
                    key={index}
                    icon={Icon}
                    title={card.title}
                    desc={card.desc}
                  />
                );
              })}
            </div>
          </TabsContent>
        </TabsContent>

        {/* Storage Tab */}
        <TabsContent value="storage">
          <div
            className="grid justify-center justify-items-center 
               lg:gap-8 md:gap-8 gap-4 mt-20 mx-4 md:mx-8 lg:md-0
               grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
          >
            {storageProductCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ProductCard
                  key={index}
                  icon={Icon}
                  title={card.title}
                  desc={card.desc}
                />
              );
            })}
          </div>
        </TabsContent>

        {/* Networking Tab */}
        <TabsContent value="networking">
          <div
            className="grid justify-center justify-items-center 
               lg:gap-8 md:gap-8 gap-4 mt-20 mx-4 md:mx-8 lg:md-0
               grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
          >
            {networkingProductCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ProductCard
                  key={index}
                  icon={Icon}
                  title={card.title}
                  desc={card.desc}
                />
              );
            })}
          </div>
        </TabsContent>

        {/* Policy Tab */}
        <TabsContent value="policy">
          <div
            className="grid justify-center justify-items-center 
               lg:gap-8 md:gap-8 gap-4 mt-20 mx-4 md:mx-8 lg:md-0
               grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
          >
            {policyProductCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ProductCard
                  key={index}
                  icon={Icon}
                  title={card.title}
                  desc={card.desc}
                />
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
