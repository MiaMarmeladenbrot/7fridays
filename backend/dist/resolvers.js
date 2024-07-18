"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_json_1 = __importDefault(require("./data/products.json"));
// save productsData (array) to products-variable
const products = products_json_1.default;
// empty array for saving items to cart
let cartItems = [];
// function to calculate total price of all current items in cart
const calculateTotal = (items) => {
    return items.reduce((acc, curr) => {
        const product = products.find((singleProduct) => singleProduct.id === curr.productId);
        return acc + (product ? product.price * curr.quantity : 0);
    }, 0);
};
// function to find product details and quantity for all current items in cart
const mapCartItems = (items) => {
    return items.map((singleItem) => ({
        product: products.find((singleProduct) => singleProduct.id === singleItem.productId),
        quantity: singleItem.quantity
    }));
};
const resolvers = {
    Query: {
        // get all products
        products: () => products,
        // get one product via id
        product: (_, { id }) => products.find(singleProduct => singleProduct.id === id),
        // get all items from cart with total price
        cart: () => ({
            items: mapCartItems(cartItems),
            total: calculateTotal(cartItems),
        })
    },
    Mutation: {
        // add one item to cart via id
        addToCart: (_, { productId }) => {
            const existingCartItem = cartItems.find((singleItem) => singleItem.productId === productId);
            if (existingCartItem) {
                existingCartItem.quantity++;
            }
            else {
                cartItems.push({ productId, quantity: 1 });
            }
            return {
                items: mapCartItems(cartItems),
                total: calculateTotal(cartItems),
            };
        },
        // remove one item from cart via id
        removeFromCart: (_, { productId }) => {
            const indexOfItem = cartItems.findIndex((singleItem) => singleItem.productId === productId);
            if (indexOfItem !== -1) {
                // if more than 1 exist, delete one from quantity
                if (cartItems[indexOfItem].quantity > 1) {
                    cartItems[indexOfItem].quantity--;
                    // if only one exists, delete the whole item from cart
                }
                else {
                    cartItems.splice(indexOfItem, 1);
                }
            }
            return {
                items: mapCartItems(cartItems),
                total: calculateTotal(cartItems),
            };
        },
        // remove all items from cart
        clearCart: () => {
            cartItems = [];
            return {
                items: [],
                total: 0,
            };
        }
    }
};
exports.default = resolvers;
