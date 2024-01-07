import React from 'react';
import Links from '../LinksBlock/LinksBlock';
import s from './GreetingScreen.module.css';
import Logo from '@site/src/components/ui/Logo/Logo';

const HeadingsSection: React.FC = () => {
  return (
    <section className={s.GreetingScreen}>
      <div className={s.Content}>
        <div className={s.Logo}>
          <Logo />
        </div>

        <div className={s.Content}>
          <h1 className={s.Header}>
            UI for Apache Pulsar
          </h1>

          <p>
            Our interface makes it easy for anybody to work with Pulsar.
            <br />
            Advanced messaging and streaming platform at your fingertips.
          </p>

          <div className={s.Links}>
            <Links />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingsSection;
