# Using Kustomize to reduce YAML Bloat

First, you need to install Kustomize as described here: https://github.com/kubernetes-sigs/kustomize/blob/master/docs/INSTALL.md

Also, on Mac you can install it using Brew and other package managers for other OS.
```
$ brew install kustomize

$ kustomize build src/main/kubernetes/kustomize/overlays/int | bat -l yaml -
$ kustomize build src/main/kubernetes/kustomize/overlays/int | kubectl apply -f -

$ kubectl apply -k src/main/kubernetes/kustomize/overlays/int
```

The idea is to overlay different YAML snippets to produce the final K8s YAML output. 
