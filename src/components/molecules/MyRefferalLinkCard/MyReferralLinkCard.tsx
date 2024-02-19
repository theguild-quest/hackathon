'use client'

import React, { FC } from 'react'
import Typography from '@/components/atoms/Typography'
import cx from 'classnames'
import Image from 'next/image'
import cardsIcon from '@/assets/cards.svg'
import classes from './MyReferralLinkCard.module.sass'

type Props = {
  className?: string
  link: string
}

const MyReferralLinkCard: FC<Props> = ({
  link,
  className
}) => {
  const handleCopy = (newLink: string) => {
    navigator.clipboard.writeText(newLink)
  }
  return (
    <div className={cx(classes.myreferralLinkBlock, className)}>
      <Typography className={classes.title} variant="h1" weight="bold">My Referral Link</Typography>
      <div className={classes.myreferralLink}>
        <Typography className={classes.subTilte} variant="h3" color="primary">{link}</Typography>
        <Image
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleCopy(link)
          }}
          src={cardsIcon}
          alt="copy"
        />
      </div>
    </div>
  )
}

export default MyReferralLinkCard
