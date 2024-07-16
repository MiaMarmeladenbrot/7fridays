import productsData from "./data/products.json"

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}

const products: Product[] = productsData;

const resolvers = {
    Query: {
        // get all products
        products: () => products,

        // get one product via id
        product: (_: any, {id}: {id: string}) => products.find(singleProduct => singleProduct.id === id)

        // get cart items
        // add to cart
        // remove from cart
    }
}

export default resolvers;
