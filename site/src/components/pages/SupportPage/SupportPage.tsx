import React from 'react';
import s from './SupportPage.module.css'
import Layout from '../../ui/Layout/Layout';

export type SupportPageProps = {};

const SupportPage: React.FC<SupportPageProps> = (props) => {
  return (
    <Layout>
      <div className={s.SupportPage}>
        <div className={s.Content}>
          <h1>Get Help and Support</h1>

          <div className={s.Links}>
            <a target="_blank" href="https://github.com/tealtools/dekaf/discussions">Visit Community Forum</a>
            <a target="_blank" href="https://tealtools.zendesk.com">Open Support Portal</a>
            <a target="_blank" href="mailto:support@tealtools.zendesk.com">Raise a Ticket via Email</a>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default SupportPage;