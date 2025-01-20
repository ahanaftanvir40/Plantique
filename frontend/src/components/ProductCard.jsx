import { ShoppingBag } from 'lucide-react'

function ProductCard() {
    return (
        <div className="w-72 bg-gray-50 rounded-2xl">
            <div className="flex justify-center items-center">
                <img src="./cactus.png" alt="" className="w-46 h-46" />
            </div>
            <div className="flex justify-between  items-center">

                <div className="px-4">
                    <h1 className=" font-semibold text-[#102B2C]">Cactus Sam</h1>
                    <h1 className="text-[#C5855D] font-semibold">$100.00</h1>
                </div>
                <div className='p-3'>
                    <div className="flex items-center p-3 rounded-full bg-green-900 hover:bg-green-800">
                        <ShoppingBag size={24} className='text-white/60' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard
