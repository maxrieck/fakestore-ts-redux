

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity?: number;
};

export interface CartState {
    cartItems: Product[]
}

export interface User {
    id?: string;
    name: string;
    age: number;
}