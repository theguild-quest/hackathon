'use client'

import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'
import classes from './DetailsStep.module.sass'
import { StepComponent } from '../../MultistepForm/MultistepForm'

const DetailsStep: StepComponent = ({ handleStep }) => (
  <div className={classes.detailsStep}>
    <div className={classes.container}>
      <header className={classes.header}>
        <Typography color="pastel" className={classes.desc}>
          Please provide any details that might help us resolve this issue.
          <span className={classes.info}>(Optional)</span>
        </Typography>
      </header>
      <div className={classes.content}>
        <textarea
          className={classes.commentTextArea}
          placeholder="Write a comment"
          rows={10}
        />
        <Typography variant="bodyM" className={classes.count}>
          <span className={classes.countVal}>0</span>/400
        </Typography>
      </div>
      <div className={classes.footer}>
        <Button
          variant="bodyXL"
          className={classes.sendButton}
          onClick={() => handleStep(1)}
        >
          Send
        </Button>
      </div>
    </div>
  </div>
)

export default DetailsStep
