docker_build('lreimer/productive-cloud-native-devex', '.', only=['./build/libs'])

# k8s_yaml(['src/main/kubernetes/database.yaml', 'src/main/kubernetes/microservice.yaml'])
k8s_yaml(kustomize('src/main/kubernetes/kustomize/overlays/int'))

k8s_resource(workload='int-productive-cloud-native-devex-v1', port_forwards='18080:8080')

# Run Local and/or Occasional Workflows with Local Resource
# e.g. local_resource('yarn', cmd='yarn install', deps=['package.json'])
# always run a port-forward
local_resource('DB Port Forward', serve_cmd='kubectl port-forward -n default svc/int-database-v1 3306:3306')
