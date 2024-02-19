import React, { FC } from 'react'
import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import avaxIcon from '@/assets/avalanche-avax-logo.svg'
import cx from 'classnames'
import classes from './RewardsCard.module.sass'
import ProfileButton from '../../atoms/ProfileButton'

type Props = {
  className?:string
}

const RewardsCard : FC<Props> = ({
  className
}) => (
  <div className={cx(classes.rewardsBlock, className)}>
    <Typography className={classes.title} variant="h1" weight="bold">Rewards</Typography>
    <div className={classes.referralRewardsBlock}>
      <div className={classes.referralReward}>
        <Typography weight="medium" className={classes.subTitle} color="secondary">Referral rewards</Typography>
        <div className={classes.claimedContainer}>
          <div className={classes.claimedBlock}>
            <Typography variant="bodyM" className={classes.claimedTitle} weight="semibold">Total rewards claimed</Typography>
            <div className={classes.countBlock}>
              <div className={classes.count}>780</div>
              <Image src={avaxIcon} alt="avax" />
            </div>
          </div>
          <div className={classes.claimedBlock}>
            <Typography variant="bodyM" weight="semibold">Unclaimed rewards</Typography>
            <div className={classes.countBlock}>
              <div className={classes.count}>780</div>
              <Image src={avaxIcon} alt="avax" />
            </div>
          </div>
          <ProfileButton weight="semibold" variantButton="secondary" variant="bodyL" color="dark" size="big">Claim</ProfileButton>
        </div>
      </div>
      <div className={classes.referralReward}>
        <Typography weight="medium" className={classes.subTitle} color="secondary">Participation rewards</Typography>
        <div className={classes.claimedContainer}>
          <div className={classes.claimedBlock}>
            <Typography variant="bodyM" weight="semibold">Total rewards claimed</Typography>
            <div className={classes.countBlock}>
              <div className={classes.count}>780</div>
              <Image src={avaxIcon} alt="avax" />
            </div>
          </div>
          <div className={classes.claimedBlock}>
            <Typography variant="bodyM" weight="semibold">Unclaimed rewards</Typography>
            <div className={classes.countBlock}>
              <div className={classes.count}>780</div>
              <Image src={avaxIcon} alt="avax" />
            </div>
          </div>
          <ProfileButton weight="semibold" variantButton="secondary" variant="bodyL" color="dark" size="big">Claim</ProfileButton>
        </div>
      </div>
    </div>
  </div>
)

export default RewardsCard
