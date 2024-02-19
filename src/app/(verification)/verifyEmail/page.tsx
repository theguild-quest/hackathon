'use client'

import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo_icon.svg'
import Typography from '@/components/atoms/Typography'
import { applyActionCode } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter, useSearchParams } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import classes from './page.module.sass'

const VerifyEmail = (props: any) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleVerifyEmail = async (auth: any, actionCode: any) => {
    try {
      await applyActionCode(auth, actionCode)
      router.push('/login')
      enqueueSnackbar('Email Verified! Log in to get started.', {
        variant: 'success'
      })
    } catch (error) {
      console.log('VERIFY', error)
      enqueueSnackbar('Something went wrong. Try again later.', {
        variant: 'error'
      })
    }
  }

  return (
    <main className={classes.wrapper}>
      <div className={classes.content}>
        <Image src={logo} alt="the guild logo" className={classes.logo} />
        <div className={classes.text}>
          <Typography variant="h1" align="center" color="dark" weight="medium">
            Email Verification
          </Typography>
          <Typography variant="h2" color="dark">
            Hello!
            {' '}
            <Typography color="primary">User</Typography>
          </Typography>
          <Typography variant="h2" color="dark">
            Welcome to THE GUILD! Click the verification link below to continue
            <br />
            with your account creation.
          </Typography>
          <button
            className={classes.button}
            onClick={() => handleVerifyEmail(auth, searchParams.get('oobCode'))}
          >
            Verify Email
          </button>
        </div>
      </div>
    </main>
  )
}
export default VerifyEmail
