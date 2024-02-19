import React, { FC } from 'react'
import Image from 'next/image'
import treasureChest from '@/assets/treasureChest.svg'
import classes from './ProgressBar.module.sass'

interface ProgressBarProps {
  value: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ value }) => (
  <div className={classes.progressBar}>
    <div className={classes.progress} style={{ width: `${value}%`, background: '#DA5A5A' }} />
    <Image className={classes.progressBarImage} src={treasureChest} alt="Treasure-Chest" />
  </div>
)

export default ProgressBar
