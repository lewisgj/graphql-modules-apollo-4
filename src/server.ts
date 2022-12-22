import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";

import { createApplication } from "graphql-modules";
import { echoModule } from "./modules/echo";

const application = createApplication({
    modules: [echoModule]
});


const server = new ApolloServer({
    // schema: application.createSchemaForApollo() // graphql-modules has marked this deprecated, but works with Apollo Server 4.
    // Recommended approach is to use gateway:
    gateway: {
        async load() {
            return { executor: application.createApolloExecutor() };
        },
        onSchemaLoadOrUpdate() {
            return () => {};
        },
        async stop() {},
    },
});

(async () => {
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
    const {url} = await startStandaloneServer(server, {
        listen: {port: 4000}
    });

    console.log(`🚀  Server ready at: ${url}`);
})()