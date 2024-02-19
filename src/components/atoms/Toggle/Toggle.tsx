import React, { FC, InputHTMLAttributes, useState } from 'react'
import classes from './Toggle.module.sass'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  onChange: (checked: boolean) => void
  checked: boolean
}

const Toggle: FC<Props> = ({ onChange, checked, ...rest }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    onChange(isChecked)
  }

  return (
    <label className={classes.toggleSwitch}>
      <input
        {...rest}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className={classes.slider}></span>
    </label>
  )
}

export default Toggle
