# Using Buildpacks as Kickstart

https://buildpacks.io/docs/

```bash
$ brew tap buildpack/tap
$ brew install pack

$ pack suggest-builders
$ pack inspect-builder cloudfoundry/cnb:tiny
$ pack suggest-stacks
```

To get a more complete view, have a look at the CNB sample repository.

```bash
$ mkdir cloud-native-buildpacks
$ cd cloud-native-buildpacks

$ git clone https://github.com/buildpacks/samples.git
$ cd samples/apps

$ pack build -p kotlin-gradle --builder cnbs/sample-builder:alpine kotlin-gradle-app
$ docker run --rm -it -e PORT=8080 -p 8080:8080 kotlin-gradle-app

$ pack build -p java-maven --builder cnbs/sample-builder:alpine java-maven-app
$ docker run --rm -it -e PORT=8080 -p 8080:8080 java-maven-app
```

Now we build our own small Go base microservice using CN Buildpacks.

```bash
$ mkdir golang-simple
$ cd golang-simple

$ touch main.go
$ mod init github.com/lreimer/productive-cloud-native-devex/golang-simple 

$ pack suggest-builders
$ pack build --builder cloudfoundry/cnb:tiny golang-simple-app
$ docker run --rm -it -e PORT=8080 -p 8080:8080 golang-simple-app
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
	fmt.Fprintf(w, "Ways Towards a  Productive Cloud-native DevEx with CNB")
}
```
