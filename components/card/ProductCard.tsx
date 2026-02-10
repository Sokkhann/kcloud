
import { ProductListProps } from '@/type/dataTypes'
import { icons, Link } from 'lucide-react';

interface productMenu {
  products: ProductListProps;
}

export default function ProductCard({ products }: productMenu) {
 const Icon = icons[products.icon];
  return (
    <Link href={products.path} className="group relative aspect-square bg-white rounded-2xl p-8 shadow-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-gcxPrimary/60">
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="lg:text-2xl md:text-2xl text-lg font-bold text-gray-700 group-hover:text-gcxPrimary mb-4">{products.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-auto">
          {products.description}
        </p>
        <Icon className="w-12 h-12 self-end text-gray-200 group-hover:text-gcxprimary transition-all" />
      </div>
    </Link>
  );
}
