// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_CreateRequest(arg) {
  if (!(arg instanceof user_pb.CreateRequest)) {
    throw new Error('Expected argument of type user.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateRequest(buffer_arg) {
  return user_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetRequest(arg) {
  if (!(arg instanceof user_pb.GetRequest)) {
    throw new Error('Expected argument of type user.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetRequest(buffer_arg) {
  return user_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UpdateRequest(arg) {
  if (!(arg instanceof user_pb.UpdateRequest)) {
    throw new Error('Expected argument of type user.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UpdateRequest(buffer_arg) {
  return user_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserList(arg) {
  if (!(arg instanceof user_pb.UserList)) {
    throw new Error('Expected argument of type user.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserList(buffer_arg) {
  return user_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  all: {
    path: '/user.UserService/All',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: user_pb.UserList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_user_UserList,
    responseDeserialize: deserialize_user_UserList,
  },
  get: {
    path: '/user.UserService/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetRequest,
    responseType: user_pb.User,
    requestSerialize: serialize_user_GetRequest,
    requestDeserialize: deserialize_user_GetRequest,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  create: {
    path: '/user.UserService/Create',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateRequest,
    responseType: user_pb.User,
    requestSerialize: serialize_user_CreateRequest,
    requestDeserialize: deserialize_user_CreateRequest,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  update: {
    path: '/user.UserService/Update',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateRequest,
    responseType: user_pb.User,
    requestSerialize: serialize_user_UpdateRequest,
    requestDeserialize: deserialize_user_UpdateRequest,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
