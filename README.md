# Ways Towards a  Productive Cloud-native DevEx

## Using Skaffold

To run the service locally, make sure to install the latest version of [Skaffold](https://skaffold.dev).

```bash
$ ./gradlew clean ass

$ skaffold dev --port-forward
$ skaffold dev --port-forward -p development
$ skaffold dev --port-forward --cleanup=false
```

## Maintainer

M.-Leander Reimer (@lreimer), <mario-leander.reimer@qaware.de>

## License

This software is provided under the MIT open source license, read the `LICENSE`
file for details.
