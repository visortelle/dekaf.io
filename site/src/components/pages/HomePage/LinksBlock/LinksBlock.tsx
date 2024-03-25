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
        <a href="mailto:contact@teal.tools" style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.25rem'}}>
          <Button type="regular" text="Contact Us" onClick={() => { }} />
          <div style={{ fontSize: '0.85rem', color: '#fff'}}>
            And tell about your use case.
            <br />
            We're all ears!
          </div>
        </a>
        {/* TODO - replace ask question with "Book Demo" after we'll have a demo :) */}
      </div>
    </div>
  );
};

export default LinksBlock;
