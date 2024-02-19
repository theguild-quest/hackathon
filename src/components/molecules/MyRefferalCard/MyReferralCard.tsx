'use client'

import React, { FC, useState } from 'react'
import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import filterIcon from '@/assets/filter.svg'
import cx from 'classnames'
import ProfileButton from '@/components/atoms/ProfileButton'
import classes from './MyReferralCard.module.sass'
import { useQuery } from '@apollo/client'
import { getReferrals } from '@/lib/graphql/queries/profile'

type Props = {
  className?: string
}

type User = {
  displayName: string
  username: string
  profileImage: string
  level: number
}

enum ReferralType {
  'DIRECT' = 'direct',
  'INDIRECT' = 'inDirect'
}

const MyReferralCard: FC<Props> = ({ className }) => {
  const { data, refetch } = useQuery(getReferrals)

  const [users, setUsers] = useState<User[]>(data?.layers?.first || [])
  const [referralType, setReferralType] = useState<ReferralType>(
    ReferralType.DIRECT
  )

  const showDirectReferrals = () => {
    setReferralType(ReferralType.DIRECT)
    setUsers(data.layers.first)
  }

  const showInDirectReferrals = () => {
    let users: User[] = []
    data?.layers?.second.forEach((user: User) => {
      users.push({ ...user, level: 2 })
    })

    data?.layers?.third.forEach((user: User) => {
      users.push({ ...user, level: 3 })
    })

    data?.layers?.fourth.forEach((user: User) => {
      users.push({ ...user, level: 4 })
    })
    setReferralType(ReferralType.INDIRECT)
    setUsers(users)
  }

  const handleSearch = async (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    refetch({
      layerSearch: { searchText: target.value }
    })
  }

  return (
    <div className={cx(classes.myReferralContainer, className)}>
      <Typography className={classes.title} variant="h1" weight="bold">
        My Referrals
      </Typography>
      <div className={classes.directBlock}>
        <div className={classes.direct}>
          <Typography
            className={classes.directTitle}
            variant="h3"
            color="primary"
          >
            DIRECT
          </Typography>
          <ProfileButton
            variant="bodyL"
            size="big"
            variantButton="darker"
            pressed={referralType === ReferralType.DIRECT}
            onClick={showDirectReferrals}
          >
            <span style={{ color: '#DA5A5A' }}>
              {data?.directReferrals || 0}
            </span>
            <span style={{ marginLeft: '8px' }}>Referrals</span>
          </ProfileButton>
        </div>
        <div className={classes.direct}>
          <Typography
            className={classes.directTitle}
            variant="h3"
            color="secondary"
          >
            INDIRECT
          </Typography>
          <ProfileButton
            variant="bodyL"
            size="big"
            variantButton="darker"
            pressed={referralType === ReferralType.INDIRECT}
            onClick={showInDirectReferrals}
          >
            <span style={{ color: '#D39213' }}>
              {data?.indirectReferrals || 0}
            </span>
            <span style={{ marginLeft: '8px' }}>Referrals</span>
          </ProfileButton>
        </div>
        <div className={classes.direct}>
          <Typography className={classes.directTitle} variant="h3">
            Referral Map
          </Typography>
          <ProfileButton
            variantButton="darker"
            variant="bodyL"
            size="big"
            weight="medium"
          >
            Visit
          </ProfileButton>
        </div>
      </div>
      <div className={classes.searchBlock}>
        <input
          className={classes.searchInput}
          placeholder="Search"
          onChange={handleSearch}
        />
        <div className={classes.filter}>
          <Image src={filterIcon} alt="filter" />
        </div>
      </div>
      <div className={classes.userListBlock}>
        {users.map((user, index: number) => (
          <div key={user.username} className={classes.userContainer}>
            <div className={classes.userBlock}>
              <div className={classes.avatarBlock}>
                <div className={classes.imageWrap}>
                  <Image
                    width={52}
                    height={52}
                    src={user.profileImage}
                    alt="avatar"
                  />

                  {referralType === ReferralType.INDIRECT && (
                    <div
                      className={`${classes.level} ${
                        user.level === 2
                          ? classes.level_2
                          : user.level === 3
                          ? classes.level_3
                          : user.level === 4
                          ? classes.level_4
                          : ''
                      }`}
                    >
                      {user.level === 2
                        ? '2ND'
                        : user.level === 3
                        ? '3RD'
                        : '4TH'}
                    </div>
                  )}
                </div>
                <div className={classes.nameEmailBlock}>
                  <Typography className={classes.nameTitle} variant="h3">
                    {user.displayName}
                  </Typography>
                  <Typography
                    className={classes.emailTitle}
                    variant="h3"
                    color="grey"
                  >
                    {`@${user.username}`}
                  </Typography>
                </div>
              </div>
              <div className={classes.countBlock}>
                <Typography
                  className={classes.nameTitle}
                  variant="h3"
                  color="primary"
                  weight="bold"
                >
                  9999
                </Typography>
                <Typography className={classes.nameTitle} variant="h3">
                  XP
                </Typography>
              </div>
            </div>
            {index !== users.length - 1 && <div className={classes.line} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyReferralCard
