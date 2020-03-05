# YAML less Developer Flow with Tilt

First, you need to install Tilt as described here: https://docs.tilt.dev/install.html

Create a `Tiltfile` in the project root and add the following content
```
docker_build('lreimer/productive-cloud-native-devex', '.', only=['./build/libs'])

# k8s_yaml(['src/main/kubernetes/database.yaml', 'src/main/kubernetes/microservice.yaml'])
k8s_yaml(kustomize('src/main/kubernetes/kustomize/dev'))

k8s_resource('productive-cloud-native-devex', port_forwards=8080)

# Run Local and/or Occasional Workflows with Local Resource
# e.g. local_resource('yarn', cmd='yarn install', deps=['package.json'])
# always run a port-forward
local_resource('Port Forward', serve_cmd='kubectl port-forward -n default svc/database 3306:3306')
```

The run `tilt up` in the console and get into the flow.
