'use client'

// import { getSessionCookie } from '@/app/actions'
// import { auth } from '@/lib/firebase'
// import { getSelfForLogin } from '@/lib/graphql/queries/user'
// import { useSignUpState } from '@/store/signUpState'
// import { useLazyQuery } from '@apollo/client'
// import { User, onAuthStateChanged } from 'firebase/auth'
// import { usePathname, useRouter } from 'next/navigation'
import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Authorization: FC<Props> = ({ children }) => {
  // const pathname = usePathname()
  // const state = useSignUpState()
  // const router = useRouter()
  // const { updateUser } = state
  // const [getSelfForUser] = useLazyQuery(getSelfForLogin, {
  //   fetchPolicy: 'network-only', // Used for first execution
  //   nextFetchPolicy: 'cache-first' // Used for subsequent executions
  // })

  // const checkAuthorization = async (user: User) => {
  //   const selfResponse = await getSelfForUser()
  //   if (!!selfResponse.data?.getSelf) {
  //     updateUser(user)
  //   }
  // }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) console.log('USER CHANGED', { user })
  //     else console.log('USER CHANGED', { user })
  //   })

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [auth.currentUser])

  return <>{children}</>
}

export default Authorization
