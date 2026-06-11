import { useEffect, useState } from "react";


export function useGetProductBySlug(slug: string | string[]) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                const json = await res.json();             
                setResult(json.data);
                setLoading(false);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [url]);

    return { loading, result, error };
}