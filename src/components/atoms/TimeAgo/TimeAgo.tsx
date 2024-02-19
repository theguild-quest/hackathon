import { calculateCreatedAgo } from '@/utils/helpers/calculateTimeDifference'
import React, { FC } from 'react'

type Props = {
  className?: string
  createdAt: string
}

const TimeAgo: FC<Props> = ({ className, createdAt }) => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  return (
    <span className={className}>
      {calculateCreatedAgo(createdAt, userTimezone)}
    </span>
  )
}

export default TimeAgo
