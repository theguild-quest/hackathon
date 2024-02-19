'use client'

import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { StepComponent } from '@/components/organisms/MultistepForm/MultistepForm'
import React, { ChangeEvent, ReactNode, useState } from 'react'
import classes from './CreateProfileContinuedStep.module.sass'
import { useSignUpState } from '@/store/signUpState'
import { useMutation } from '@apollo/client'
import { CheckUsername, Register } from '@/lib/graphql/mutations/user'
import { verifyUsername } from '@/utils/helpers/verification'
import {
  CUSTOM_ERROR_CODES,
  parseErrorByCode
} from '@/utils/helpers/errorParse'
import { enqueueSnackbar } from 'notistack'
import { parseSignInMethod } from '@/utils/helpers/parseSignInMethod'

const CreateProfileContinuedStep: StepComponent = ({ handleStep }) => {
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | ReactNode>('')
  const {
    email,
    referralCode,
    twitterHandle,
    updateUsername,
    signInMethod,
    token
  } = useSignUpState()
  const [register] = useMutation(Register)
  const [checkUsernameUnique] = useMutation(CheckUsername)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setUsername(e.target.value)
  }

  const registerUser = async () => {
    setError('')
    setIsLoading(true)

    if (!verifyUsername(username)) {
      setIsLoading(false)
      setError(parseErrorByCode(CUSTOM_ERROR_CODES.USERNAME_ALREADY_IN_USE))
      return
    }

    const isUnique = await checkUsernameUnique({ variables: { username } })

    if (!isUnique?.data?.verifyUsername) {
      setIsLoading(false)
      setError(`Username must be unique`)
      return
    }

    updateUsername(username)

    try {
      if (token) {
        await register({
          variables: { username, referralCode, twitterHandle, idToken: token }
        })
      }
      handleStep(2)
    } catch (err: any) {
      enqueueSnackbar(parseErrorByCode(), { variant: 'error' })
      console.error(err)
    }

    setIsLoading(false)
  }

  return (
    <div className={classes.container}>
      <div className={classes.verification}>
        <Typography variant="bodyL" className="">
          {parseSignInMethod(signInMethod)}
        </Typography>
        <Typography variant="bodyL" className={classes.email}>
          {email}
        </Typography>
        <div className={classes.line} />
      </div>
      <Typography variant="h2" align="center" weight="bold">
        Create Your Profile
      </Typography>
      <div className={classes.form}>
        <div className={classes.formControl}>
          <Typography variant="bodyL">Username</Typography>
          <Input
            placeholder="Enter your username"
            onChange={handleInput}
            value={username}
            maxLength={20}
          />

          <div className={classes.inputInfo}>
            {error && (
              <Typography className={classes.error} variant="bodyM" error>
                {error}
              </Typography>
            )}
            <Typography className={classes.count} variant="bodyM">
              <span className={classes.countVal}>{username.length}</span>/20
            </Typography>
          </div>
        </div>

        <Button variant="bodyXL" onClick={registerUser} disabled={isLoading}>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default CreateProfileContinuedStep
