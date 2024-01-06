import React from 'react';
import s from './Logo.module.css'

export type LogoProps = {};

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div className={s.logo}>
      <img className={s.logoImage} src="/img/logo.png" />
      <div className={s.text}>
        <span className={s.textDekaf}>dekaf</span>
        <span className={s.textForPulsar}>for Apache Pulsar</span>
      </div>
    </div>
  );
}

export default Logo;