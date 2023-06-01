import { Product } from "@/types"
import ProductCard from "./ProductCard"

type ProductListProps = {
  products: Product[]
}

export default function ProductList ({products}: ProductListProps) {
  return (
    <>
			<h1 className='text-3xl font-semibold mb-4'>Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}