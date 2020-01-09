source ./docker/mongo/mongo.env

./docker/mongo/init-replica-dev.sh
sleep 10
./docker/mongo/users-setup.sh