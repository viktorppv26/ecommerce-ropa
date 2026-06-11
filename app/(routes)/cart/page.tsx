"use client"

import { useCart } from "@/hooks/use-cart"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/formatPrice"
import { Button } from "@/components/ui/button"
import CartItem from "./components/car-item"
import { makePaymentRequest } from "@/api/payments"

const CartPage = () => {
    const cart = useCart()

    const prices = cart.items.map((product) => product.Price)
    const totalPrice = prices.reduce((total, price) => total + price, 0)

    const buyStripe = async () => {
        try {
            const res = await makePaymentRequest.post("/api/orders", {
                products: cart.items
            })
            window.location.href = res.data.stripeSession.url
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>

            <div className="grid sm:grid-cols-2 gap-5">
                {/* Lista de productos */}
                <div>
                    {cart.items.length === 0 && (
                        <p>No hay productos en el carrito</p>
                    )}
                    <ul>
                        {cart.items.map((item) => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </ul>
                </div>

                {/* Order Summary */}
                <div className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-800">
                        <p className="mb-3 text-lg font-semibold">Order Summary</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p>Order total</p>
                            <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-3">
                            <Button
                                className="w-full"
                                onClick={buyStripe}
                            >
                                Comprar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage