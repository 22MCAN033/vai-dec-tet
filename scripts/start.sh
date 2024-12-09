#!/bin/bash

cd /home/ubuntu/
docker-compose pull
docker-compose down
docker-compose up -d