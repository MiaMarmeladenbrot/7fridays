import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import cors from "cors";


const startServer = async () => {
    const app: Application = express();
    app.use(cors());

    const server = new ApolloServer({ typeDefs, resolvers });
  
    await server.start();
  
    // geht das nicht schöner? 
    server.applyMiddleware({ app } as any);
  
    app.listen({ port: 4000 }, () =>
      console.log(`Server ready at http://localhost:4000/graphql`)
    );
  };
  
  startServer().catch((error) => {
    console.error('Server failed to start', error);
  });