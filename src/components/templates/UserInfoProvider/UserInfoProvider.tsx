import React from 'react'

const UserInfoProvider = () => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  return <div>UserInfoProvider</div>
}

export default UserInfoProvider
