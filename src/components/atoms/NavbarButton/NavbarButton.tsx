'use client'

import cx from 'classnames'
import { ReactNode, FC } from 'react'
import Typography from '../Typography'
import classes from './NavbarButton.module.sass'
import { VariantsType } from '../Typography/Typography'
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
  textColor?: 'primary' | 'secondary' | 'dark' | 'pastel' | 'light'
  btnColor?: 'primary' | 'secondary' | 'dark' | 'pastel' | 'light'
  btnVariant?: ButtonVariant
  onClick?: () => void
  className?: string
  disabled?: boolean
  menu?: boolean
}

const NavbarButton: FC<Props> = ({
  children,
  variant,
  iconButton = false,
  startIcon,
  notification = false,
  href,
  textColor,
  btnColor,
  btnVariant = 'default',
  onClick,
  className,
  disabled,
  menu = false
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        classes.navbarButton,
        { [classes.iconButton]: iconButton },
        { [classes.notification]: !menu && notification },
        classes[`navbarButton--${btnVariant}`],
        btnColor && `color-${btnColor}`,
        menu && classes.menuButton, // Add menuButton class if menu prop is true
        className
      )}
      disabled={disabled}
      style={{
        borderColor: btnColor && `var(--${btnColor}-color)`,
        borderRadius: menu ? 'none' : undefined, // Remove border-radius if menu prop is true
        boxShadow: menu ? 'none' : undefined // Remove box-shadow if menu prop is true
      }}
    >
      <ConditionalWrapper
        condition={href !== undefined}
        wrapper={(children) =>
          href && (
            <Link
              className={cx(
                classes.navbarButton,
                { [classes.iconButton]: iconButton },
                { [classes.notification]: !menu && notification },
                classes[`navbarButton--${btnVariant}`],
                btnColor && `color-${btnColor}`,
                menu && classes.menuButton, // Add menuButton class if menu prop is true
                className
              )}
              style={{
                borderColor: btnColor && `var(--${btnColor}-color)`,
                borderRadius: menu ? 'none' : undefined, // Remove border-radius if menu prop is true
                boxShadow: menu ? 'none' : undefined // Remove box-shadow if menu prop is true
              }}
              href={href}
            >
              {children}
            </Link>
          )
        }
      >
        {startIcon && (
          <div
            style={{
              position: 'relative'
            }}
          >
            <Image
              src={startIcon}
              alt="icon"
              quality={100}
              width={menu ? 30 : 25}
            />
            {menu && notification && (
              <div className={classes.menuNotification} />
            )}
          </div>
        )}
        {!iconButton && (
          <Typography variant={variant} color={textColor} className={className}>
            {children}
          </Typography>
        )}
      </ConditionalWrapper>
    </button>
  )
}
export default NavbarButton
