# Using Skaffold for Continuous Flow

To run the service locally, make sure to install the latest version of [Skaffold](https://skaffold.dev). Also the [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) tool must be installed.

```bash
$ skaffold --help
$ skaffold init

$ skaffold dev --port-forward
$ skaffold dev --port-forward -p development
$ skaffold dev --port-forward --cleanup=false
```

Specify the `build` section to control how images are built and tagged.
``` yaml
build:
  tagPolicy:
    sha256: {}
  artifacts:
    - image: lreimer/productive-cloud-native-devex
  # jib: {}
  local:
    useDockerCLI: false
    useBuildkit: true
```

Specify the `deploy` section to determine how things are deployed. Possible are `kubectl`, `helm` and `kustomize`.
```yaml
deploy:
  kubectl:
    manifests:
      - src/main/kubernetes/microservice.yaml
      - src/main/kubernetes/database.yaml
```

Specify the `portForward` section to get access to the service and pods locally.
```yaml
portForward:
  - resourceType: service
    resourceName: productive-cloud-native-devex
    namespace: default
    port: 8080
    localPort: 8080
```

Specify the `profiles` section to customize the behaviour in different environments.
```yaml
profiles:
  - name: development
    activation:
      - kubeContext: docker-desktop
    deploy:
      kustomize:
        path: "src/main/kubernetes/kustomize/overlays/dev"
  - name: integration
    activation:
      - env: ENVIRONMENT=INT
    deploy:
      kustomize:
        path: "src/main/kubernetes/kustomize/overlays/int"
  - name: production
    activation:
      - env: ENVIRONMENT=PROD
    deploy:
      kustomize:
        path: "src/main/kubernetes/kustomize/overlays/prod"
```
