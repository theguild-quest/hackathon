'use client'

import React, { useState } from 'react'
import Button from '@/components/atoms/Button'
import classes from './LogInStep.module.sass'
import Typography from '@/components/atoms/Typography'
import googleIcon from '@/assets/icons/socials/google.svg'
import xIcon from '@/assets/icons/socials/x.svg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signInWithGoogle, signInWithTwitter } from '@/lib/authorization'
import { useApolloClient, useLazyQuery, useMutation } from '@apollo/client'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { Login } from '@/lib/graphql/mutations/user'
import { enqueueSnackbar } from 'notistack'
import { parseErrorByCode } from '@/utils/helpers/errorParse'
import { useUserState } from '@/store/userStore'
import { User } from '@/lib/graphql/codegen/graphql'
import { ProfileQueriesForRefetch } from '@/utils/constants'
import { getSelfProfile } from '@/lib/graphql/queries/user'

const LogInStep = () => {
  const client = useApolloClient()
  const [isLoading, setIsLoading] = useState(false)
  const [login] = useMutation(Login)
  const router = useRouter()
  const [getSelfProfileQuery] = useLazyQuery(getSelfProfile)
  const { updateUser } = useUserState()

  const handleLogin = async (method: 'twitter' | 'google') => {
    setIsLoading(true)

    let response = null

    if (method === 'google') {
      response = await signInWithGoogle()
    } else response = await signInWithTwitter()

    // -- LOGIN FAILED
    if (response.status === 'error') {
      enqueueSnackbar(parseErrorByCode(response.payload.code), {
        variant: 'error'
      })
      console.error(response.payload)
      setIsLoading(false)
      return
    }
    // --
    const loginResponse = await login({
      variables: { idToken: response.payload._tokenResponse.idToken }
    })

    if (!loginResponse.data?.login) {
      enqueueSnackbar("Can't sign in. Account doesn't exist", {
        variant: 'error'
      })
      signOut(auth)
      setIsLoading(false)
      router.push('/registration')
      return
    }

    updateUser(loginResponse.data.login as User)
    enqueueSnackbar(`Authenticated as ${loginResponse.data?.login.username}`, {
      variant: 'success'
    })

    await client.refetchQueries({ include: ProfileQueriesForRefetch })
    await getSelfProfileQuery()

    router.push('/home')
    setIsLoading(false)
  }

  return (
    <div className={classes.container}>
      <Typography variant="h2" align="center" weight="bold">
        WELCOME
      </Typography>
      <div className={classes.form}>
        <div className={classes.loginOptions}>
          <Button
            variant="bodyL"
            onClick={() => handleLogin('google')}
            typographyProps={{ weight: 'bold' }}
            disabled={isLoading}
            startIcon={googleIcon}
          >
            Login with Google
          </Button>
          <Button
            variant="bodyL"
            typographyProps={{ weight: 'bold' }}
            onClick={() => handleLogin('twitter')}
            disabled={isLoading}
            startIcon={xIcon}
          >
            Login with X
          </Button>
        </div>
      </div>
      <div className={classes.form}>
        <div className={classes.continue}>
          <div className={classes.line} />
          <Typography variant="bodyM">Not registered yet?</Typography>
          <div className={classes.line} />
        </div>
        <div className={classes.buttonsContainer}>
          <Link href="/registration" className={classes.linkasd}>
            <Button
              variant="bodyXL"
              btnVariant="outline"
              typographyProps={{ color: 'secondary' }}
              btnColor="secondary"
            >
              Create an account
            </Button>
          </Link>
        </div>
      </div>
      <div className={classes.terms}>
        <Typography align="center" variant="bodyL" weight="light">
          By logging in, you agree to our
        </Typography>
        <Typography align="center" variant="bodyL" weight="light">
          <Link
            href="https://docs.google.com/document/d/1CQFtLwGMRzgV1Kd2v_3QxsCEinhgA_MvHs3vUhb2MIk/edit"
            className={classes.link}
          >
            Terms of Service
          </Link>{' '}
          &{' '}
          <Link
            href="https://docs.google.com/document/d/1MEuq9X3RM_6kwopg29Gi0dw88eEY2pcdSm6F5KIh2N0/edit"
            className={classes.link}
          >
            Privacy Policy
          </Link>
          .
        </Typography>
      </div>
    </div>
  )
}

export default LogInStep
