'use client'

import { signOut as firebaseSignOut } from 'firebase/auth'
import React, { FC, useEffect } from 'react'
import classes from './LinkSignOut.module.sass'
import Typography from '../Typography'
import { signOut } from '@/lib/firebase/auth'
import cx from 'classnames'
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client'
import { Logout } from '@/lib/graphql/mutations/user'
import { auth } from '@/lib/firebase'

type Props = {
  className?: string
}

const LinkSignOut: FC<Props> = ({ className }) => {
  const [logoutMutation] = useMutation(Logout)
  const router = useRouter()
  return (
    <Typography
      variant="h3"
      onClick={async () => {
        await logoutMutation()
        await firebaseSignOut(auth)
        router.replace('/login')
      }}
      className={cx(classes.logOut, className)}
    >
      Log Out
    </Typography>
  )
}
export default LinkSignOut
