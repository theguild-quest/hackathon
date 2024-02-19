import React from 'react'
import loadingGif from '@/assets/pre-signup/guild_gif.gif'
import Image from 'next/image'
import classes from './loading.module.sass'

const Loading = () => (
  <div className={classes.loadingWrapper}>
    <Image src={loadingGif} alt="loading-gif" />
  </div>
)

export default Loading
