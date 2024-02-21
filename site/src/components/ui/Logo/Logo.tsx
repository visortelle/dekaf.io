import React from 'react';
import s from './Logo.module.css'
import Beta from '../Beta/Beta';

export type LogoProps = {};

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div className={s.Logo}>
      <img className={s.LogoImage} src="/img/logo.png" />
      <div className={s.Text}>
        <div className={s.Beta}>
          <a target="_blank" href='https://teal.tools'><Beta text='by Teal Tools'/></a>
        </div>
        <span className={s.TextDekaf}>dekaf</span>
        {/* <span className={s.TextForPulsar}>for Apache Pulsar</span> */}
      </div>
    </div>
  );
}

export default Logo;
