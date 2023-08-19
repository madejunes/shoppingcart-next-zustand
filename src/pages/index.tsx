import { useEffect, useState } from "react";

import ProductList from "@/components/products/ProductList";
import Header from "@/components/ui/Header";
import Drawer from "@/components/ui/Drawer";
import Cart from "@/components/minicart/Cart";

import { useProductsStore } from "@/stores/useProductStore";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { isLoading, products, fetchData } = useProductsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCartIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Header onCartIconClick={handleCartIconClick} />
      <Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
        <Cart />
      </Drawer>
      <main className="container mx-auto md:w-10/12 py-8 px-4">
        {isLoading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </>
  );
}
