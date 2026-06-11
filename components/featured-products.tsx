"use client"

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious 
} from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

const getImageUrl = (url: string) => {
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`;
}

const FeaturedProducts = () => {
    const { result, loading }: ResponseType = useGetFeaturedProducts();
    const router = useRouter();
    const { addItem } = useCart();

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            
            <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && <SkeletonSchema grid={3} />}
                    
                    {!loading && result && result.map((product: any) => (
                        <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 group">
                            <div className="p-1">
                                <Card className="py-4 border border-gray-200 shadow-none">
                                    <CardContent className="relative flex flex-col items-center justify-center p-4">
                                        
                                        {product.Images && product.Images.length > 0 && (
                                            <img 
                                                src={getImageUrl(product.Images[0].url)}
                                                alt={product.ProductName} 
                                                className="w-full h-[200px] object-contain mb-4"
                                            />
                                        )}

                                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100">
                                            <div className="flex justify-center gap-x-6">
                                                <IconButton 
                                                    onClick={() => router.push(`/product/${product.slug}`)} 
                                                    icon={<Expand size={20} />} 
                                                    className="text-gray-600" 
                                                />
                                                <IconButton 
                                                    onClick={() => addItem(product)}
                                                    icon={<ShoppingCart size={20} />} 
                                                    className="text-gray-600" 
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-between gap-4 px-8 mt-4 w-full">
                                            <h3 className="text-lg font-bold">{product.ProductName}</h3>
                                            <div className="flex items-center gap-3">
                                                <p className="px-2 py-1 text-xs text-white bg-black rounded-lg">
                                                    {product.Size}
                                                </p>
                                                <p className="px-2 py-1 text-xs text-white bg-black rounded-lg">
                                                    {product.Gender}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <p className="px-8 mt-2 text-gray-600 w-full">${product.price} MXN</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                <div className="hidden sm:block">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;