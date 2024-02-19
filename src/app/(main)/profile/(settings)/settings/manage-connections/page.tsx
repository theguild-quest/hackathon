'use client'

import React, { useEffect, useState } from 'react'
import arrowDownIcon from '@/assets/arrow-down.svg'
import searchIcon from '@/assets/searchIcon.svg'
import avatar from '@/assets/ProfileDefault.png'
import ProfileButton from '@/components/atoms/ProfileButton'
import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import Link from 'next/link'
import Input from '@/components/atoms/Input'
import { useMutation, useQuery } from '@apollo/client'
import { UnblockUser } from '@/lib/graphql/mutations/user'
import { getBlockedUsersWithCount } from '@/lib/graphql/queries/profile'
import loadingGif from '@/assets/pre-signup/guild_gif.gif'
import classes from './page.module.sass'

const ProfileManageConnections = () => {
  const [users, setUsers] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const { data: res, loading, error } = useQuery(getBlockedUsersWithCount)

  const [unblockUser] = useMutation(UnblockUser)

  const handleUnblock = async (userId: string) => {
    const response = await unblockUser({
      variables: {
        userId
      }
    })
  }

  const filteredUsers = users.filter(
    (user) =>
      user.displayName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    if (res && res.getBlockedUsersWithCount) {
      const { blockedUsers } = res.getBlockedUsersWithCount

      setUsers(blockedUsers!)
    }
  }, [res])

  return (
    <div className={classes.manageConnectionsContainer}>
      {loading ? (
        <div className={classes.loadingContainer}>
          <Image src={loadingGif} alt="loading-gif" />
        </div>
      ) : (
        <>
          <div className={classes.content}>
            <div className={classes.arrowBlock}>
              <Link href="/profile/settings">
                <Image
                  className={classes.arrowBack}
                  src={arrowDownIcon}
                  alt="arrow-back"
                />
              </Link>
              <Typography
                style={{ marginLeft: '20%' }}
                weight="medium"
                variant="bodyL"
              >
                Manage Connections
              </Typography>
            </div>
          </div>

          <div className={classes.inputBlock}>
            <div className={classes.titleBlock}>
              <Typography
                className={classes.title}
                weight="medium"
                color="primary"
                variant="h2"
              >
                {filteredUsers?.length}
              </Typography>
              <Typography className={classes.title} weight="light" variant="h2">
                blocked
              </Typography>
            </div>
            <Input
              onChange={(e) => setSearchQuery(e.target.value)}
              iconLeft={
                <div className={classes.iconBlock}>
                  <Image
                    width={19}
                    height={19}
                    src={searchIcon}
                    alt="arrow-back"
                  />
                  <Typography
                    style={{ color: '#454F65' }}
                    weight="light"
                    variant="bodyL"
                  >
                    Search
                  </Typography>
                </div>
              }
              className={classes.searchInput}
            />
          </div>

          <div className={classes.userList}>
            {filteredUsers?.map((user) => (
              <div className={classes.userBlock} key={user.id}>
                <div className={classes.avatarBlok}>
                  <Image
                    width={45}
                    height={45}
                    className={classes.image}
                    src={avatar}
                    alt="avatar"
                  />
                  <Typography
                    className={classes.userName}
                    weight="medium"
                    variant="bodyL"
                  >
                    {user.displayName ?? user.username}
                  </Typography>
                </div>
                <ProfileButton
                  onClick={() => handleUnblock(user._id)}
                  color="dark"
                  weight="medium"
                  variant="h3"
                  size="normal"
                  classNameTypography={classes.typography}
                  className={classes.button}
                >
                  Unblock
                </ProfileButton>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
export default ProfileManageConnections
