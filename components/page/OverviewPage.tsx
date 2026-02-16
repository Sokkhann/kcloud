import HeroComponent from "../HeroComponent";
import GetStartedCard from "../card/GetStartedCard";
import ScrollReveal from "../animations/ScrolReveal";
import WhyGCXCloudSection from "../section/about-us/WhyGCXCloudSection";
import CustomerListSection from "../section/overview-detail/CustomerListSection";
import ProductListSection from "../section/overview-detail/ProductListSection";
import ListingPackageSection from "../section/overview-detail/ListingPackageSection";
import PartnerDisplaySection from "../section/overview-detail/PartnerDisplaySection";

export default function OverviewPage() {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="The Region’s First Multi-Site Data Center with Sub-1ms Connectivity"
        description="Engineered for speed and resilience, our multi-site data center provides under 1ms regional connectivity with strong physical infrastructure and diversified network pathways, ensuring secure and uninterrupted operations."
      />

      <div className="">
        {/* Product Section */}
        <section className=" bg-gray-100">

          {/* listing package section */}
          <ListingPackageSection/>

          {/* partners display section */}
          {/* <PartnerDisplaySection/> */}

          {/* products */}
          <ProductListSection/>

          {/* why cloud gcx section */}
          <WhyGCXCloudSection />

          {/* Customer Testimonials Section */}
          {/* <CustomerListSection/> */}

          {/* Power Section */}
          {/* <section id="why-choose-gcx" className="lg:py-16 md:py-16 py-16 bg-white">
            <ScrollReveal>
              <div className="max-w-7xl mx-auto">
                <div className="lg:px-8 md:px-8 px-4">
                  <PowerSection />
                </div>
              </div>
            </ScrollReveal>
          </section> */}

          <section className="max-w-7xl mx-auto my-32">
            <ScrollReveal>
              <div className="lg:px-8 md:px-8 px-4">
                <GetStartedCard />
              </div>
            </ScrollReveal>
          </section>
        </section>
      </div>
    </div>
  );
}
