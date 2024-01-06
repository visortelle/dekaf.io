import React from 'react';
import Links from '../LinksBlock/LinksBlock';
import s from './HeadingsSection.module.css';
import Logo from '@site/src/components/ui/Logo/Logo';

const HeadingsSection: React.FC = () => {
  return (
    <section className={s.HeadingsSection}>
      <div className={s.HeadingsContainer}>
        <div className={s.logo}>
          <Logo />
        </div>
      </div>

      <div className={s.Content}>
        <h1 className={s.Header}>
          Essential tool for Apache Pulsar users
        </h1>

        <p>
          Our interface makes it easy for anybody to work with Apache Pulsar.
          <br />
          Standard Pulsar operations at your fingertips with only a few clicks.
        </p>

        <div className={s.Links}>
          <Links />
        </div>
      </div>

    </section>
  );
};

export default HeadingsSection;
