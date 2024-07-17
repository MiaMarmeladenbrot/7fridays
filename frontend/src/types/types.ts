export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
   cart: { 
    items: CartItem[];
    total: number;
    };
}