'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './ProfileTabs.module.sass'
import Button from '@/components/atoms/Button'
import cx from 'classnames'

type Props = {
  disabled?: boolean
}

const ProfileTabs: FC<Props> = ({ disabled = false }) => {
  const pathname = usePathname()
  return (
    <>
      <div className={classes.tabs}>
        <Link href="/profile/feed">
          <Button
            disabled={disabled}
            variant="bodyXL"
            className={cx(classes.tabButton, {
              [classes.pressed]: !!pathname.includes('/feed')
            })}
          >
            FEED
          </Button>
        </Link>
        <Link href="/profile/quest/solver">
          <Button
            disabled={disabled}
            variant="bodyXL"
            className={cx(classes.tabButton, {
              [classes.pressed]: !!pathname.includes('/quest')
            })}
          >
            QUEST
          </Button>
        </Link>
        <Link href="/profile/stats">
          <Button
            disabled={disabled}
            variant="bodyXL"
            className={cx(classes.tabButton, {
              [classes.pressed]: !!pathname.includes('/stats')
            })}
          >
            STATS
          </Button>
        </Link>
      </div>
      <div className={classes.grayLine} />
    </>
  )
}

export default ProfileTabs
