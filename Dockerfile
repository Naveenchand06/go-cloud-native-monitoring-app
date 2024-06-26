FROM golang:1.22-alpine

WORKDIR /app

COPY go.mod .

RUN go mod tidy

COPY . .

RUN go build -o app .

ENV POD_NAME=LOCAL

EXPOSE 8080

CMD [ "./app" ]