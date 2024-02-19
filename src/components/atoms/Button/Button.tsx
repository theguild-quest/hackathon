'use client'

import cx from 'classnames'
import { ReactNode, FC } from 'react'
import Typography from '../Typography'
import classes from './Button.module.sass'
import { TypographyProps, VariantsType } from '../Typography/Typography'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import ConditionalWrapper from '@/utils/ConditionalWrapper'

type ButtonVariant = 'default' | 'secondary' | 'outline'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  variant?: VariantsType
  iconButton?: boolean
  startIcon?: StaticImport
  notification?: boolean
  href?: string
  btnColor?: 'primary' | 'secondary' | 'dark' | 'pastel' | 'light'
  btnVariant?: ButtonVariant
  onClick?: () => void
  className?: string
  disabled?: boolean
  typographyProps?: TypographyProps
}

// ⚡ TBD!!!: Create flexible button for second button type

/**
 * ### TabButton.
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
 *   <TabButton variant="h1" className={classes.customStyling} size="big">
 *      The MyRefferalLinkCard
 *   </TabButton>
 * )
 */
const Button: FC<Props> = ({
                             children,
                             variant,
                             iconButton = false,
                             startIcon,
                             notification = false,
                             href,
                             btnColor,
                             btnVariant = 'default',
                             onClick,
                             className,
                             disabled,
                             typographyProps
                           }) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        classes.button,
        { [classes.iconButton]: iconButton },
        { [classes.notification]: notification },
        classes[`button--${btnVariant}`],
        btnColor && `color-${btnColor}`,
        className
      )}
      disabled={disabled}
      style={{ borderColor: btnColor && `var(--${btnColor}-color)` }}
    >
      <ConditionalWrapper
        condition={href !== undefined}
        wrapper={(children) => href && <Link href={href}>{children}</Link>}
      >
        {startIcon && (
          <Image
            src={startIcon}
            alt="icon"
            quality={100}
            className={classes.startIcon}
          />
        )}
        {!iconButton && (
          <Typography
            variant={variant}
            className={classes.text}
            {...typographyProps}
          >
            {children}
          </Typography>
        )}
      </ConditionalWrapper>
    </button>
  )
}

export default Button
