'use client'

import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { StepComponent } from '@/components/organisms/MultistepForm/MultistepForm'
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import classes from './CreateProfileStep.module.sass'
import { useSignUpState } from '@/store/signUpState'
import { verifyPassword } from '@/utils/helpers/verification'
import { parseSignInMethod } from '@/utils/helpers/parseSignInMethod'

const CreateProfileStep: StepComponent = ({ handleStep }) => {
  const { email, signInMethod } = useSignUpState()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const { updatePassword } = useSignUpState()
  const [errorMessage, setErrorMessage] = useState('')

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    stateSetter: Dispatch<SetStateAction<string>>
  ) => {
    stateSetter(e.target.value)
  }

  const proceedWithPassword = async () => {
    setIsError(false)
    setIsLoading(true)

    const verifyResult = verifyPassword(password, confirmPassword)

    if (verifyResult !== '') {
      setIsLoading(false)
      setIsError(true)
      setErrorMessage(verifyResult)
      return
    }
    updatePassword(password)
    handleStep(1)
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
          <Typography variant="bodyL">Password</Typography>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => handleInput(e, setPassword)}
            error={isError}
          />
          {isError && (
            <Typography className={classes.error} variant="bodyM" error>
              {errorMessage}
            </Typography>
          )}
        </div>
        <div className={classes.formControl}>
          <Typography variant="bodyL">Confirm Password</Typography>
          <Input
            type="password"
            placeholder="Enter your password"
            value={confirmPassword}
            onChange={(e) => handleInput(e, setConfirmPassword)}
            error={isError}
          />
          <div className={classes.inputInfo}>
            {isError && (
              <Typography className={classes.error} variant="bodyM" error>
                {errorMessage}
              </Typography>
            )}
          </div>
        </div>
        <Button
          variant="bodyXL"
          onClick={proceedWithPassword}
          disabled={isLoading}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

export default CreateProfileStep
