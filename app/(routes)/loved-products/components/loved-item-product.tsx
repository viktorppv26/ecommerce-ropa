"use client"

/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation"
import { useLovedProducts } from "@/hooks/use-loved-products"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductColorGender from "@/components/shared/product-color-gender"

type LovedItemProductProps = {
    product: ProductType
}

const getImageUrl = (url: string) => {
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`;
}

const LovedItemProduct = ({ product }: LovedItemProductProps) => {
    const router = useRouter()
    const { removeLovedItem } = useLovedProducts()
    const { addItem } = useCart()

    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
        <li className="flex py-6 border-b">
            <div
                className="cursor-pointer"
                onClick={() => router.push(`/product/${product.slug}`)}
            >
                <img
                    src={getImageUrl(product.Images?.[0]?.url)}
                    alt="Product"
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
                />
            </div>

            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.ProductName}</h2>
                    <p className="font-bold">{formatPrice(product.Price)}</p>

                    <ProductColorGender
                        color={product.Color}
                        gender={product.Gender}
                    />

                    <Button className="mt-5 rounded-full" onClick={addToCheckout}>
                        Añadir al carrito
                    </Button>
                </div>

                <div>
                    <button
                        className="rounded-full flex items-center justify-center bg-white border p-1"
                        onClick={() => removeLovedItem(product.id)}
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default LovedItemProduct