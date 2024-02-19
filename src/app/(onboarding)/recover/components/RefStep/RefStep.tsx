'use client'

import Input from '@/components/atoms/Input'
import { useMutation } from '@apollo/client'
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { StepComponent } from '@/components/organisms/MultistepForm/MultistepForm'
import React, { ChangeEvent, useState } from 'react'
import { useSignUpState } from '@/store/signUpState'
import { CheckReferralCode } from '@/lib/graphql/mutations/user'
import classes from './RefStep.module.sass'

const RefStep: StepComponent = ({ handleStep, pageProps }) => {
  const [referralCode, setReferralCode] = useState(
    pageProps?.searchParams?.ref || ''
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')
  const { updateReferralCode } = useSignUpState()
  const [verifyReferral] = useMutation(CheckReferralCode)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsError('')
    setReferralCode(e.target.value)
  }

  const verifyReferralCode = async (skip: boolean) => {
    setIsLoading(true)
    if (skip) {
      updateReferralCode(referralCode)
      handleStep(1)
    }

    if (!referralCode) {
      setIsError('Invalid referral code')
      setIsLoading(false)
      return
    }

    const response = await verifyReferral({ variables: { referralCode } })

    if (response?.data?.verifyReferralCode) {
      updateReferralCode(referralCode)
      handleStep(1)
    } else {
      setIsError('Referral does not exist')
    }

    setIsLoading(false)
  }
  return (
    <div className={classes.container}>
      <Typography variant="h2" align="center" weight="bold">
        RECOVER
      </Typography>
      <div className={classes.form}>
        <div className={classes.formControl}>
          <Typography variant="bodyL">Referral code</Typography>
          <Input
            placeholder="Type or paste your code"
            value={referralCode}
            onChange={handleInput}
            error={!!isError}
          />
          {!!isError && (
            <Typography variant="bodyM" error>
              {isError}
            </Typography>
          )}
        </div>
        <Button
          disabled={isLoading}
          variant="bodyL"
          onClick={() => verifyReferralCode(false)}
        >
          Continue
        </Button>
        <Button
          disabled={isLoading}
          variant="bodyL"
          onClick={() => verifyReferralCode(true)}
        >
          Skip
        </Button>
      </div>
    </div>
  )
}

export default RefStep
