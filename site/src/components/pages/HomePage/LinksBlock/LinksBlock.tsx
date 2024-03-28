import React from 'react';
import Button from '../../../ui/Button/Button';
import s from './LinksBlock.module.css';

const LinksBlock: React.FC = () => {
  return (
    <div className={s.linksBlock}>
      <div className={s.linksButtonContainer}>
        <a href="/docs/quick-start">
          <Button type="primary" text='Start Free' onClick={() => { }} />
        </a>
        <a href="https://demo.deka.io" target="_blank" style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.25rem'}}>
          <Button type="regular" text="Live Demo" onClick={() => { }} />
        </a>
        {/* TODO - replace ask question with "Book Demo" after we'll have a demo :) */}
      </div>
    </div>
  );
};

export default LinksBlock;
