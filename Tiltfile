k8s_yaml(['src/main/kubernetes/database.yaml', 'src/main/kubernetes/microservice.yaml'])

k8s_resource('productive-cloud-native-devex', port_forwards=8080)

docker_build('lreimer/productive-cloud-native-devex', '.', only=['./build/libs'])

# Run Local and/or Occasional Workflows with Local Resource
# e.g. local_resource('yarn', cmd='yarn install', deps=['package.json'])
# always run a port-forward
local_resource('Port Forward', serve_cmd='kubectl port-forward -n default svc/database 3306:3306')
