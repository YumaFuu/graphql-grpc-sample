package main

import (
	"context"
	"log"
	"net"

	user "grpc-graphql-sample/api/proto"

	"github.com/golang/protobuf/ptypes/empty"
	"google.golang.org/grpc"
)

func main() {
	listener, err := net.Listen("tcp", ":9000")
	if err != nil {
		log.Fatalf("failed to listen: %v\n", err)
		return
	}

	grpcSrv := grpc.NewServer()
	user.RegisterUserServiceServer(grpcSrv, &server{})
	log.Printf("service is running on 9000 port")
	grpcSrv.Serve(listener)
}

type server struct{}

func (s server) All(c context.Context, r *empty.Empty) (*user.UserList, error) {
	return &user.UserList{}, nil
}

func (s server) Get(c context.Context, r *user.GetRequest) (*user.User, error) {
	u := user.User{
		Id:   1,
		Name: "yuma",
		Age:  22,
		Sex:  user.Sex_MALE,
	}
	return &u, nil
}

func (s server) Create(c context.Context, r *user.CreateRequest) (*user.User, error) {
	return &user.User{}, nil
}

func (s server) Update(c context.Context, r *user.UpdateRequest) (*user.User, error) {
	return &user.User{}, nil
}
