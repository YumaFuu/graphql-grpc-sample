FROM golang:latest

ENV TZ Asia/Tokyo
RUN apt-get update && apt-get install -y \
  tzdata \
  && rm -rf /var/lib/apt/lists/* \
  && echo "${TZ}" > /etc/timezone \
  && rm /etc/localtime \
  && ln -s /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

ENV GOPATH /go

RUN apt-get update && \
    apt-get upgrade -y

RUN mkdir /go/src/linebot-smartarch
WORKDIR /go/src/linebot-smartarch
COPY . /go/src/linebot-smartarch

RUN go get -v ./...

CMD ["go", "run", "./cmd/api/main.go"]

EXPOSE 9000
