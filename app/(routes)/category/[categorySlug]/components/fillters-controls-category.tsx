"use client";

import { useGetProductField } from "@/api/getProductField";

export default function FiltersControlsCategory({ filterGender, setFilterGender }: { 
    filterGender: string;
    setFilterGender: (value: string) => void;
}) {
    const { result, loading } = useGetProductField();

    return (
        <div className="w-full sm:w-64 p-4">
            <h3 className="font-bold mb-4">Género</h3>
            {loading ? (
                <p>Cargando...</p>
            ) : result.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {/* Opción para limpiar filtro */}
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="gender"
                            value=""
                            checked={filterGender === ""}
                            onChange={() => setFilterGender("")}
                        />
                        Todos
                    </label>

                    {result.map((gender: string, index: number) => (
                        <label key={index} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="gender"
                                value={gender}
                                checked={filterGender === gender}
                                onChange={() => setFilterGender(gender)}
                            />
                            {gender}
                        </label>
                    ))}
                </div>
            ) : (
                <p>No hay filtros</p>
            )}
        </div>
    );
}