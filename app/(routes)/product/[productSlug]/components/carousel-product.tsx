/* eslint-disable @next/next/no-img-element */
"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type CarouselProductProps = {
    product: {
        ProductName: string;
        Images: { id: number; url: string }[];
    };
};

const getImageUrl = (url: string) => {
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`;
}

const CarouselProduct = ({ product }: CarouselProductProps) => {
    return (
        <div className="w-full sm:w-[500px]">
            <Carousel>
                <CarouselContent>
                    {product.Images?.map((image) => (
                        <CarouselItem key={image.id}>
                            <img
                                src={getImageUrl(image.url)}
                                alt={product.ProductName}
                                className="rounded-lg w-full h-96 object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CarouselProduct;