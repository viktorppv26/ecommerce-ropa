"use client";

import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

type InfoProductProps = {
    product: {
        id: number;
        ProductName: string;
        Description: string;
        Price: number;
        Color: string;
        Gender: string;
        Size: string;
    };
};

const InfoProduct = ({ product }: InfoProductProps) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { addItem } = useCart();
    const { addLoveItem, removeLovedItem } = useLovedProducts();

    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl">{product.ProductName}</h1>

                <div className="flex items-center justify-between gap-3">
                    <p className="px-2 py-1 text-xs text-white bg-black rounded-full w-fit">
                        {product.Color}
                    </p>
                    <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                        {product.Gender}
                    </p>
                </div>
            </div>

            <Separator className="my-4" />

            <p>{product.Description}</p>

            <Separator className="my-4" />

            <p className="my-4 text-2xl">
                {formatPrice(product.Price)}
            </p>

            <div className="flex items-center gap-5">
                <Button
                    className="w-full"
                    onClick={() => addItem(product)}
                >
                    <ShoppingCart size={20} strokeWidth={1} className="transition duration-300 cursor-pointer" />
                    Comprar
                </Button>
                <Heart
                    size={30}
                    strokeWidth={1}
                    className={`transition duration-300 cursor-pointer flex-shrink-0 ${
                        isFavorite ? "fill-black" : "hover:fill-black"
                    }`}
                    onClick={() => {
                        if (isFavorite) {
                            removeLovedItem(product.id);
                            setIsFavorite(false);
                        } else {
                            addLoveItem(product);
                            setIsFavorite(true);
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default InfoProduct;