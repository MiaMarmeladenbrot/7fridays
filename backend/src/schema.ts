import { gql } from "apollo-server-express";

const typeDefs = gql`
type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
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

export default typeDefs;
