'use client'

import React, { FC, useState } from 'react'

export type StepComponent = React.FC<{
  handleStep: (payload: number) => void
  step?: number
  pageProps?: any
}>

type Props = {
  pageProps: any
  flow: Array<StepComponent>
}

const MultistepForm: FC<Props> = ({ flow, pageProps }) => {
  const [step, setStep] = useState(0)

  const handleStep = (payload: number) => {
    setStep((prevStep) => prevStep + payload)
  }

  const CurrentStep = flow[step]

  return (
    <CurrentStep handleStep={handleStep} step={step} pageProps={pageProps} />
  )
}

export default MultistepForm
