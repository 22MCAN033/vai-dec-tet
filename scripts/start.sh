#!/bin/bash
export PATH=$PATH:/usr/local/bin

cd /home/ubuntu/
docker-compose pull
docker-compose down
docker-compose up -d