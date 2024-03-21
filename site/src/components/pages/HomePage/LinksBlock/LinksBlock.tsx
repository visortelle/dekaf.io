import React from 'react';
import Button from '../../../ui/Button/Button';
import s from './LinksBlock.module.css';

const LinksBlock: React.FC = () => {
  return (
    <div className={s.linksBlock}>
      <div className={s.linksButtonContainer}>
        <a href="https://github.com/tealtools/dekaf">
          <Button type="primary" text='Start Free' onClick={() => { }} />
        </a>
        <a href="https://github.com/tealtools/dekaf/discussions">
          <Button type="regular" text="Ask Question" onClick={() => { }} />
        </a>
        {/* TODO - replace ask question with "Book Demo" after we'll have a demo :) */}
      </div>
    </div>
  );
};

export default LinksBlock;
