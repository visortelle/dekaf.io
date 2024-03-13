---
sidebar_position: 4
---

# Consume Messages

Dekaf allows you to consume and display Apache Pulsar topic data by using the notion of **Consumer Session**.

## Features

- Browse live stream data
- Consume multiple topics at once in the same consumer session
- Filter messages using user-friendly basic filters
- Filter messages using advanced JavaScript filters
- Search for specific value in loaded messages
- Map specific message field to the search results table column
- Colorize specific messages
- Consume compacted topics
- Start consuming at specific date-time, from specific message id, or from latest `n` messages
- Export loaded messages
- Save consumer sessions in library for further reuse
- Have quick access to consumer sessions saved on a topic, namespace, or tenant level

### Planned Features 🚧

> The points below are subject to change.<br />
> We present them on this page so that you understand in which direction we plan to develop Dekaf.

- Visualize message data with charts
- Custom deserializers
- Data masking
- Simple aggregations like calculating average, sum, percentile, etc.
- Long-running background consumer sessions for proactive monitoring and alerting

## Limitations

The amount of messages that can be processed during the consumer session is unlimited, but the amount of messages that are loaded and displayed in the user-faced UI at once has limits.

By default this limit equals to `10,000` messages. Depending on the average message size, you can configure this number for specific topic.

Operations that user can perform on the loaded data (e.g. sorting, export, or search in found) are limited to these messages.

We're looking for the best way to get rid of this limitation.
