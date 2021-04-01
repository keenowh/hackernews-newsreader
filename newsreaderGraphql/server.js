import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typedefs";
import { resolvers } from './resolvers'
import datasources from './datasources'
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ...datasources
  }),
  introspection: true
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
