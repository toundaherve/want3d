#! /usr/bin/bash

cd /home/ubuntu/bonvih/website
npm install
npx next build
cp /home/ubuntu/bonvih/.env /home/ubuntu/bonvih/website