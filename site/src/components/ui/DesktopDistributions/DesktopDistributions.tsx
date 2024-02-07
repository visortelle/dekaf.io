import React, { ReactElement } from 'react';
import s from './DesktopDistributions.module.css';
import macosIcon from '!!raw-loader!./icons/macos.svg';
import linuxIcon from '!!raw-loader!./icons/linux.svg';
import windowsIcon from '!!raw-loader!./icons/windows.svg';
import SvgIcon from '../SvgIcon/SvgIcon';

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

const DesktopDistributions: React.FC = () => {
  return (
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
  );
}

export default DesktopDistributions;