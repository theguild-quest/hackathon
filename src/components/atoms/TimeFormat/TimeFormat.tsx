import { calculateCreatedAgo } from '@/utils/helpers/calculateTimeDifference'
import moment from 'moment-timezone'
import React, { FC } from 'react'

type Props = {
  className?: string
  formatString: string
  createdAt: string
}

const TimeFormat: FC<Props> = ({ className, createdAt, formatString }) => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const date = moment.tz(createdAt, userTimezone)

  return <span className={className}>{date.format(formatString)}</span>
}

export default TimeFormat
