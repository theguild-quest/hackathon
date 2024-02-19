import React, { FC, InputHTMLAttributes, ReactNode } from 'react'
import Typography from '@/components/atoms/Typography'
import { VariantsType } from '@/components/atoms/Typography/Typography'
import cx from 'classnames'
import classes from './Input.module.sass'

type Props = InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  placeholder?: string
  error?: boolean
  labelText?: string
  variantLabelText?: VariantsType
  currChars?: string
  iconLeft?: ReactNode
  maxChars?: string
  className?: string
  errorMessage?: string
  isTextarea?: boolean
  disabled?: boolean
}

const Input: FC<Props> = ({
  iconLeft,
  isTextarea = false,
  currChars,
  errorMessage,
  className,
  maxChars,
  placeholder,
  variantLabelText,
  labelText,
  error,
  ...rest
}) => (
  <div className={classes.container}>
    {labelText && (
      <Typography variant={variantLabelText} className={classes.labelText}>
        {labelText}
      </Typography>
    )}

    {iconLeft && (
      <div
        style={{ marginTop: labelText ? '16px' : '' }}
        className={classes.iconLeft}
      >
        {iconLeft}
      </div>
    )}
    {isTextarea ? (
      <textarea
        className={cx(
          classes.textarea,
          `${error ? classes.errorInput : ''}`,
          className
        )}
        {...rest}
        placeholder={placeholder || ''}
      />
    ) : (
      <input
        {...rest}
        className={cx(
          classes.input,
          `${error ? classes.errorInput : ''}`,
          className
        )}
        placeholder={placeholder || ''}
      />
    )}
    <div className={classes.error}>
      {error ? (
        <Typography color="primary" variant="bodyM">
          {errorMessage}
        </Typography>
      ) : currChars ? (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography color="pastel" variant="bodyM">
            {currChars}
          </Typography>
          <Typography variant="bodyM">{maxChars}</Typography>
        </div>
      ) : (
        <></>
      )}
    </div>
  </div>
)

export default Input
