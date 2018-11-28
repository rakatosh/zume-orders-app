#!/usr/bin/env bash

# Build docker image and push on Google Registry
docker build . -t zume-orders-app
docker images | grep zume-orders-app
gcloud config list | grep project
docker tag zume-orders-app gcr.io/zume-ci/zume-orders-app-k8s-demo:8.0
gcloud docker -- push gcr.io/zume-ci/zume-orders-app-k8s-demo
