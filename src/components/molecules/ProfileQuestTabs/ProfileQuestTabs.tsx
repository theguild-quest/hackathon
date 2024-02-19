'use client'

import React from 'react'
import classes from './ProfileQuestTabs.module.sass'
import Button from '@/components/atoms/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'classnames'

const ProfileQuestTabs = () => {
  const pathname = usePathname()
  return (
    <div className={classes.profileQuestTabsWrapper}>
      <Link href="/profile/quest/solver">
        <Button
          variant="bodyXL"
          className={cx(classes.questTab, classes.solverTab, {
            [classes.pressed]: !!pathname.includes('/solver')
          })}
        >
          SOLVER
        </Button>
      </Link>
      <Link href="/profile/quest/seeker">
        <Button
          variant="bodyXL"
          className={cx(classes.questTab, classes.seekerTab, {
            [classes.pressed]: pathname.includes('/seeker')
          })}
        >
          SEEKER
        </Button>
      </Link>
    </div>
  )
}

export default ProfileQuestTabs
