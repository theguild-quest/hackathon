import cx from 'classnames'
import { ReactNode, FC } from 'react'
import Typography from '../Typography'
import classes from './ProfileButton.module.sass'
import { ColorType, VariantsType, WeightType } from '../Typography/Typography'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant: VariantsType
  variantButton?: 'primary' | 'darker' | 'secondary'
  className?: string
  size?: 'big' | 'normal' | 'small'
  pressed?: boolean
  weight?: WeightType
  type?: 'submit' | 'reset' | 'button'
  color?: ColorType
  classNameTypography?: string
}

const ProfileButton: FC<Props> = ({
  children,
  variant,
  variantButton = 'primary',
  size = 'normal',
  pressed = false,
  className,
  classNameTypography,
  weight = 'normal',
  color,
  type = 'button',
  ...buttonProps
}) => (
  <button
    type={type}
    {...buttonProps}
    className={cx(
      classes.button,
      classes[`button--${variantButton}`],
      classes[`button--size-${size}`],
      { [classes.pressed]: pressed },
      { [classes[`pressed--${variantButton}`]]: pressed },
      className
    )}
  >
    <Typography
      className={classNameTypography}
      color={color}
      weight={weight}
      variant={variant}
      inherited
    >
      {children}
    </Typography>
  </button>
)
export default ProfileButton
