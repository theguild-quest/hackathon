import React, { FC } from 'react'
import Typography from '@/components/atoms/Typography'
import cx from 'classnames'
import Image from 'next/image'
import logoIconSmall from '@/assets/graphContainerSmall.svg'
import logoIcon from '@/assets/graphContainer.svg'
import classes from './PlatformSkillsCard.module.sass'

type Props = {
  className?: string
}

const PlatformSkillsCard: FC<Props> = ({ className }) => (
  <div className={cx(classes.platformSkillsBlock, className)}>
    <Typography className={classes.title} variant="h1" weight="bold">
      Platform Skills
    </Typography>
    <Typography variant="h1" weight="bold" className={classes.text}>
      COMING <br /> SOON
    </Typography>
    <div className={classes.image}>
      <Image alt="The Guild Logo" src={logoIcon} />
    </div>
    <div className={classes.imageSmall}>
      <Image alt="The Guild Logo" src={logoIconSmall} />
    </div>
  </div>
)

export default PlatformSkillsCard
