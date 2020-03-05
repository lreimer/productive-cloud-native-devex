# Using Skaffold for Continuous Flow

To run the service locally, make sure to install the latest version of [Skaffold](https://skaffold.dev).

```bash
$ skaffold --help
$ skaffold init

$ skaffold dev --port-forward
$ skaffold dev --port-forward -p development
$ skaffold dev --port-forward --cleanup=false
```
