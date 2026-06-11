/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { ResponseType } from "@/types/response";

const getImageUrl = (url: string) => {
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`;
}

const ChooseCategory = () => {
    const { result, loading, error }: ResponseType = useGetCategories();

    if (loading) return <p className="text-center py-10">Cargando categorías...</p>;
    if (error) return <p className="text-center py-10 text-red-500">Error al cargar categorías</p>;

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8 text-center sm:text-left">
                Elige tu categoría favorita
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 justify-items-center">
                {result?.map((category: any) => {
                    const data = category.attributes || category;
                    const slug = data?.slug;
                    const name = data?.CategoryName;
                    const imageUrl = data?.Mainimage?.data?.attributes?.url || data?.Mainimage?.url || "";

                    return (
                        <Link
                            key={category.id}
                            href={slug ? `/category/${slug}` : "#"}
                            className="relative w-full max-w-[270px] group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 block"
                        >
                            <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
                                <img
                                    src={getImageUrl(imageUrl)}
                                    alt={name || "Categoría"}
                                    className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>

                            <p className="absolute bottom-5 w-full py-2 text-lg font-bold text-center text-white backdrop-blur-lg">
                                {name || "Categoría"}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ChooseCategory;