import resolvers from "../resolvers";
import productsData from "../data/products.json"

describe("resolvers", () => {
    describe("query", () => {
        it("should return all products"), () => {
            const result = resolvers.Query.products();
            expect(result).toHaveLength(productsData.length)
        }
    })
})