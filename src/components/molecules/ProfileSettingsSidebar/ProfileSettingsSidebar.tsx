'use client'

import React from 'react'
import Typography from '@/components/atoms/Typography'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import chevronRightIcon from '@/assets/chevron-right.svg'
import arrowDownIcon from '@/assets/arrow-down.svg'
import cx from 'classnames'
import classes from './ProfileSettingsSidebar.module.sass'
import { NavRoutes } from '@/components/organisms/Navbar/Navbar'

const ProfileSettingsSidebar = () => {
  const pathname = usePathname()

  const settingList: NavRoutes = [
    {
      to: '/profile/settings/account-information',
      title: 'Account Information'
    },
    {
      to: '/profile/settings/solver-information',
      title: 'Solver Information'
    },
    {
      to: '/profile/settings/seeker-information',
      title: 'Seeker Information'
    },
    {
      to: '/profile/settings/notification-settings',
      title: 'Notification Settings'
    },
    {
      to: '/profile/settings/manage-connections',
      title: 'Manage Connections'
    }
  ]

  return (
    <div className={classes.settingsContainer}>
      <Image
        className={classes.arrowBack}
        src={arrowDownIcon}
        alt="arrow-back"
      />
      <Typography variant="bodyL" weight="bold">
        SETTINGS
      </Typography>
      <div className={classes.line}></div>
      <div className={classes.LinkBlock}>
        {settingList.map((s, index) => (
          <Link
            key={s.to}
            style={{ border: index === settingList.length - 1 ? 'none' : '' }}
            className={classes.link}
            href={s.to}
          >
            <Typography
              className={cx(classes.link, {
                [classes.active]: pathname === s.to
              })}
              variant="bodyL"
            >
              {s.title}
            </Typography>
            <Image
              className={classes.icon}
              src={chevronRightIcon}
              width={29}
              height={20}
              alt="right"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProfileSettingsSidebar
