import React from 'react';
import Links from '../LinksBlock/LinksBlock';
import s from './GreetingScreen.module.css';
import Logo from '@site/src/components/ui/Logo/Logo';
import dekafDemoPreviewImage from '@site/static/img/homepage/dekaf-greeting.png';

const HeadingsSection: React.FC = () => {
  return (
    <section className={s.Screen}>
      <div className={s.Content}>
        <div className={s.Logo}>
          <Logo />
        </div>

        <div className={s.Content}>
          <h1 className={s.Header}>
            UI for Apache Pulsar™
          </h1>

          <p>
            Manage your data streams with less stress
          </p>

          <div className={s.Links}>
            <Links />
          </div>
        </div>
        <div className={s.DemoPreview}>
          <div>
            <img className={s.DemoPreviewImage} src={dekafDemoPreviewImage} alt="Dekaf Screenshot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingsSection;
