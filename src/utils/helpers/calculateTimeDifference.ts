import moment from 'moment-timezone'

export const calculateJoinTime = (createdAt: string, userTimezone: string) => {
  const joinDate = moment.tz(createdAt, userTimezone)
  const now = moment()

  const duration = moment.duration(now.diff(joinDate))

  if (duration.asSeconds() < 60) return 'recently'

  if (duration.asMinutes() < 1) return `${Math.floor(duration.asSeconds())} seconds ago`

  if (duration.asHours() < 1) return `${Math.floor(duration.asMinutes())} minutes ago`

  if (duration.asHours() < 24) return `${Math.floor(duration.asHours())} hours ago`

  if (duration.asDays() < 7) return `${Math.floor(duration.asDays())} days ago`

  if (duration.asDays() < 14) return `${Math.floor(duration.asWeeks())} week ago`

  return 'a while ago'
}

export const calculateCreatedAgo = (
  createdAt: string,
  userTimezone: string
) => {
  const joinDate = moment.tz(createdAt, userTimezone)
  const now = moment()

  const duration = moment.duration(now.diff(joinDate))

  if (duration.asMinutes() < 1) return `${Math.floor(duration.asSeconds())}s`

  if (duration.asHours() < 1) return `${Math.floor(duration.asMinutes())}min`

  if (duration.asHours() < 24) return `${Math.floor(duration.asHours())}h`

  if (duration.asDays() < 26) return `${Math.floor(duration.asDays())}d`

  if (duration.asMonths() < 12) return `${Math.floor(duration.asMonths())}mon`

  return `${Math.floor(duration.asYears())}y`
}
