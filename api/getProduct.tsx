export async function getProduct(slug: string) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[slug][$eq]=${slug}`;

    try {
        const res = await fetch(url, { cache: "no-store" });
        const json = await res.json();
        console.log("GETPRODUCT URL:", url);
        console.log("GETPRODUCT DATA:", json.data);
        return json.data?.[0] ?? null;
    } catch (error) {
        console.error(error);
        return null;
    }
}