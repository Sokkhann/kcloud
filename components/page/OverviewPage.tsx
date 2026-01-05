import HeroComponent from "../HeroComponent";
import GetStartedCard from "../card/GetStartedCard";
import SwitchCard from "../card/SwitchCarousel";
import ScrollReveal from "../animations/ScrolReveal";
import WhyGCXCloudSection from "../section/about-us/WhyGCXCloudSection";
import DataCenterSection from "../section/about-us/DataCenterSection";
import CustomerListSection from "../section/overview-detail/CustomerListSection";
import PowerSection from "../section/overview-detail/PowerSection";
import ProductListSection from "../section/overview-detail/ProductListSection";
import ListingOverviewPackage from "../card/ListingOverviewPackage";
import WelcomeSection from "../section/overview-detail/WelcomeSection";
import ListingPackageSection from "../section/overview-detail/ListingPackageSection";

export default function OverviewPage() {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Smartest and Secure Choice for Connectivity"
        description="Global Cloud Exchange Company Limited (GCX), a Cambodia-registered company, is one of the country’s first “Carrier Neutral” Tier 3 Data Center built to meet the ever-growing needs of institutional and high-level clients in Cambodia’s emerging economy."
      />

      <div className="">
        {/* Product Section */}
        <section className=" bg-gray-100">

          {/* listing package section */}
          <ListingPackageSection/>

          {/* products */}
          <ProductListSection/>

          {/* why cloud gcx section */}
          <WhyGCXCloudSection />

          {/* Customer Testimonials Section */}
          <CustomerListSection/>

          {/* Power Section */}
          <section id="why-choose-gcx" className="lg:py-16 md:py-16 py-16 bg-white">
            <ScrollReveal>
              <div className="max-w-7xl mx-auto">
                <div className="lg:px-8 md:px-8 px-4">
                  {/* Data Center Section */}
                  <PowerSection />
                </div>
              </div>
            </ScrollReveal>
          </section>

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
