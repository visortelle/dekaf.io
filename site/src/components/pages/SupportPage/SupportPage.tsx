import React from 'react';
import s from './SupportPage.module.css'
import Layout from '../../ui/Layout/Layout';

export type SupportPageProps = {};

const SupportPage: React.FC<SupportPageProps> = (props) => {
  return (
    <Layout>
      <div className={s.SupportPage}>
        <div className={s.Content}>
          <h1>Get Help and Support 🛟</h1>

          <ul className={s.Links}>
            <li>
              <a target="_blank" href="mailto:support@tealtools.zendesk.com">Ask a question</a>
            </li>
            <li>
              <a target="_blank" href="mailto:support@tealtools.zendesk.com">Submit a ticket</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/tealtools/dekaf/discussions">Visit community forum</a>
            </li>
          </ul>

        </div>
      </div>
    </Layout>
  );
}

export default SupportPage;