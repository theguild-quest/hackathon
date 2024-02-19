'use client'

import React, { FC, ReactNode } from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './NavLink.module.sass'
import Typography from '../Typography'
import { VariantsType } from '../Typography/Typography'

export type Props = {
  children: ReactNode
  href: string
  active?: boolean
  variant: VariantsType
}

const NavLink: FC<Props> = ({
  children, href, active = false, variant
}) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={cx(classes.link, {
        [classes.active]: pathname === href || active
      })}
    >
      <Typography variant={variant} inherited>
        {children}
      </Typography>
    </Link>
  )
}

export default NavLink
