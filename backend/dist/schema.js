"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
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
exports.default = typeDefs;
