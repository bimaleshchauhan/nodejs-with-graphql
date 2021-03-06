
const graphql = require('graphql');
const {GraphQLObjectType, GraphQLInt, GraphQLString} = graphql;

const UserType = new GraphQLObjectType({
    name:"Users",
    fields:() =>({
        id:{type:GraphQLInt}, 
        name:{type:GraphQLString},
        username:{type:GraphQLString},
        email:{type:GraphQLString}
    })
})

module.exports=UserType