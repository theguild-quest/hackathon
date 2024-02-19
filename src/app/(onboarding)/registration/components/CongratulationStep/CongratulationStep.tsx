'use client'

import Typography from '@/components/atoms/Typography'
import { StepComponent } from '@/components/organisms/MultistepForm/MultistepForm'
import Link from 'next/link'
import React, { FC } from 'react'
import classes from './CongratulationStep.module.sass'
import Image from 'next/image'
import congratsGif from '@/assets/pre-signup/congrats.gif'
import GraphicButton from '@/components/atoms/GraphicButton'

const CongratulationStep: StepComponent = () => (
    <div className={classes.container}>
      {/* Correct form fields go here */}
      <Typography variant="h2" align="center" weight="bold">
        CONGRATULATION
      </Typography>
      <Image
        src={congratsGif}
        alt="congrats gif"
        className={classes.congratulations}
      />
      <div className={classes.welcome}>
        <div className={classes.welcomeText}>
          <Typography variant="h3" align="center">
            Welcome to THE GUILD Pre-Sign up!
          </Typography>
          <Typography variant="h3" align="center">
            Take a look at your Profile:
          </Typography>
        </div>
        <Link href="/pre-signup">
          <GraphicButton size="normal" variant="bodyXL">
            ENTER
          </GraphicButton>
        </Link>
      </div>
    </div>
  )

export default CongratulationStep
