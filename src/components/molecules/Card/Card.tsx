import React, { FC } from 'react'
import Typography from '@/components/atoms/Typography'
import BlankBlock from '@/components/atoms/BlankBlock'
import Link from 'next/link'
import classes from './Card.module.sass'

type Props = {
  title: string
  blank: boolean
  link?: string
}

const Card: FC<Props> = ({ title, blank, link = '' }) => (
  <div className={classes.contentBlock}>
    <div className={classes.titleBlock}>
      <Typography className={classes.title} variant="bodyL">
        {title}
      </Typography>
      {/* <Link href={link} className={classes.link}> */}
      <Typography variant="bodyM" color="grey" inherited>
        View All
      </Typography>
      {/* </Link> */}
    </div>
    <div className={classes.content}>
      {blank ? (
        <BlankBlock />
      ) : (
        <></>
        // Not in v1
      )}
    </div>
  </div>
)

export default Card
