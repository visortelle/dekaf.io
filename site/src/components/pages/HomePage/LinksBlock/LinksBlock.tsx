import React from 'react';
import Button from '../../../ui/Button/Button';
import s from './LinksBlock.module.css';
import playIcon from '!!raw-loader!./play.svg';

const LinksBlock: React.FC = () => {
  return (
    <div className={s.linksBlock}>
      <div className={s.linksButtonContainer}>
        <Button type="regular" text="Watch Demo" svgIcon={playIcon} onClick={() => { }} />
        <Button type="primary" text='Start Free' onClick={() => { }} />
      </div>
    </div>
  );
};

export default LinksBlock;
