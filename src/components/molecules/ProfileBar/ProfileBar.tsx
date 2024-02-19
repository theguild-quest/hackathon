'use client'

import React, { useEffect } from 'react'
import location from '@/assets/location.svg'
import calendar from '@/assets/calendar.svg'
import Image from 'next/image'
import Typography from '@/components/atoms/Typography'
import classes from './ProfileBar.module.sass'
import { useQuery } from '@apollo/client'
import { getSelfProfile } from '@/lib/graphql/queries/user'
import TimeFormat from '@/components/atoms/TimeFormat'
import ProfileDefault from '@/assets/ProfileDefault.png'
import { useUserState } from '@/store/userStore'
import { User } from '@/lib/graphql/codegen/graphql'
import cx from 'classnames'
import ProfileButton from '@/components/atoms/ProfileButton'
import moreIcon from '@/assets/icons/dots.svg'
import Link from 'next/link'

const ProfileBar = () => {
  const { data, loading, error } = useQuery(getSelfProfile)
  const { updateUser } = useUserState()

  console.log(data)

  useEffect(() => {
    if (data && !!data.getSelf) {
      updateUser(data.getSelf as User)
    }
  }, [])

  const banner = data?.getSelf?.profileBanner

  return (
    <div
      className={cx(classes.userNameBlock, { [classes.blockLoading]: loading })}
    >
      <div className={classes.profileBanner}>
        {banner && (
          <Image
            className={classes.bannerImage}
            alt={`${data.getSelf?.username || 'Aboba'}-post-media`}
            src={banner}
            quality={100}
            fill
          />
        )}
        <div className={classes.barActions}>
          <Link href="/profile/settings">
            <ProfileButton
              variant="bodyL"
              variantButton="secondary"
              color="dark"
              size="big"
              weight="semibold"
            >
              Settings
            </ProfileButton>
          </Link>
          <ProfileButton
            variant="bodyL"
            variantButton="secondary"
            color="dark"
            className={classes.iconButton}
            weight="semibold"
          >
            <Image alt="options-icon" src={moreIcon} />
          </ProfileButton>
        </div>
      </div>
      <div className={classes.blackBlock}>
        <div className={classes.avatarBlock}>
          <div className={classes.circle}>
            {/* <UserProfileIcon profilePicture={data?.getSelf?.profileImage}/> */}
            <Image
              className={classes.avatar}
              alt="Avatar"
              src={data?.getSelf?.profileImage || ProfileDefault}
              width={236}
              height={236}
            />
            <div className={classes.yellowDot} />
          </div>
          <div className={classes.onlineBlock}>
            <div className={classes.yellow} />
            <Typography variant="bodyL" align="center" weight="light">
              Online
            </Typography>
          </div>
        </div>
        <div className={classes.userInformationBlock}>
          <div className={classes.userName}>
            {data?.getSelf?.displayName || data?.getSelf?.username}
          </div>
          <Typography variant="bodyL" color="pastel" className={classes.email}>
            @{data?.getSelf?.username}
          </Typography>
          <div className={classes.followersBlock}>
            <Typography variant="bodyL" color="pastel">
              Followers
            </Typography>
            <Typography color="secondary" weight="bold">
              {data?.getSelf?.followers?.length || 0}
            </Typography>
            <div className={classes.dot} />
            <Typography variant="bodyL" color="pastel">
              Following
            </Typography>
            <Typography color="secondary" weight="bold">
              {data?.getSelf?.follows?.length || 0}
            </Typography>
          </div>
          <div className={classes.joined}>
            <Image alt="Calendar" className={classes.icon} src={calendar} />
            <Typography variant="bodyL" color="pastel" className={classes.date}>
              Joined{' '}
              <TimeFormat
                createdAt={data?.getSelf?.createdAt || ''}
                formatString="MMMM D, YYYY"
              />
            </Typography>
          </div>
          <div className={classes.locationBlock}>
            <Image alt="Location" className={classes.icon} src={location} />
            <Typography
              variant="bodyL"
              color="pastel"
              className={classes.location}
            >
              Blakatak, Republic of Palau (UTC+09:00)
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBar
