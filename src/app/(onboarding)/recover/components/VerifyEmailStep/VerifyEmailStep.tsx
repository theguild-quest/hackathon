'use client'

import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { StepComponent } from '@/components/organisms/MultistepForm/MultistepForm'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, sendEmailVerification } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import classes from './VerifyEmailStep.module.sass'

const VerifyEmailStep: StepComponent = ({ handleStep }) => {
  const [sent, setSent] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          enqueueSnackbar('Email verified! Log in to get started.', {
            variant: 'success',
            autoHideDuration: 5000
          })
        }
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const sendVerificationEmail = async () => {
    if (auth.currentUser && !auth.currentUser.emailVerified) {
      await sendEmailVerification(auth.currentUser)
      setSent(true)
    }
  }

  const handleRedirect = () => {
    router.push('/login')
  }

  useEffect(() => {
    if (!sent) sendVerificationEmail()
  }, [auth.currentUser])

  return (
    <div className={classes.container}>
      {/* Correct form fields go here */}
      <Typography variant="h2" align="center" weight="bold">
        Please verify your email
      </Typography>
      <Typography variant="h2" className={classes.verificationMsg}>
        We've sent an email to
        {' '}
        <span className={classes.email}>{auth?.currentUser?.email || ''}</span>
        {' '}
        Please check your inbox and click the verification link to continue with
        your sign up.
      </Typography>
      <Typography variant="h2" className={classes.spamEmail}>
        Haven't received your email? Have you checked your spam folder?
      </Typography>
      <div className={classes.buttonsContainer}>
        <Button variant="bodyL" onClick={sendVerificationEmail}>
          Resend Verification Email
        </Button>
        <Button variant="bodyL" btnVariant="outline" onClick={handleRedirect}>
          Log In
        </Button>
      </div>
    </div>
  )
}

export default VerifyEmailStep
