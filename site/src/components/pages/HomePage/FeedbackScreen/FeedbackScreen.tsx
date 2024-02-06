import React from 'react';
import s from './FeedbackScreen.module.css'

export type FeedbackScreenProps = {};

const FeedbackScreen: React.FC<FeedbackScreenProps> = (props) => {
  return (
    <div className={s.FeedbackScreen}>
      <div className={s.Content}>
        <div style={{ fontSize: '1.5rem', maxWidth: '38rem', fontWeight: 'var(--font-weight-bold)', marginBottom: '1rem' }}>
          We're all ears! Share your feedback to help shape the future of Pulsar usability:
        </div>

        <ul>
          <li>
            <a href="#">Send your thoughts via email</a>
          </li>
          <li>
            <a href="#">Share your ideas publicly on the community forum</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeedbackScreen;