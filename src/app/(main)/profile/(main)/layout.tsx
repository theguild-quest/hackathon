import React, { FC, ReactNode } from 'react'
import classes from './layout.module.sass'
import ProfileTabs from '@/components/molecules/ProfileTabs'
import ProfileBar from '@/components/molecules/ProfileBar/ProfileBar'

type Props = {
  children: ReactNode
}

const ProfileMainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.userNameWrapper}>
        <ProfileBar />
      </div>
      <div className={classes.contentWrapper}>
        <ProfileTabs />
        {children}
      </div>
    </div>
  )
}
export default ProfileMainLayout
