---
sidebar_position: 2
---

# Docker Image

Dekaf runs as a single [Docker container](https://docs.docker.com/guides/walkthroughs/what-is-a-container/) with no dependencies. 

:::info

The upcoming features like monitoring, horizontal scaling, and enterprise-grade authorization require introducing more moving pieces to make them scalable. These features will be opt-in to keep the base deployment as simple as possible.

:::

Run `docker pull tealtools/dekaf:latest` to get the latest Dekaf image.

Visit the [OCI repository](https://hub.docker.com/repository/docker/tealtools/pulsocat-demoapp) to get the available image tag list.

**Image details:**

- Supported architectures are `linux/amd64` and `linux/arm64`.

- The application listens `8090` port.

- Dekaf uses [GraalVM Community image](https://www.graalvm.org/latest/docs/getting-started/container-images/) as the base image.

- Dekaf distribution is available at the `/dekaf` path.

- The container is configured to run as `dekaf` Linux user. 

## Running Dekaf

If you have an Apache Pulsar instance, you can run Dekaf by using this command:

```bash
DEKAF_PULSAR_BROKER_URL="pulsar://127.0.0.1:6650" \
DEKAF_PULSAR_WEB_URL="http://127.0.0.1:8080" \
docker run -it -p 8090:8090 tealtools/dekaf:latest
```

This command will run **Dekaf Free** edition connected to your Apache Pulsar instance.

## Configuration

You can configure Dekaf by mounting the YAML configuration file to the `/dekaf/config.yaml` path.

Configuring application using environment variable is also supported.

See the [Configuration Reference](./configuration-reference) page for more details.

## Data Directory

Dekaf allows users to create reusable objects like pre-configured filters and consumer sessions. These objects are stored in the directory specified by the `dataDir` configuration property.

That means that in production setup you should persist this directory data to make it available after the Dekaf container restart.