'use client'

import classes from './OptionsStep.module.sass'
import Typography from '@/components/atoms/Typography'
import classNames from 'classnames'
import { Fragment, useState } from 'react'
import { StepComponent } from '../../MultistepForm/MultistepForm'

const OptionsStep: StepComponent = ({ handleStep }) => {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([])

  const handleOptionClick = (value: string) => {
    if (selectedIssues.includes(value)) {
      setSelectedIssues(selectedIssues.filter((item) => item !== value))
    } else {
      setSelectedIssues([...selectedIssues, value])
    }
  }

  const issueOptions = [
    {
      value: 'illegalContents',
      label: 'It contains contents or information that seems illegal'
    },
    { value: 'sensitiveMedia', label: 'It contains sensitive media contents' },
    { value: 'abusive', label: "It's abusive or directing hatred" },
    {
      value: 'intentionsToHarm',
      label: 'It expresses intentions to harm others'
    },
    {
      value: 'intentionsOfSelfHarm',
      label: 'It expresses intentions of self-harm or suicide'
    },
    { value: 'spam', label: "It's spam" },
    { value: 'suspiciousOrMisleading', label: "It's suspicious or misleading" },
    { value: 'doNotWantToSee', label: "I don't want to see this post" },
    { value: 'otherReasons', label: 'Other reasons' }
  ]

  return (
    <div className={classes.optionsStep}>
      <header className={classes.header}>
        <Typography color="pastel" className={classes.desc}>
          Help us address the issue. What needs to be addressed with this post?
          <span className={classes.info}>*You can pick multiple reasons.</span>
        </Typography>
      </header>
      <div className={classes.content}>
        {issueOptions.map((option, index) => (
          <Fragment key={option.value}>
            {index > 0 && <div className={classes.separator} />}
            <div
              className={classNames(classes.option, {
                [classes.selected]: selectedIssues.includes(option.value)
              })}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          </Fragment>
        ))}
      </div>
      <div className={classes.footer}>
        <Typography>
          <Typography color="pastel">Learn more </Typography>
          about our community guidelines and moderation rules.
        </Typography>
        <Typography
          color="pastel"
          onClick={() => handleStep(1)}
          className={classes.next}
        >
          Next
        </Typography>
      </div>
    </div>
  )
}

export default OptionsStep
