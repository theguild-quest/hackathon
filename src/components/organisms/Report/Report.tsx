import React, { ChangeEvent, useState } from 'react'
import classes from './Report.module.sass'
import Typography from '@/components/atoms/Typography'

import MultistepForm from '@/components/organisms/MultistepForm'
import OptionsStep from './OptionsStep'
import DetailsStep from './DetailsStep'
import ConfirmStep from './ConfirmStep'

export const revalidate = 5

const flow = [OptionsStep, DetailsStep, ConfirmStep]

const Report = (props: any) => {
  return <MultistepForm flow={flow} pageProps={props} />
}

export default Report
