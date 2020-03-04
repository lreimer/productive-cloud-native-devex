FROM qaware/distroless-zulu-payara-micro:8u242-5.201
COPY build/libs/productive-cloud-native-devex.war $DEPLOY_DIR
