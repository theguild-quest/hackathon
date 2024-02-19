'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import Typography from '@/components/atoms/Typography'
import { usePathname } from 'next/navigation'
import cx from 'classnames'
import classes from './Tabs.module.sass'
import { NavRoutes } from '../Navbar/Navbar'

type Props = {
  routes: NavRoutes
}

const Tabs: FC<Props> = ({ routes }) => {
  const pathname = usePathname()

  return (
    <nav className={classes.container}>
      {routes.map(({ title, to }) => (
        <Link
          href={to}
          key={title}
          className={cx(classes.link, { [classes.active]: pathname === to })}
        >
          <Typography variant="h3" inherited>
            {title}
          </Typography>
        </Link>
      ))}
    </nav>
  )
}

export default Tabs
