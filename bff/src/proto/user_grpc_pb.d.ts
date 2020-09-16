// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    all: IUserServiceService_IAll;
    get: IUserServiceService_IGet;
    create: IUserServiceService_ICreate;
    update: IUserServiceService_IUpdate;
}

interface IUserServiceService_IAll extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, user_pb.UserList> {
    path: string; // "/user.UserService/All"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.UserList>;
    responseDeserialize: grpc.deserialize<user_pb.UserList>;
}
interface IUserServiceService_IGet extends grpc.MethodDefinition<user_pb.GetRequest, user_pb.User> {
    path: string; // "/user.UserService/Get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetRequest>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_ICreate extends grpc.MethodDefinition<user_pb.CreateRequest, user_pb.User> {
    path: string; // "/user.UserService/Create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<user_pb.CreateRequest>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IUpdate extends grpc.MethodDefinition<user_pb.UpdateRequest, user_pb.User> {
    path: string; // "/user.UserService/Update"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UpdateRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdateRequest>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    all: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, user_pb.UserList>;
    get: grpc.handleUnaryCall<user_pb.GetRequest, user_pb.User>;
    create: grpc.handleUnaryCall<user_pb.CreateRequest, user_pb.User>;
    update: grpc.handleUnaryCall<user_pb.UpdateRequest, user_pb.User>;
}

export interface IUserServiceClient {
    all(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    all(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    all(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    create(request: user_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    create(request: user_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    create(request: user_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    update(request: user_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    update(request: user_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    update(request: user_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public all(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public all(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public all(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserList) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}
