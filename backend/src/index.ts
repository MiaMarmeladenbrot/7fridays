import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import cors from "cors";

// set up and start express server with apollo
const startServer = async () => {
  // create express application
  const app: Application = express();

  app.use(cors());

  // create new apollo server with graphql types and resolvers
  const server = new ApolloServer({ typeDefs, resolvers });

  // start apollo server
  await server.start();

  // integrate apollo server in express app
  server.applyMiddleware({ app } as any);
  // server.applyMiddleware({ app } as { app: Application });

  // start express server on port 4000
  // when started, GraphQL endpoint is available on that port
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000/graphql`)
  );
};

// error handling for starting server
startServer().catch((error) => {
    console.error('Server failed to start', error);
  });