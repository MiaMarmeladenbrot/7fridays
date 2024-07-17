"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const cors_1 = __importDefault(require("cors"));
// set up and start express server with apollo
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    // create express application
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    // create new apollo server with graphql types and resolvers
    const server = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.default, resolvers: resolvers_1.default });
    // start apollo server
    yield server.start();
    // integrate apollo server in express app
    server.applyMiddleware({ app });
    // server.applyMiddleware({ app } as { app: Application });
    // start express server on port 4000
    // when started, GraphQL endpoint is available on that port
    app.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000/graphql`));
});
// error handling for starting server
startServer().catch((error) => {
    console.error('Server failed to start', error);
});
