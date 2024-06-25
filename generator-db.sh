
rm -rf ./src/database
typeorm-model-generator -h 127.0.0.1 -d dev -u root -x root -e mysql -o ./src/database
# typeorm-model-generator -h localhost -d postgres -u postgres -x root -e postgres -o ./src/database