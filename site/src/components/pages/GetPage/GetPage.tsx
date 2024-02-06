import React, { ReactElement } from 'react';
import s from './GetPage.module.css'
import Layout from '@site/src/components/ui/Layout/Layout';
import Heading from '../../ui/Heading/Heading';
import Link from '@docusaurus/Link';
import macosIcon from '!!raw-loader!./icons/macos.svg';
import linuxIcon from '!!raw-loader!./icons/linux.svg';
import windowsIcon from '!!raw-loader!./icons/windows.svg';
import SvgIcon from '../../ui/SvgIcon/SvgIcon';

export type GetPageProps = {};

type Distribution = {
  title: ReactElement,
  logoSvg: string,
  downloadUrl: string
};

const desktopDistributions: Distribution[] = [
  {
    title: <span><strong>MacOS</strong><br />Intel</span>,
    downloadUrl: '#',
    logoSvg: macosIcon as unknown as string
  },
  {
    title: <span><strong>MacOS</strong><br />Apple Silicon</span>,
    downloadUrl: '#',
    logoSvg: macosIcon as unknown as string
  },
  {
    title: <span><strong>Linux</strong></span>,
    downloadUrl: '#',
    logoSvg: linuxIcon as unknown as string
  },
  {
    title: <span><strong>Windows</strong></span>,
    downloadUrl: '#',
    logoSvg: windowsIcon as unknown as string
  }
];

const GetPage: React.FC<GetPageProps> = (props) => {
  return (
    <div className={s.GetPage}>
      <section className={s.Content}>
        <Heading level={1}>Get Dekaf ☕️</Heading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p>
            You can compare product editions and obtain the license at the <Link to="/pricing">pricing page</Link>.
          </p>

          <div>
            <Heading level={2}>Dekaf</Heading>
            <p>
              <a href="#">Follow the installation instructions</a>
            </p>
          </div>

          <div>
            <Heading level={2}>Dekaf Desktop</Heading>
            <p>
              Download the distribution for your operating system by clicking the icon below.
            </p>

            <p>
              <a href="#">Open documentation</a>
            </p>

            <div className={s.Distributions}>
              {desktopDistributions.map((dist, i) => {
                return (
                  <div key={i}>
                    <a className={s.Distribution} target="_blank" href={dist.downloadUrl}>
                      <SvgIcon svg={dist.logoSvg} />
                      <div>{dist.title}</div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default () => <Layout><GetPage /></Layout>;