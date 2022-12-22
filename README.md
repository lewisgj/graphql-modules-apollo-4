# GraphQL Modules and Apollo Server 4 Example

This is to demonstrate the incompatibility (and a workaround) for using Apollo Server 4 and graphql-modules together.
[Reported to graphql-modules here](https://github.com/Urigo/graphql-modules/issues/2270#issuecomment-1362832121)


```shell
npm install
npm start
```
results in...

```
.../graphql-modules-apollo-4/node_modules/@apollo/server/dist/cjs/utils/schemaManager.js:68
            throw new Error('You must call start() before getSchemaDerivedData()');
                  ^

Error: You must call start() before getSchemaDerivedData()
    at SchemaManager.getSchemaDerivedData (/Users/lewis.greenway-joneszoopla.co.uk/projects/personal/graphql-modules-apollo-4/node_modules/@apollo/server/dist/cjs/utils/schemaManager.js:68:19)
    at ApolloServer._start (/Users/lewis.greenway-joneszoopla.co.uk/projects/personal/graphql-modules-apollo-4/node_modules/@apollo/server/dist/cjs/ApolloServer.js:170:53)
    at async ApolloServer.start (/Users/lewis.greenway-joneszoopla.co.uk/projects/personal/graphql-modules-apollo-4/node_modules/@apollo/server/dist/cjs/ApolloServer.js:141:16)
    at async startStandaloneServer (/Users/lewis.greenway-joneszoopla.co.uk/projects/personal/graphql-modules-apollo-4/node_modules/@apollo/server/dist/cjs/standalone/index.js:18:5)
    at async /Users/lewis.greenway-joneszoopla.co.uk/projects/personal/graphql-modules-apollo-4/dist/server.js:28:21

Node.js v18.12.1
```