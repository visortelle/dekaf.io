import React from 'react';
import s from './SupportPage.module.css'
import Layout from '../../ui/Layout/Layout';
import { billingPortalHref } from '../../links';

export type SupportPageProps = {};

const SupportPage: React.FC<SupportPageProps> = (props) => {
  return (
    <Layout>
      <div className={s.SupportPage}>
        <div className={s.Content}>
          <h1>Get Help and Support 🛟</h1>

          <ul className={s.Links}>
            <li>
              <a target="_blank" href="mailto:kiryl.valkovich@proton.me">🧑‍💻 Contact support</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/tealtools/dekaf/discussions">👥 Visit community forum</a>
            </li>
            <li>
              <a target="_blank" href={billingPortalHref}>🧾 Open billing portal</a>
            </li>
          </ul>

        </div>
      </div>
    </Layout>
  );
}

export default SupportPage;
