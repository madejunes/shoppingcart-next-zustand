import ProductList from '@/components/products/ProductList'
import { products } from '@/data/db-dummy'
import { useState } from 'react'

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
    <main className='container mx-auto md:w-10/12 py-8 px-4'>
      <ProductList products={products} />
    </main>
    </>
  )
}