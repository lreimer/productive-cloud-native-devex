# Ways Towards a  Productive Cloud-native DevEx

## Using Draft as Kickstart

```bash
$ mkdir kickstart-go-service
$ cd kickstart-go-service

$ touch main.go
$ go mod init github.com/lreimer/productive-cloud-native-devex/kickstart-go-service
```

```go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", indexHandler)

	http.ListenAndServe(port(), nil)
}

func port() string {
	port := os.Getenv("PORT")
	if len(port) == 0 {
		port = "8080"
	}
	return ":" + port
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}

	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Ways Towards a  Productive Cloud-native DevEx with Draft")
}
```

```bash
$ draft init
$ draft create
$ draft up
```

## Using Buildpacks as Kickstart

## Using Skaffold for Continuous Flow

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
