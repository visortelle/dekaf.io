import React from 'react';
import s from './Beta.module.css'

export type BetaProps = {
  size?: 'regular' | 'small',
  text?: string
};

const Beta: React.FC<BetaProps> = (props) => {
  return (
    <div className={`${s.Beta} ${props.size === 'small' ? s.Small : ''}`}>
      {props.text || 'beta'}
    </div>
  );
}

export default Beta;