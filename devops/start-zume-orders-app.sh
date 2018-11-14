#!/usr/bin/env bash

# Create zume-orders-app service
kubectl create -f zume-orders-app-service.yml

# Deploy zume-orders-app 
kubectl create -f zume-orders-app.yml

# Check pods
kubectl get pods 

# Or You can see list all pods in all namespaces
kubectl get pods --all-namespaces

# Check Service
kubectl get svc
