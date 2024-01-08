import React, { ReactElement } from 'react';
import s from "./Toggle.module.css"

export type ToggleOption<T> = {
  value: T,
  label: ReactElement
};

export type ToggleProps<T> = {
  value: T,
  options: ToggleOption<T>[],
  onChange: (v: T) => void
};

function Toggle<T extends string>(props: ToggleProps<T>): ReactElement {
  return (
    <div className={s.Toggle}>
      {props.options.map((option) => (
        <div
          key={option.value}
          className={`${s.Option} ${props.value === option.value ? s.OptionActive : ''}`}
          onClick={() => props.onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}

export default Toggle;