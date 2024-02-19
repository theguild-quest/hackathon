import cx from 'classnames'
import { ReactNode, FC } from 'react'
import Typography from '../Typography'
import classes from './GraphicButton.module.sass'
import { VariantsType } from '../Typography/Typography'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant: VariantsType
  className?: string
  size: 'big' | 'normal' | 'small'
  pressed?: boolean
  type?: 'submit' | 'reset' | 'button'
}

// ⚡ TBD!!!: Create flexible button for second button type

/**
 * ### Button.
 * Custom button component with built-in styling and functionality.
 *
 * #### Props
 *
 * - `variant` - pre defined typography variant from design system
 *
 * - `size` - pre defined size from design system
 *
 * - `className` - custom classes for additional injection of styling if needed
 *
 * @example
 * return (
 *   <Button variant="h1" className={classes.customStyling} size="big">
 *      The Guild
 *   </Button>
 * )
 */
const GraphicButton: FC<Props> = ({
  children,
  variant,
  size,
  pressed = false,
  className,
  type = 'button',
  ...buttonProps
}) => (
  <button
    type={type}
    {...buttonProps}
    className={cx(
      classes.button,
      classes[`button--size-${size}`],
      { [classes.pressed]: pressed },
      className
    )}
  >
    <Typography variant={variant} inherited={true}>
      {children}
    </Typography>
  </button>
)

export default GraphicButton
