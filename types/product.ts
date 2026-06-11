export type ProductType = {
    id: number;
    documentId: string;
    ProductName: string;
    slug: string;
    Description: string;
    Price: number;
    Color: string;
    Size: string;
    Gender: string;
    isFeatured: boolean;
    Active: boolean;
    Images: {
        id: number;
        url: string;
    }[];
    category: {
        id: number;
        CategoryName: string;
        slug: string;
    };
};