import { gql } from "apollo-server-express";

const typeDefs = gql`
type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
}

type Query {
    products: [Product]
    product(id: ID!): Product
}
`;

export default typeDefs;
