import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import classes from './ConfirmStep.module.sass'

const ConfirmStep = () => (
  <div className={classes.confirmStep}>
    <div className={classes.separator} />
    <div className={classes.content}>
      <Typography variant="h1" align="center" className={classes.message}>
        Thanks for letting us know. <br />
        We will address the issue promptly.
      </Typography>
      <div className={classes.buttonContainer}>
        <Button variant="bodyXL">Done</Button>
      </div>
    </div>
  </div>
)

export default ConfirmStep
