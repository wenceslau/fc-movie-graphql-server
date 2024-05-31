import {ApolloServer} from "apollo-server";
import {readFileSync} from "fs";
import resolvers from "./resolvers.js";

const typeDefs = readFileSync('./schema.graphql', 'utf8');
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});