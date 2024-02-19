import classes from './PolicyLinks.module.sass'
import Typography from '@/components/atoms/Typography'

const SocialLinks = () => {
  return (
    <div className={classes.policyLinks}>
      <Typography variant="bodyL" weight="light" color="pastel">
        Privacy Policy
      </Typography>
      <div className={classes.separator} />
      <Typography variant="bodyL" weight="light" color="pastel">
        Cookie Policy
      </Typography>
      <div className={classes.separator} />
      <Typography variant="bodyL" weight="light" color="pastel">
        Terms of Service
      </Typography>
    </div>
  )
}

export default SocialLinks
