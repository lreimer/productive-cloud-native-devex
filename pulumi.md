# Using Kustomize to replace YAML Bloat

First, you need to install Pulumi as described here: https://www.pulumi.com/docs/get-started/install/

Also, on Mac you can install it using Brew and other package managers for other OS.
```
$ brew install pulumi
$ pulumi plugin install resource kubernetes v2.4.2

$ mkdir -p src/main/pulumi && cd src/main/pulumi
$ pulumi new kubernetes-typescript -n productive-cloud-native-devex

$ pulumi up
$ pulumi destroy
```

