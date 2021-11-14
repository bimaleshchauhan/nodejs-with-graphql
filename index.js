const express = require('express');
var cors = require('cors')
const graphql = require('graphql');
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql
const {graphqlHTTP} = require('express-graphql');

const app = express();

const PORT = 9000;

const schema = require('./schemas/index')



app.use('/graphql', cors(), graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(PORT, ()=>{
    console.log("server running")
})