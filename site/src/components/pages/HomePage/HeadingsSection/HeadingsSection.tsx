import React from 'react';
import Links from '../LinksBlock/LinksBlock';
import s from './HeadingsSection.module.css';
import Logo from '@site/src/components/ui/Logo/Logo';

const HeadingsSection: React.FC = () => {
  return (
    <section className={s.HeadingsSection}>
      <div className={s.HeadingsContainer}>
        <div className={s.Logo}>
          <Logo />
        </div>
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

    </section>
  );
};

export default HeadingsSection;
