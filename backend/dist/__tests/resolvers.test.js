"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = __importDefault(require("../resolvers"));
const products_json_1 = __importDefault(require("../data/products.json"));
describe("resolvers", () => {
    describe("queries", () => {
        // get all products
        it("should return all products", () => {
            const result = resolvers_1.default.Query.products();
            expect(result).toHaveLength(products_json_1.default.length);
        });
        // get one product by id
        it("should return one product by id", () => {
            const result = resolvers_1.default.Query.product(null, { id: "12345" });
            expect(result).toEqual(products_json_1.default.find((singleP) => singleP.id === "12345"));
        });
        // get cart with all current items
        it("should return the cart", () => {
            const result = resolvers_1.default.Query.cart();
            expect(result.items).toBeInstanceOf(Array);
            expect(result.total).toBeGreaterThanOrEqual(0);
        });
    });
    describe("mutations", () => {
        // add item to the cart
        it("should add an item to the cart", () => {
            const result = resolvers_1.default.Mutation.addToCart(null, { productId: "12345" });
            expect(result.items).toContainEqual({
                product: products_json_1.default.find((singleP) => singleP.id === "12345"),
                quantity: 1,
            });
            expect(result.total).toBeGreaterThan(0);
        });
        // remove item from the cart
        it("should remove an item from the cart", () => {
            const result = resolvers_1.default.Mutation.removeFromCart(null, {
                productId: "12345",
            });
            expect(result.items).not.toContainEqual({
                product: products_json_1.default.find((singleP) => singleP.id === "12345"),
                quantity: 1,
            });
        });
        // clearing whole cart
        it("should clear all items from the cart", () => {
            const result = resolvers_1.default.Mutation.clearCart();
            expect(result.items).toHaveLength(0);
            expect(result.total).toBe(0);
        });
    });
});
