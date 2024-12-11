#!/bin/bash
export PATH=$PATH:/usr/local/bin

cd /home/ec2-user/
Docker-compose pull
Docker-compose down
Docker-compose up -d