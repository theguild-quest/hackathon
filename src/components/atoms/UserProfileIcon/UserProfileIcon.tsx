import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React, { FC } from 'react'
import classes from './UserProfileIcon.module.sass'
import Image from 'next/image'
import cx from 'classnames'
import Link from 'next/link'
import ProfileDefault from '@/assets/ProfileDefault.png'

type Props = {
  profilePicture: StaticImport | undefined | null | string
  size?: 'big' | 'normal' // big for navbar, small for other
}

const UserProfileIcon: FC<Props> = ({ profilePicture, size = 'normal' }) => (
  <div>
    {/* This empty div is required somehow */}
    <div
      className={cx(classes.userProfileIcon, { [classes.big]: size === 'big' })}
    >
      <Image
        className={classes.profileImage}
        alt="User profile picture"
        src={profilePicture || ProfileDefault}
        quality={100}
        width={44}
        height={44}
      />
    </div>
  </div>
)

export default UserProfileIcon
