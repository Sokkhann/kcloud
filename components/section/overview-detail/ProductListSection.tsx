import ScrollReveal from '@/components/animations/ScrolReveal'
import ProductCardCarousel from '@/components/card/ProductCardCarousel'

export default function ProductListSection() {

  return (
    <section
      id="products"
      className="text-center lg:py-12 md:py-12 py-6"
    >
      <ScrollReveal>
        <div className="max-w-7xl mx-auto">
          {/* title and description */}
          <div className="text-center mx-4 mb-4">
            <p className="lg:text-4xl md:text-4xl text-2xl font-bold text-gray-700 lg:mx-0 mx-12">
              See Our Products & Services
            </p>
            <p className=" text-gray-600 mt-4 max-w-3xl mx-auto">
              Bringing your business to the next level with our innovative
              solutions designed to enhance performance, efficiency, and
              long-term growth.
            </p>
          </div>

          {/* Product Tabs section */}
          {/* <ProductTab /> */}
          <ProductCardCarousel/>
        </div>
      </ScrollReveal>
    </section>
  )
}
