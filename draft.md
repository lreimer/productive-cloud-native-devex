# Using Draft to Kickstart

Streamlined Kubernetes Development using Draft: https://draft.sh

```bash
$ mkdir kickstart-go-service
$ cd kickstart-go-service

$ touch main.go
$ go mod init github.com/lreimer/productive-cloud-native-devex/kickstart-go-service

$ draft init
$ draft create

$ draft up
$ draft connect 
```

```go
package main

import (
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
	fmt.Fprintf(w, "Ways Towards a Productive Cloud-native DevEx with Draft")
}
```
