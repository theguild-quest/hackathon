'use client'

import React, { useState } from 'react'
import Dropdown from '@/components/atoms/Dropdown'
import Typography from '@/components/atoms/Typography'
import Card from '@/components/molecules/Card'
import Image from 'next/image'
import savePink from '@/assets/savePink.svg'
import saveIcon from '@/assets/saveIcon.svg'
import classes from './page.module.sass'
import CreatePost from '@/components/organisms/CreatePost'
import Feed from '@/components/organisms/Feed'
import { useQuery } from '@apollo/client'
import { getSelfProfile } from '@/lib/graphql/queries/user'

const ProfileFeedPage = () => {
  const { data, loading, error } = useQuery(getSelfProfile)

  const [isSavedPost, setIsSavedPost] = useState(false)
  return (
    <div className={classes.feedContainer}>
      <div className={classes.sortPostBlock}>
        <Dropdown title="Sort by:" options={['All Post', 'My Post']} />
        <button
          onClick={() => setIsSavedPost(!isSavedPost)}
          className={classes.savePostButton}
        >
          <Typography
            color={isSavedPost ? 'primary' : 'text'}
            weight="bold"
            variant="bodyL"
          >
            Saved Post
          </Typography>
          {isSavedPost ? (
            <Image className={classes.icon} alt="save-pink" src={savePink} />
          ) : (
            <Image className={classes.icon} alt="save" src={saveIcon} />
          )}
        </button>
      </div>
      <div className={classes.container}>
        <CreatePost />

        {!loading && !error && <Feed userId={data?.getSelf?._id} self />}
      </div>
      <div style={{ color: 'white' }} className={classes.interestsBlock}>
        <div className={classes.interestBlock}>
          <div className={classes.titleBlock}>
            <Typography className={classes.title} variant="bodyL" weight="bold">
              Interests
            </Typography>
          </div>
          <div className={classes.listInterest}>
            <Typography color="grey" variant="bodyL">
              #blockchain #web3 #web3
            </Typography>
            <Typography color="grey" variant="bodyL">
              #web3
            </Typography>
            <Typography color="grey" variant="bodyL">
              #web3
            </Typography>
            <Typography color="grey" variant="bodyL">
              #web3
            </Typography>
          </div>
        </div>
        <Card title="GUILDS" blank />
      </div>
    </div>
  )
}

export default ProfileFeedPage
