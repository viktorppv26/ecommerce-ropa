/* eslint-disable @next/next/no-img-element */
import IconButton from "@/components/icon-button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductCardProps = {
    product: {
        id: number;
        documentId: string;
        ProductName: string;
        slug: string;
        Price: number;
        Color: string;
        Size: string;
        Gender: string;
        Images: {
            url: string;
            id: number;
        }[];
    };
};

const ProductCard = ({ product }: ProductCardProps) => {
    const router = useRouter();

    return (
        <Link href={`/product/${product.slug}`}>
            <div className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
                <div className="absolute flex items-center justify-between gap-x-2 z-[1] top-4">
                    <p className="px-2 py-1 text-white bg-black w-fit text-xs">
                        {product.Color}
                    </p>
                    <p className="px-2 py-1 text-xs bg-yellow-900 rounded-full text-white">
                        {product.Gender}
                    </p>
                </div>

                <Carousel>
                    <CarouselContent>
                        {product.Images?.map((image) => (
                            <CarouselItem key={image.id}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                    alt={product.ProductName}
                                    className="rounded-lg w-full h-48 object-cover"
                                />
                                <div className="flex justify-center gap-x-6 mt-2">
                                    <IconButton
                                        onClick={() => router.push(`/product/${product.slug}`)}
                                        icon={<Expand size={20} className="text-gray-600" />}
                                    />
                                    <IconButton
                                        onClick={() => console.log("product")}
                                        icon={<ShoppingCart size={20} className="text-gray-600" />}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <p className="text-2xl text-center">{product.ProductName}</p>
                <p className="font-bold text-center">{formatPrice(product.Price)}</p>
            </div>
        </Link>
    );
};

export default ProductCard;