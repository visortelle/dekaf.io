import React from 'react';
import s from './WhyDekafScreen.module.css'
import Heading from '@site/src/components/ui/Heading/Heading';

const WhyScreen: React.FC = () => {
  return (
    <section className={s.Screen}>
      <div className={s.Content}>
        <div>
          <Heading level={2}>Why Dekaf?</Heading>
          <div className={s.Questions}>
            <div className={s.Question}>
              <h3>Optimizes developer productivity</h3>
              <p>
                Enable rapid application development and a fast feedback loop for your developers.
              </p>
            </div>

            <div className={s.Question}>
              <h3>Empowers QAs with the ultimate tool</h3>
              <p>
                Dekaf makes it's trivial to send a bunch of messages to any topic and see how your system reacts on it.
              </p>
            </div>

            <div className={s.Question}>
              <h3>Makes support team much happier</h3>
              <p>
                With Dekaf, it's easy to find data across multiple topics. Inspect how a sequence of events lead to an some problematic business event.
              </p>
            </div>

            <div className={s.Question}>
              <h3>Reduces troubleshooting time</h3>
              <p>
                Having a tool that assists in fixing the problem when something goes wrong is invaluable for any profitable business.
              </p>
            </div>

            <div className={s.Question}>
              <h3>Lowers the entry barrier on Pulsar</h3>
              <p>
                No need to be a Pulsar expert to do many useful actions. Dekaf helps Product Owners, Data Scientists, and Business Analysts to explore data in Pulsar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyScreen;
