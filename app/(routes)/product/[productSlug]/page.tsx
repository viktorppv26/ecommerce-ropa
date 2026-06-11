import { getProduct } from "@/api/getProduct";
import InfoProduct from "./components/info-product";
import CarouselProduct from "./components/carousel-product";

interface Props {
    params: Promise<{ productSlug: string }>;
}

export default async function ProductPage({ params }: Props) {
    const { productSlug } = await params; // 👈 await aquí es el fix

    const product = await getProduct(productSlug);

    if (!product) return <p>Producto no encontrado</p>;

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col sm:flex-row gap-10">
                <CarouselProduct product={product} />
                <InfoProduct product={product} />
            </div>
        </div>
    );
}