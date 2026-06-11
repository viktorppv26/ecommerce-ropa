"use client";

import { useState } from "react";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { useParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import FiltersControlsCategory from "./components/fillters-controls-category";
import ProductCard from "./components/product-card";

export default function Page() {
    const params = useParams();
    const categorySlug = params.categorySlug as string;
    const [filterGender, setFilterGender] = useState("");

    const { result, loading } = useGetCategoryProduct(categorySlug, filterGender);
    console.log("PRODUCTOS:", result); // 👈 línea temporal para ver la estructura

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h1 className="text-3xl font-medium mb-8 uppercase">
                {categorySlug}
            </h1>
            <Separator />

            <div className="sm:flex sm:justify-between mt-5">
                <FiltersControlsCategory
                    filterGender={filterGender}
                    setFilterGender={setFilterGender}
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {loading ? (
                        <p>Cargando productos...</p>
                    ) : Array.isArray(result) && result.length > 0 ? (
                        result.map((product: any) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p>No hay productos disponibles.</p>
                    )}
                </div>
            </div>
        </div>
    );
}