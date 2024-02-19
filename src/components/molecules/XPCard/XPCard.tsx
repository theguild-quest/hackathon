import React, { FC } from 'react'
import Typography from '@/components/atoms/Typography'
import ProgressBar from '@/components/atoms/ProgressBar/ProgressBar'
import cx from 'classnames'
import classes from './XPCard.module.sass'

type Props = {
  totalXP: string
  progressValue: number
  className?: string
}

const XPCard: FC<Props> = ({

  progressValue,
  totalXP, className
}) => (
  <div className={cx(
    classes.xpBlock,
    className
  )}
  >
    <Typography className={classes.title} variant="h1" weight="bold">XP</Typography>
    <div className={classes.infoBlock}>
      <div className={classes.info}>
        <Typography className={classes.subTitle} variant="h3">Total XP</Typography>
        <Typography className={classes.subTitle} weight="bold" color="secondary" variant="h3">{totalXP}</Typography>
      </div>
      <div className={classes.info}>
        <Typography className={classes.subTitle} variant="h3">XP until next level</Typography>
      </div>
      <ProgressBar value={progressValue} />
      <div className={classes.levelBlock}>
        <Typography className={classes.levelTitle} variant="h1" weight="bold" color="primary">Level 6</Typography>
        <Typography className={classes.levelTitle} variant="h1" weight="bold" color="primary">75/150</Typography>
      </div>
    </div>

  </div>
)

export default XPCard
