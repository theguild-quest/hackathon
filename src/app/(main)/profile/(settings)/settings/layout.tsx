import React, { FC, ReactNode } from 'react'
import classes from './layout.module.sass'
import ProfileSettingsSidebar from '@/components/molecules/ProfileSettingsSidebar'

type Props = {
  children: ReactNode
}

const ProfileSettingsLayout: FC<Props> = ({ children }) => {
  return (
    <main>
      <div className={classes.profileSettingsContainer}>
        <ProfileSettingsSidebar />
        {children}
      </div>
    </main>
  )
}
export default ProfileSettingsLayout
