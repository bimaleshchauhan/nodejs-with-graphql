const data = require('../json/data.json');
const graphql = require('graphql');
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql


const UserType = require('./typedef/usertype');
const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        getUsers:{
          type:new GraphQLList(UserType),
          args:{id:{type:GraphQLInt}},
          resolve(parent, arg){
              return data
          }
        }
    }

})

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createUser:{
            type:UserType,
            args:{
                name:{type:GraphQLString},
                username:{type:GraphQLString},
                email:{type:GraphQLString},
            },
            resolve(parent, arg){
                data.push({id:data.length+1, name:arg.name, username:arg.username, email:arg.email})
                return arg
            }

        }
    }
})

module.exports = new GraphQLSchema({query:RootQuery,mutation:Mutation})