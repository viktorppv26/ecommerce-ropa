export type CategoryType = {
    id: number;
    attributes: {
        CategoryName: string;
        slug: string;
        Mainimage: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
    };
};