# This docker works with Helm (TILLER) in the Cluster

# cloudbuild.yaml region or zone
substitutions:
  _CUSTOM_REGION: us-central1-a

# kubernetes/templates/values.yaml production or development
environment: production

# list of deployments in kubernetes
kubectl -n kube-system get deployments

# describe my pod
kubectl describe pod my-app

# get services
kubectl get services

# get ingress
kubectl get ingress