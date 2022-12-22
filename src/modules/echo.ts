import { createModule, gql } from "graphql-modules";

const directoryName = __dirname
export const echoModule = createModule({
    id: 'echo',
    dirname: directoryName,
    typeDefs: [
        gql`
            type Query {
                hello: String
            }
        `
    ],
    resolvers: {
        Query: {
            hello: () => 'world'
        }
    }
})