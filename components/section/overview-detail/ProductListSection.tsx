import ProductCardCarousel from '@/components/card/ProductCardCarousel'
import { getProductList } from '@/lib/navbarMenu'
import React from 'react'

export default async function ProductListSection() {
    const productMenu = await getProductList()
  return (
    <div>
      <ProductCardCarousel productMenu={productMenu}/>
    </div>
  )
}
