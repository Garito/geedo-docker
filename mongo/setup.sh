source ./docker/mongo/mongo.env

./docker/mongo/init-replica.sh
sleep 10
./docker/mongo/replica-config.sh
sleep 10
./docker/mongo/users-setup.sh