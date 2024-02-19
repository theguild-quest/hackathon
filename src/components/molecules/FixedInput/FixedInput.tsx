'ues client'

import React, { FC, ReactNode } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import classes from './FixedInput.module.sass'

type Props = {
  label: ReactNode
  content: ReactNode
  icon: StaticImport
  onClick?: () => void
}

const FixedInput: FC<Props> = ({
  label, content, icon, onClick
}) => (
  <div className={classes.wrapper}>
    {label}
    <div className={classes.fixedInput}>
      {content}
      <Image src={icon} alt="label-icon" onClick={onClick} />
    </div>
  </div>
)

export default FixedInput
