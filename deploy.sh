SHA=$(git rev-parse HEAD)

docker build -t sssuthe/shark-ops-client:latest -t sssuthe/shark-ops-client:$SHA -f ./client/Dockerfile ./client
docker build -t sssuthe/shark-ops-server:latest -t sssuthe/shark-ops-server:$SHA -f ./server/Dockerfile ./server

docker push sssuthe/shark-ops-client:latest
docker push sssuthe/shark-ops-server:latest

docker push sssuthe/shark-ops-client:$SHA
docker push sssuthe/shark-ops-server:$SHA

kubectl apply -f k8s

kubectl set image deployments/client-deployment client=sssuthe/shark-ops-client:$SHA
kubectl set image deployments/server-deployment server=sssuthe/shark-ops-server:$SHA