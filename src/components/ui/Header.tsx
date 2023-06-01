import useFromStore from "@/hooks/useFromStore"
import { useCartStore } from "@/store/useCartStore"
import { FiShoppingCart } from "react-icons/fi"

type HeaderProps = {
  onCartIconClick: () => void
}

export default function Header ({onCartIconClick}: HeaderProps) {
  const totalItems = useFromStore(useCartStore, state => state.totalItems)
  return (
    <header className='bg-gray-900 text-white py-4 flex items-center justify-between h-14 sticky top-0 z-10'>
			<nav className='container mx-auto md:w-10/12 px-4 flex justify-between'>
				<span className='text-lg font-semibold'>My E-commerce</span>
				<div className='relative'>
					<button
						type='button'
						title='Mini Cart'
						className='text-white text-xl flex items-center'
						onClick={onCartIconClick}
					>
						<FiShoppingCart />
						<div className='text-white rounded-full bg-blue-700 w-5 h-5 text-sm -ml-1'>{totalItems}</div>
					</button>
				</div>
			</nav>
		</header>
  )
}