import React from 'react';
import s from './FeedbackScreen.module.css'

export type FeedbackScreenProps = {};

const FeedbackScreen: React.FC<FeedbackScreenProps> = (props) => {
  return (
    <div className={s.FeedbackScreen}>
      <div className={s.Content}>
        <div style={{ fontSize: '2.5rem', maxWidth: '50rem', fontWeight: 'var(--font-weight-bold)', marginBottom: '1rem' }}>
          We're all ears!
          <div style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-normal)' }}>
            Share your feedback to help shape the future of Pulsar&nbsp;user&nbsp;experience:
          </div>
        </div>

        <div style={{ fontSize: '1.5rem' }}>
          <a href="#">Send your thoughts via email</a>
          <br />
          <a href="#">Join the community forum</a>
        </div>
      </div>
    </div>
  );
}

export default FeedbackScreen;