#!/bin/bash
echo "Waiting for MongoDB to start..."
sleep 5 # Give MongoDB some time to initialize

mongoimport --host localhost --db showbank --collection Clientes --file /data/Clientes.json --jsonArray

mongoimport --host localhost --db=showbank --collection=Contas --type=csv --headerline --file=/data/Contas.csv 

mongoimport --host localhost --db=showbank --collection=Endereco --type=csv --headerline --file=/data/Endereco.csv 
