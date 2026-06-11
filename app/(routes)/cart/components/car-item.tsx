"use client"

/* eslint-disable @next/next/no-img-element */
import { X } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/product"

type CartItemProps = {
    product: ProductType
}

const CartItem = ({ product }: CartItemProps) => {
    const cart = useCart()

    return (
        <li className="flex py-6 border-b">
            {/* Imagen */}
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-32 sm:w-32">
                <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.Images?.[0]?.url}`}
                    alt={product.ProductName}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <div className="ml-4 flex flex-1 flex-col justify-between">
                <div>
                    <h2 className="text-lg font-bold">{product.ProductName}</h2>
                    <p className="font-bold">{formatPrice(product.Price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                        <p className="px-2 py-1 text-xs text-white bg-black rounded-full w-fit">
                            {product.Color}
                        </p>
                        <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                            {product.Gender}
                        </p>
                    </div>
                </div>
            </div>

            {/* Botón eliminar */}
            <div>
                <button
                    className="rounded-full flex items-center justify-center bg-black border p-1"
                    onClick={() => cart.removeItem(product.id)}
                >
                    <X size={20} className="text-white" />
                </button>
            </div>
        </li>
    )
}

export default CartItem