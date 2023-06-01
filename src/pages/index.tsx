import ProductList from '@/components/products/ProductList'
import { products } from '@/data/db-dummy'
import { useState } from 'react'

import Header from '@/components/ui/Header'
import Drawer from '@/components/ui/Drawer'
import Cart from '@/components/minicart/Cart'

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
    <Header onCartIconClick={handleCartIconClick} />
    <Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
      <Cart />
    </Drawer>
    <main className='container mx-auto md:w-10/12 py-8 px-4'>
      <ProductList products={products} />
    </main>
    </>
  )
}