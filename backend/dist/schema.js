"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    image: String!
}

type CartItem {
    product: Product!
    quantity: Int!
}

type Cart {
    items: [CartItem!]!
    total: Float!
}

type Query {
    products: [Product]
    product(id: ID!): Product
    cart: Cart!
}

type Mutation {
    addToCart(productId: ID!): Cart!
    removeFromCart(productId: ID!): Cart!
    clearCart: Cart!
  }
`;
exports.default = typeDefs;
