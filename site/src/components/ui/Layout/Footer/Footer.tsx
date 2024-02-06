import React from 'react';
import s from './Footer.module.css'
import SocialIcons from '../../SocialIcons/SocialIcons';

export type FooterProps = {};

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className={s.Footer}>
      <div className={s.Content}>
        <div className={s.Columns}>
          <div className={s.Column}>
            <strong>Product</strong>
            <a className={s.Link} href="/docs">Documentation</a>
            <a className={s.Link} href="/pricing">Pricing</a>
            <a className={s.Link} href="/blog">Blog</a>
            <a className={s.Link} href="/support">Support</a>
          </div>

          <div className={s.Column}>
            <strong>Company</strong>
            <a className={s.Link} href="https://teal.tools">About Us</a>
            <a className={s.Link} href="https://teal.tools/careers">Open positions</a>
          </div>

          <div className={s.Column}>
            <SocialIcons fill='#fff' />
          </div>
        </div>

        <div>© 2024 Teal Tools, Inc. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;