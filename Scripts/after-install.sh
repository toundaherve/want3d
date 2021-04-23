#! /usr/bin/bash

cd /home/ubuntu/bonvih/website
npm install
sudo npx next build
cp /home/ubuntu/bonvih/.env /home/ubuntu/bonvih/website