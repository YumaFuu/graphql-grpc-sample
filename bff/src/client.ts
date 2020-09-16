import * as grpc from 'grpc';
import * as user_grpc_pb from './proto/user_grpc_pb';
import * as user_pb from './proto/user_pb';

const client = new user_grpc_pb.UserServiceClient(
    'localhost:9000',
    grpc.credentials.createInsecure(),
);

const req = new user_pb.GetRequest();
req.setId(1);

client.get(req, function(error, result) {
  if (error)
    console.log('Error: ', error)
    else console.log(result.toObject());
});

