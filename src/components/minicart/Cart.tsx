import { useCartStore } from "@/stores/useCartStore";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce(
    (acc, product) => acc + product.price * (product.quantity as number),
    0
  );

  return (
    <section>
      <ul>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
    </section>
  );
}
