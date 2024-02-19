import React from 'react'
import Typography from '@/components/atoms/Typography'
import classes from './ReviewDefaultState.module.sass'

const ReviewsDefaultState = () => (
  <div className={classes.defaultState}>
    <Typography variant="h3">There are no reviews yet</Typography>
  </div>
)

export default ReviewsDefaultState
