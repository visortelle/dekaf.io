import React from 'react';
import s from './WhyDekafScreen.module.css'

const WhyScreen: React.FC = () => {
  return (
    <section className={s.Screen}>
      <div className={s.Content}>
        <div>
          <h2>Why Dekaf?</h2>
          <div className={s.Questions}>
            <div className={s.Question}>
              <h3>Optimizes developer productivity</h3>
              <p>
                Produce positive business impact instead of losing time and mental load in the command line interface.
              </p>
            </div>

            <div className={s.Question}>
              <h3>Empowers QAs with the ultimate tool</h3>
              <p>
                Dekaf makes it's trivial to send a bunch of messages to any topic and see how your system reacts on it.
              </p>
            </div>

            <div className={s.Question}>
              <h3>Simplifies learning Pulsar</h3>
              <p>
                The ability to easily navigate Pulsar resources and experiment with its features in a point-and-click manner is a great addition to taking a course or reading the extensive documentation.
              </p>
            </div>

            <div className={s.Question}>
              <h3>Makes support team much happier</h3>
              <p>
                With Dekaf, it's easy to find and visualize data across multiple topics. Inspect how a sequence of events lead to an some problematic business event.
              </p>
            </div>

            <div className={s.Question}>
              <h3>Saves in disaster situations</h3>
              <p>
                Having a tool that assists in fixing the problem when something goes wrong is invaluable for any profitable business.
              </p>
            </div>

            <div className={s.Question}>
              <h3>Reduces onboarding time</h3>
              <p>
                For new team members who are already familiar with Pulsar, it may be much easier to grasp how your system works by having the ability to easily experiment with it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyScreen;