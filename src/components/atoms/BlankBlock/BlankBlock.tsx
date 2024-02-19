import React from 'react'
import logoIcon from '@/assets/logo_icon.svg'
import Image from 'next/image'
import classes from './BlankBlock.module.sass'
import Typography from '../Typography'

const BlankBlock = () => (
  <div className={classes.filler}>
    <Typography variant="h1" className={classes.text}>
      COMING <br /> SOON
    </Typography>
    <Image className={classes.image} alt="The Guild Logo" src={logoIcon} />
  </div>
)

export default BlankBlock
