"use client";

import { useGetProductField } from "@/api/getProductField";

const FilterGender = () => {
    const { result, loading } = useGetProductField();

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Género</p>
            
            {loading && <p>Cargando filtros...</p>}
            
            {/* Validamos que result sea un arreglo antes de intentar cualquier cosa */}
            {!loading && Array.isArray(result) && result.length > 0 ? (
                <div className="flex flex-col gap-2">
                    {result.map((gender: any, index: number) => (
                        <label key={index} className="flex items-center gap-2">
                            <input type="radio" name="gender" value={gender} />
                            {gender}
                        </label>
                    ))}
                </div>
            ) : (
                !loading && <p>No hay géneros disponibles.</p>
            )}
        </div>
    );
};

export default FilterGender;