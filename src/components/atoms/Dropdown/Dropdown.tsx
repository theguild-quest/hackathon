'use client'

import React, { useState } from 'react'
import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import checkedIcon from '@/assets/checkboxChecked.svg'
import uncheckedIcon from '@/assets/checkboxUnchecked.svg'
import classes from './Dropdown.module.sass'

interface DropdownProps {
  options: string[];
  title:string
}

const Dropdown: React.FC<DropdownProps> = ({ options, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const toggleDropdown = () => {
    setIsOpen(true)
  }

  const handleOptionClick = (option: string) => {
    if (option === selectedOption) {
      setSelectedOption(null)
    } else {
      setSelectedOption(option)
    }
  }
  const handleApply = () => {
    setIsOpen(false)
  }

  return (
    <div className={`${classes.dropdown} ${isOpen ? classes.open : ''}`}>
      <button className={classes.dropdownToggle} onClick={toggleDropdown}>
        <Typography variant="bodyL" className={classes.title} weight="bold">{title}</Typography>
        <Typography variant="bodyL" className={classes.title} weight="bold">{selectedOption}</Typography>
      </button>
      {isOpen && (
        <ul className={classes.dropdownMenu}>
          {options.map((option) => (
            <li
              key={option}
              className={classes.dropdownOption}
              onClick={() => handleOptionClick(option)}
            >
              {selectedOption?.includes(option) ? <Image height={24} width={24} src={checkedIcon} alt="checkbox" />
                : <Image height={24} width={24} src={uncheckedIcon} alt="checkbox" />}
              <Typography variant="bodyL" className={classes.itemText}>{option}</Typography>
            </li>
          ))}
          <div className={classes.line} />
          <Typography onClick={handleApply} variant="bodyL" weight="medium" className={classes.apply}>Apply</Typography>
        </ul>
      )}
    </div>
  )
}

export default Dropdown
