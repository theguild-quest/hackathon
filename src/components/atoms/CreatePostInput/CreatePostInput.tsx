'use client'

import React from 'react'
import UserProfileIcon from '@/components/atoms/UserProfileIcon'
import classes from './CreatePostInput.module.sass'
import { useUserState } from '@/store/userStore'
import { profile } from 'console'

const CreatePostInput = () => {
  const { profileImage } = useUserState()
  return (
    <div className={classes.createPostBlock}>
      <UserProfileIcon profilePicture={profileImage} />
      <input
        placeholder="Create a post..."
        className={classes.createPostInput}
      />
    </div>
  )
}

export default CreatePostInput
