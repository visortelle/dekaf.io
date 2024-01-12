import React from 'react';
import SvgIcon from '../SvgIcon/SvgIcon';
import s from './Button.module.css';

export type ButtonProps = {
  onClick?: () => void,
  text?: string
  svgIcon?: string,
  title?: string,
  type: 'primary' | 'regular' | 'danger',
  testId?: string,
  size?: 'regular' | 'small',
  disabled?: boolean,
  active?: boolean,
  href?: string,
  target?: string,
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>,
}
const Button: React.FC<ButtonProps> = (props) => {
  let typeClassName = '';
  switch (props.type) {
    case 'regular': typeClassName = s.Regular; break;
    case 'primary': typeClassName = s.Primary; break;
    case 'danger': typeClassName = s.Danger; break;
  }

  const className = `
    ${s.Button}
    ${props.disabled ? s.DisabledButton : ''}
    ${props.active ? s.ActiveButton : ''}
    ${props.text ? '' : s.ButtonWithoutText}
    ${props.svgIcon ? s.ButtonWithIcon : ''}
    ${props.size === 'small' ? s.SmallSize : ''}
    ${typeClassName}
  `;

  const children = (
    <>
      {props.svgIcon && <SvgIcon svg={props.svgIcon} />}
      {props.text}
    </>
  );

  if (props.href !== undefined) {
    return (
      <a
        className={className}
        href={props.href}
        target={props.target}
        onClick={props.onClick}
        title={props.title}
        data-testid={props.testId}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
      title={props.title}
      data-testid={props.testId}
      {...props.buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;