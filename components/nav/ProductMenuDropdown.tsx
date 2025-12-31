import { NavbarProducts } from "@/type/dataTypes";
import FeatureCarouselComponent from "../card/FeatureCarouselComponent";
import { GroupedMenu } from "@/lib/navbarMenu";

interface ProductDropDownProps {
  products: GroupedMenu;
}

export default function ProductDropDown({ products }: ProductDropDownProps) {
  return (
    <section className="max-w-7xl mx-auto  top-full left-0 flex flex-col gap-0 px-0 lg:px-4 lg:py-6 py-0">
      <section className="flex flex-col lg:flex-row lg:gap-8 gap-6">
        {/* Product Categories */}
        <section className="lg:h-84 h-fit w-full overflow-y-auto">
          {/* <p className="font-semibold text-[24px] pb-4 hidden lg:block">Our Product Services</p> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-4 py-2 justify-between">
            {Object.entries(products).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-3">
                <h4 className="font-bold text-gray-700 mb-2">
                  {category}
                </h4>
                {items.map((product: any) => (
                  <a
                    href={product.path}
                    className="hover:text-gcxPrimary hover:cursor-pointer w-fit"
                    key={product.id}
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section className="w-full lg:max-w-[400px] lg:block hidden">
          <FeatureCarouselComponent items={Object.values(products).flat()} />        </section>
      </section>
    </section>
  );
}
