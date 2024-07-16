"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_json_1 = __importDefault(require("./data/products.json"));
const products = products_json_1.default;
const resolvers = {
    Query: {
        products: () => products,
        product: (_, { id }) => products.find(singleProduct => singleProduct.id === id)
    }
};
exports.default = resolvers;
