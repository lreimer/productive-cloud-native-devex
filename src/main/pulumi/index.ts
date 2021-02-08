import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";

const appLabels = { app: "productive-cloud-native-devex" };

const deployment = new k8s.apps.v1.Deployment("productive-cloud-native-devex", {
    metadata: {
        labels: appLabels,
    },
    spec: {
        selector: { matchLabels: appLabels },
        replicas: 2,
        template: {
            metadata: { labels: appLabels },
            spec: { 
                containers: [{ 
                    name: "microservice", 
                    image: "lreimer/productive-cloud-native-devex",
                    ports: [{
                        containerPort: 8080
                    }]
                }] 
            }
        }
    }
});

const service = new k8s.core.v1.Service("productive-cloud-native-devex", {
    metadata: {
        labels: appLabels,
    },
    spec: {
        type: 'ClusterIP',
        ports: [{
            name: 'http',
            port: 8080,
            protocol: 'TCP',
            targetPort: 8080
        }],
        selector: appLabels,
    }
});

export const deploymentName = deployment.metadata.name;
export const serviceName = service.metadata.name;
