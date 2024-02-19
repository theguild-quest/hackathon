'use client'

import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { StepComponent } from '@/components/organisms/MultistepForm/MultistepForm'
import React from 'react'
import classes from './SignUpStep.module.sass'
import googleIcon from '@/assets/icons/socials/google.svg'
import xIcon from '@/assets/icons/socials/x.svg'

import { useSignUpState } from '@/store/signUpState'
import { signInWithGoogle, signInWithTwitter } from '@/lib/authorization'

import { enqueueSnackbar } from 'notistack'
import { parseErrorByCode } from '@/utils/helpers/errorParse'

const SignUpStep: StepComponent = ({ handleStep, step }) => {
  const { updateEmail, updateTwitterHandle } = useSignUpState()
  const { updateSignInMethod, updateToken } = useSignUpState()

  const handleGoogleSingUp = async () => {
    const response = await signInWithGoogle()
    if (response.status === 'success') {
      updateEmail(response.payload.user?.email || '')
      updateSignInMethod('google')
      updateToken(response.payload._tokenResponse.idToken)
      handleStep(2)
    } else {
      enqueueSnackbar(parseErrorByCode(response.payload.code), {
        variant: 'error'
      })
    }
  }

  const handleTwitterSignUp = async () => {
    const response = await signInWithTwitter()

    if (response.status === 'success') {
      updateEmail(response.payload.user?.email || '')
      updateSignInMethod('twitter')
      updateToken(response.payload._tokenResponse.idToken)
      updateTwitterHandle(response?.payload?.user?.reloadUserInfo?.screenName)
      handleStep(2)
    } else {
      enqueueSnackbar(parseErrorByCode(response.payload.code), {
        variant: 'error'
      })
    }
  }

  return (
    <div className={classes.container}>
      <Typography variant="h2" align="center" weight="bold">
        Sign Up
      </Typography>
      <div className={classes.signupOptions}>
        <Button
          variant="bodyL"
          onClick={handleGoogleSingUp}
          typographyProps={{ weight: 'bold' }}
          startIcon={googleIcon}
        >
          Sign up with Google
        </Button>
        <Button
          variant="bodyL"
          typographyProps={{ weight: 'bold' }}
          onClick={handleTwitterSignUp}
          startIcon={xIcon}
        >
          Sign up with X
        </Button>
      </div>
    </div>
  )
}

export default SignUpStep
