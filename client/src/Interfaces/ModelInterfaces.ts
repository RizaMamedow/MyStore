export interface ICategory {
    id: number;
    name: string;
}

export interface IProduct {
    id: number;
    thumbnail: string;
    title: string;
    description: string
    price: number;
    category_id: number;
    created: string;
}

export interface IProductDetails {
    id: number;
    thumbnail: string;
    title: string;
    description: string
    price: number;
    category_id: number;
    created: string;
    category: ICategory;
}

export interface IProductImage {
    id: number;
    image: string;
    short_desc: string;
    product_id: number;
}