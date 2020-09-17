import {ApolloServer, gql} from 'apollo-server';
import {resolve} from 'dns';
import * as grpc from 'grpc';

import * as user_grpc_pb from './proto/user_grpc_pb';
import * as user_pb from './proto/user_pb';

const client = new user_grpc_pb.UserServiceClient(
    'localhost:9000',
    grpc.credentials.createInsecure(),
);


// スキーマを定義する
const typeDefs = gql`
  type User {
    id: Int
    name: String
    age: Int
    sex: Int
  }

  type Query {
    allUsers: [User!]!
    user(id: ID!): User!
  }
`;

class User {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

function allUsers() {
  client.all({}, function(err, result) {
    if (err) console.log(err);
    return result;
  });
}

function getUser(id: number): User {
  return new Promise<User>((resolve, reject) => {
           const req = new user_pb.GetRequest();
           req.setId(id);

           client.get(req, (err, _) => {
             if (err) {
               return reject(err);
             }

             var user = new User(2)
             return resolve(user);
           });
         })
      .then((value) => {
        return value;
      });
}


// resolvers
const resolvers = {
  Query: {
    allUsers: () => allUsers(),
    user: ({}, {id}: {id: number}, {}) => getUser(id),
  }
};

// run server
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
