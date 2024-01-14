---
title: Apache Pulsar in Really Simple Words - Part 1
description: This post gives a basic understanding of Apache Pulsar for audience not familiar with data streaming
slug: apache-pulsar-in-really-simple-words
authors:
  - name: Kiryl Valkovich
    title: CEO at Teal Tools
    url: https://twitter.com/visortelle
    image_url: https://pbs.twimg.com/profile_images/1658929687790272513/jAMuGSL3_400x400.jpg
hide_table_of_contents: true
tags: [pulsar-for-newbies]
---

The [official Apache Pulsar website](http://pulsar.apache.org/) states: 

> **Apache Pulsar is an open-source, distributed messaging and streaming platform built for the cloud.**

If you don't understand 😐 what does it mean, its fine. This article is for you. 

<!--truncate-->

## What is Open-Source?

Open source software is software that is released under a license that grant everyone to study, change and distribute the software and it's source code.

Such software is often developed in collaborative manner, when multiple companies or individual contributors work publicly on some project.

The **🪶&nbsp;Apache** part in the project's name means that Pulsar is a one of the [Apache&nbsp;Software&nbsp;Foundation](https://www.apache.org/) (ASF) projects.

ASF is a nonprofit organization that curates and supports development of many open-source projects of different sizes.

:::info

Each project has its own governance, consisting of representatives of commercial companies interested in the development of this particular project and a voting system for making decisions.
If you don’t start yawning 🥱 from reading legal documents, you can read more about the ASF structure and licensing rules on the ASF website.

:::

## What is Distributed System?

It means that multiple instances of the same program, or different programs, run on multiple computers within the network, communicate with each other, and act collectively as a whole.

There are several typical cases when it may be needed. Let's look at them.

### Distribution of work among several workers

Imagine amount of users data that Meta, Google, and other Big Tech companies store on their servers. 

The Meta's Facebook, Instagram and WhatsApp generate at least 4 petabytes 😱 of data every single day. Any existing computer of any size can't store and quickly process all these photos, videos and chat messages.

No problem. Let's split this huge amount of work across thousand computers!

The process of distributing the load across multiple workers is called **load balancing**. 

Similar to distributing a line of grocery store visitors across multiple cashiers. The grocery store administrator asks you to go to the cashier without visitors fulfills the role of **load balancer**.

### Reliability

A reliable system must continue to operating properly in the event of failure or major dysfunction in one or more of its components.

Handling the situation when one of the workers is tired or sick

Looks simple, isn't it? 

Why we may want to distribute a work across multiple computers.

It may be done by different goals:

**Examples:**
- Blockchain network
- Massively Multiplayer Online game (MMO)
- Neighborhood LAN chat from 2000s
- The Internet


### What is Data Streaming Platform?

Data streaming systems delivers data.

### What is Cloud-Native?

This type of infrastructure software is used by most medium to large-sized companies nowadays. 

Pulsar is used by <strong>Discord</strong>, <strong>Tencent</strong>, <strong>Yahoo</strong>, <strong>Cisco</strong>, <strong>Huawei</strong>, <strong>Verizon</strong>, <strong>Intuit</strong>, and many other companies across the world.

In some aspects Pulsar is similar to Apache Kafka, but it implements more flexible messaging model, better horizontal scaling, and provides more features out of the box.

If you found something unfamiliar, read our [Data Streaming for Newbies](./coming-soon.md) post first.

### Quick Facts About Pulsar

- **13.5k+** stars on [GitHub](https://github.com/apache/pulsar)
- **10k+** members in the [Slack Community](https://communityinviter.com/apps/apache-pulsar/apache-pulsar)

## Timeline

Pulsar was originally developed in Yahoo, and open-sourced in.

Pulsar has **600+** open-source contributors.

## Supported Platforms

- **Operation systems:** Linux and MacOS. Windows may be used only as a client.
- **CPU architectures:** x86 and Arm64
- [Docker images](https://hub.docker.com/r/apachepulsar/pulsar-all)

## Deployment Options

-  [Official Helm Chart](https://github.com/apache/pulsar-helm-chart).

It's is written in Java, and has best support for JVM languages like Java, Scala, Clojure, Groovy, and others.

Official clients include such platforms as C++, Go, Python, Node.js and .NET.