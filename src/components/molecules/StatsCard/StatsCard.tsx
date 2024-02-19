import React, { FC } from 'react'
import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import statsImage from '@/assets/statsImage.svg'
import cx from 'classnames'
import classes from './StatsCard.module.sass'

type Props = {
  currenLevel:string
  referralTier:string
  questsCompleted:string
  totalXP:string
  className?:string
}

const StatsCard : FC<Props> = ({
  currenLevel,
  referralTier,
  questsCompleted,
  totalXP, className
}) => (
  <div className={cx(
    classes.statsBlock,
    className
  )}
  >
    <Image src={statsImage} className={classes.statsImage} width={308} height={352} alt="stats" />
    <div className={classes.statsInfoBlock}>
      <Typography className={classes.title} variant="h1" weight="bold">Stats</Typography>
      <div className={classes.infoBlock}>
        <div className={classes.info}>
          <Typography className={classes.subTitle} variant="h3">Current Level</Typography>
          <Typography className={classes.subTitle} weight="bold" color="secondary" variant="h3">{currenLevel}</Typography>
        </div>
        <div className={classes.info}>
          <Typography className={classes.subTitle} variant="h3">Referral Tier</Typography>
          <Typography className={classes.subTitle} weight="bold" color="secondary" variant="h3">{referralTier}</Typography>
        </div>
        <div className={classes.info}>
          <Typography className={classes.subTitle} variant="h3">Quests Completed</Typography>
          <Typography className={classes.subTitle} weight="bold" color="secondary" variant="h3">{questsCompleted}</Typography>
        </div>
        <div className={classes.info}>
          <Typography className={classes.subTitle} variant="h3">Total XP</Typography>
          <Typography className={classes.subTitle} weight="bold" color="secondary" variant="h3">{totalXP}</Typography>
        </div>

      </div>
    </div>
  </div>
)

export default StatsCard
