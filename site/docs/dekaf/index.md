---
sidebar_position: 3
---

# Dekaf

## Get the Docker Image

Run `docker pull tealtools/dekaf:latest` to download the latest image.

**Repository:** https://hub.docker.com/repository/docker/tealtools/pulsocat-demoapp

## Configuration

By default, Dekaf reads the `config.yaml` file in the current working directory.

You can use `DEKAF_` environment variable prefix, following by the configuration field name in the screaming snake case:

```sh
DEKAF_LICENSE_ID="33a8cc38-5062-4f30-91d6-31b0797ebfg0"
DEKAF_LICENSE_TOKEN="prod-f6339ce7067c062724ca5e2bb2d36690b3637aed1c5f93e"
```

The `config.yaml` have priority over environment variables.

### Basic configuration

|Field                           |Example                       |Description                                                                                                                                                                                                                                                                                                                                                               |
|---                                |---                          |---                                                                                                                                                                                                                                                                                                                                                                       |
|port                               |`8090`                         | The port the server listens on.
|dataDir                            |`/data`                         | Path to the persistent data directory.

### Licensing

|Field                           |Example                       |Description                                                                                                                                                                                                                                                                                                                                                               |
|---                                |---                          |---                                                                                                                                                                                                                                                                                                                                                                       |
|licenseId                          |`33a8cc38-5062-4f30-91d6-31b0797ebfg0`                    | License ID.                                                                                                                                                                                                                                                                                                    |
|licenseToken                       |`prod-f6339ce7067c062724ca5e2bb2d36690b3637aed1c5f93e`                    | License token.                                                                                                                                                                                                                                                                                                 |

### Running Dekaf behind reverse-proxy

|Field                           |Example                      |Description                                                                                                                                                                                                                                                                                                                                                               |
|---                                |---                          |---                                                                                                                                                                                                                                                                                                                                                                       |
|basePath                           | `/dekaf`                    |When running the application behind a reverse-proxy, it may be useful to specify a base path.                                                                                                                                                                                                               |
|publicBaseUrl                      | `https://dev.my.org/dekaf`  |When running the application behind a reverse-proxy, you need to provide a public URL to let the application know how to render links and making redirects correctly.                                                                                                                 |

### Pulsar Instance

|Field                           |Example                       |Description                                                                                                                                                                                                                                                                                                                                                               |
|---                                |---                          |---                                                                                                                                                                                                                                                                                                                                                                       |
|pulsarName                          |`default`                    | Pulsar instance name.                                                                                                                                                                                                                                                                                                    |
|pulsarColor                          |`#ff0000`                    | Optional accent color to visually distinguish this instance.                                                                                                                                                                                                                                                                                                    |
|pulsarWebUrl                          |`http://localhost:8080`                    | Pulsar web service URL.                                                                                                                                                                                                                                                                                                    |
|pulsarBrokerUrl                          |`pulsar://localhost:6650`                    | Pulsar service URL.                                                                                                                                                                                                                                                                                                    |
|pulsarListenerName                     |`external`                                     | [Advertised listener](https://pulsar.apache.org/docs/next/concepts-multiple-advertised-listeners/) name. |
|defaultPulsarAuth||Default authentication credentials for all users. Not recommended to use it in multi-user production environment.|

### Dekaf &lt;-&gt; Pulsar Instance TLS

|Field                           |Description                                                                                                                                                                                                                                                                                                                                                               |
|---                                |---                                                                                                                                                                                                                                                                                                                                                                       |
|pulsarTlsKeyFilePath               |Path to the TLS key file.                                                                                                                                                                                                                                                                                      |
|pulsarTlsCertificateFilePath       |Path to the TLS certificate file.                                                                                                                                                                                                                                                                              |
|pulsarTlsTrustCertsFilePath        |Path to the trusted TLS certificate file.                                                                                                                                                                                                                                                                      |
|pulsarAllowTlsInsecureConnection   |Configure whether the Pulsar client accept untrusted TLS certificate from broker                                                                                                                                                                                                                              |
|pulsarEnableTlsHostnameVerification |It allows to validate hostname verification when client connects to broker over tls. It validates incoming x509 certificate and matches provided hostname(CN/SAN) with expected broker's host name. It follows RFC 2818, 3.1. Server Identity hostname verification. See https://tools.ietf.org/html/rfc2818|
|pulsarUseKeyStoreTls |If Tls is enabled, whether use KeyStore type as tls configuration parameter.False means use default pem type configuration.|
|pulsarSslProvider |The name of the security provider used for SSL connections. Default value is the default security provider of the JVM.|
|pulsarTlsKeyStoreType|The file format of the key store file.|
|pulsarTlsKeyStorePath|The location of the key store file.|
|pulsarTlsKeyStorePassword|The store password for the key store file.|
|pulsarTlsTrustStoreType|The file format of the trust store file.|
|pulsarTlsTrustStorePath|The location of the trust store file.|
|pulsarTlsTrustStorePassword|The store password for the trust store file.|
|pulsarTlsCiphers|A list of cipher suites. This is a named combination of authentication, encryption, MAC and key exchange algorithm used to negotiate the security settings for a network connection using TLS or SSL network protocol. By default all the available cipher suites are supported.|
|pulsarTlsProtocols|The SSL protocol used to generate the SSLContext. Default setting is TLS, which is fine for most cases. Allowed values in recent JVMs are TLS, TLSv1.3, TLSv1.2 and TLSv1.1.|
