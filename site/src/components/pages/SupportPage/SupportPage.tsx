import React from 'react';
import s from './SupportPage.module.css'

export type SupportPageProps = {};

const SupportPage: React.FC<SupportPageProps> = (props) => {
  return (
    <div className={s.SupportPage}>
      <a href="https://github.com/tealtools/dekaf/discussions">Community Support (GitHub)</a>
      <a href="https://github.com/tealtools/dekaf/issues">Report a bug (GitHub)</a>
      <a href="">Raise a ticket</a>
    </div>
  );
}

export default SupportPage;