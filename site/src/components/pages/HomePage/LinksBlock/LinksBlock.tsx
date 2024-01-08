import React from 'react';
import Button from '../../../ui/Button/Button';
import s from './LinksBlock.module.css';

const LinksBlock: React.FC = () => {
  return (
    <div className={s.linksBlock}>
      <div className={s.linksButtonContainer}>
        <Button type="primary" text='Start Free' onClick={() => { }} />
        <Button type="regular" text="Ask Question" onClick={() => { }} />
        {/* TODO - replace ask question with "Book Demo" after we'll have a demo :) */}
      </div>
    </div>
  );
};

export default LinksBlock;
