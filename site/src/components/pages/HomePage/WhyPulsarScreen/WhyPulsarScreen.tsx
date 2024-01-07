import React from 'react';
import s from './WhyPulsarScreen.module.css'

const WhyPulsarScreen: React.FC = () => {
  return (
    <section className={s.Screen}>
      <div className={s.Content}>
        <div className={s.Questions}>
          <div className={s.Question}>
            <h2>What is Apache Pulsar™?</h2>
            <p>
              <a href="">Pulsar</a> is a cloud-native, distributed messaging and streaming platform, developed by Apache Foundation.
            </p>
            <p>
              If you don't know what does it mean, see our <a href="">blog post</a> about the topic.
            </p>
            <p>
              Pulsar is used by Discord, Tencent, Yahoo, Cisco, Huawei, Verizon, Intuit, and many other companies across the world.
            </p>
            <p>
              In some aspects Pulsar is similar to Apache Kafka, but it implements more flexible messaging model, better horizontal scaling, and provides more features out of the box.
            </p>
            <h3>Pulsar Statistics</h3>
            <ul>
              <li>
                <strong>13.5k+</strong> stars on <a href="https://github.com/apache/pulsar">GitHub</a>
              </li>
              <li>
                <strong>600+</strong> open-source contributors.
              </li>
              <li>
                <strong>10k+</strong> members in the <a href="https://github.com/apache/pulsar">Slack Community</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyPulsarScreen;