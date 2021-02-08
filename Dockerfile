FROM qaware/distroless-zulu-payara-micro:11.0.10-5.2020.7
COPY build/libs/productive-cloud-native-devex.war $DEPLOY_DIR
