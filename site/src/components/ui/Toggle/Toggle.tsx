import React from 'react';
import s from "./Toggle.module.css"

const Toggle = ({ options, selectedOption, onSelect }) => {
  return (
    <div className={s.toggle}>
      {options.map((option) => (
        <div
          key={option.value}
          className={
            selectedOption === option.value ? `${s.option} ${s.optionActive}` : s.option
          }
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}

export default Toggle;