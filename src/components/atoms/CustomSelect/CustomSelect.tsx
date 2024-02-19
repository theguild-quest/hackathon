'use client'

import React, { FC, useState } from 'react'

import Select, { MultiValue } from 'react-select'
import Typography from '@/components/atoms/Typography'
import { VariantsType } from '@/components/atoms/Typography/Typography'
import classes from './CustomSelect.module.sass'

export interface Option {
  value: string
  label: string
  color?: string
  isFixed?: boolean
  isDisabled?: boolean
}

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    background: 'rgba(12, 12, 12, 0.50)',
    height: '65px',
    borderRadius: '8px',
    border: state.isFocused ? '1px solid #e2e2e2' : '1px solid #393939',
    outline: state.isFocused ? '0px solid #e2e2e2' : '0px solid #393939',
    boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.51) inset',
    '&:hover': {
      border: state.isFocused ? '1px solid #e2e2e2' : '1px solid #393939',
      outline: state.isFocused ? '0px solid #e2e2e2' : '0px solid #393939'
    }
  }),

  multiValue: (styles: any) => ({
    ...styles,
    backgroundColor: '#202128',
    borderRadius: '15px',
    border: '0.5px solid #575758',
    padding: '1px 4px',
    marginRight: '6px'
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: '#E2E2E2',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '160%',
    letterSpacing: 0
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: '#575758',
    ':hover': {
      backgroundColor: 'none'
    }
  }),

  placeholder: (provided: any) => ({
    ...provided,
    color: '#393939',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 300,
    paddingLeft: '10px',
    lineHeight: '160%',
    letterSpacing: 0
  }),
  input: (provided: any) => ({
    ...provided,
    paddingLeft: '12px',
    color: '#e2e2e2'
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '160%',
    letterSpacing: '0.56px',
    color: '#E2E2E2',
    paddingLeft: '14px'
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: '8px',
    background: '#0C0C0C',
    border: '1px solid  #E2E2E2',
    padding: '0px 22px',
    boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.51) inset'
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: 0,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '160%',
    letterSpacing: '1.4px',
    background: state.isSelected ? 'none' : '#0C0C0C',
    paddingTop: '8px',
    paddingBottom: '8px',
    color: '#E2E2E2',
    borderBottom: '1px solid  rgba(57, 57, 57, 0.50)',
    ':hover': {
      background: state.isSelected ? 'none' : 'none'
    }
  })
}

type Props = {
  options: Option[]
  placeholder?: string
  labelText1?: string
  labelText2?: string
  variantLabelText1?: VariantsType
  variantLabelText2?: VariantsType
  isMulti?: boolean
  selectedOptions: Option[] | null
  onSelectChange: (selectedOptions: Option[]) => void
}

const CustomSelect: FC<Props> = ({
  placeholder,
  variantLabelText1 = 'h3',
  variantLabelText2 = 'bodyL',
  labelText1,
  labelText2,
  options,
  isMulti = false,
  selectedOptions,
  onSelectChange
}) => {
  // const handleSelectChange = (newValue: MultiValue<Option>) => {
  //   if (isMulti && newValue.length <= 6) {
  //     setSelectedOptions(newValue as Option[])
  //   } else {
  //     setSelectedOptions(newValue as Option[])
  //   }
  //   onSelectChange(newValue as Option[])
  // }

  const handleSelectChange = (newValue: MultiValue<Option>) => {
    const newSelectedOptions = newValue as Option[]
    onSelectChange(newSelectedOptions)
  }

  return (
    <div className={classes.container}>
      {labelText1 && (
        <Typography variant={variantLabelText1}>{labelText1}</Typography>
      )}
      {labelText2 && (
        <Typography weight="light" color="grey" variant={variantLabelText2}>
          {labelText2}
        </Typography>
      )}
      <Select
        styles={customStyles}
        openMenuOnClick={true}
        isMulti={isMulti}
        value={selectedOptions}
        onChange={handleSelectChange as any}
        name="colors"
        placeholder={placeholder}
        options={options}
        components={{
          IndicatorSeparator: () => null,
          ClearIndicator: () => null,
          DropdownIndicator: () => null
        }}
      />
    </div>
  )
}
export default CustomSelect
