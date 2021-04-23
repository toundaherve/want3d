#! /usr/bin/bash

sudo systemctl stop bonvih-website.service
cd /home/ubuntu/bonvih
sudo rm -rf website
mkdir website