'use client'
import React, { FormEvent, ReactNode, useEffect, useState } from 'react'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import classes from './LogInStep.module.sass'
import Typography from '@/components/atoms/Typography'
import { useRouter } from 'next/navigation'
import { loginWithEmailAndPassword } from '@/lib/authorization'
import { verifyLoginCredentials } from '@/utils/helpers/verification'
import { useLazyQuery, useMutation } from '@apollo/client'
import { getSelfForLogin } from '@/lib/graphql/queries/user'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { Register } from '@/lib/graphql/mutations/user'
import { enqueueSnackbar } from 'notistack'
import { StepComponent } from '@/components/organisms/MultistepForm/MultistepForm'

const LogInStep: StepComponent = ({ handleStep }) => {
  const [isError, setIsError] = useState<string | ReactNode>('')
  const [isLoading, setIsLoading] = useState(false)
  const [getSelfForUser] = useLazyQuery(getSelfForLogin)
  const router = useRouter()
  const [register] = useMutation(Register)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!user.emailVerified) {
          enqueueSnackbar(`Account for ${user.email} found.`, {
            variant: 'success'
          })
          handleStep(1)
        } else {
          enqueueSnackbar(`Email already verified! Log in to get started.`, {
            variant: 'success'
          })
          router.push('/login')
        }
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const loginSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const [email, password] = [
      formData.get('email') as string,
      formData.get('password') as string
    ]

    const verificationResult = verifyLoginCredentials(email, password)

    if (verificationResult === '') {
      setIsLoading(true)
      const response = await loginWithEmailAndPassword(email, password)

      if (response.status === 'error') {
        if (response.payload.code === 'auth/invalid-credential') {
          setIsError('Invalid login credentials.')
        } else {
          enqueueSnackbar('Something went wrong. Try again later.', {
            variant: 'error'
          })
        }
        setIsLoading(false)
        return
      }
    } else {
      setIsError(verificationResult)
    }
  }

  return (
    <div className={classes.container}>
      <Typography variant="h2" align="center" weight="bold">
        RECOVER
      </Typography>
      <form onSubmit={loginSubmit} className={classes.form}>
        {/* onSubmit = login */}
        <div className={classes.formControl}>
          <Typography variant="bodyL">Email</Typography>
          <Input
            placeholder="Enter your email address"
            id="email"
            name="email"
            error={!!isError}
          />
        </div>
        <div className={classes.formControl}>
          <Typography variant="bodyL">Password</Typography>
          <Input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            error={!!isError}
          />
          {isError && (
            <Typography variant="bodyM" error>
              {isError}
            </Typography>
          )}
        </div>

        <Button variant="bodyXL" type="submit" disabled={isLoading}>
          Continue
        </Button>
      </form>
    </div>
  )
}

export default LogInStep
