import React from 'react'
import Image from 'next/image'
import avatar from '@/assets/ProfileDefault.png'
import Typography from '@/components/atoms/Typography'
import season from '@/assets/season2.svg'
import { USER_STATUS } from '@/enums'
import goldStar from '@/assets/goldStar.svg'
import redStar from '@/assets/redStar.svg'
import classes from './ReviewsCompletedQuest.module.sass'

type Props = {
  reviews: any[]
  variantUser?: USER_STATUS
}

const ReviewsCompletedQuest = ({
  reviews,
  variantUser = USER_STATUS.SOLVER
}: Props) => (
  <div className={classes.articlesBlock}>
    {reviews.map((review, index) => (
      <div key={index} className={classes.articleBlock}>
        <div className={classes.avatarBlock}>
          <Image width={45} height={45} src={avatar} alt="avatar" />
          <div className={classes.ratingBlock}>
            <div className={classes.rating}>
              <Typography className={classes.subTitle} variant="h3">
                Stardust
              </Typography>
              <Typography
                className={classes.subTitle}
                variant="h3"
                weight="light"
                style={{ color: '#575758' }}
              >
                •&nbsp;
                {review.stardust}
                ago
              </Typography>
            </div>
            <div className={classes.rating}>
              <Typography className={classes.subTitle} variant="h3">
                Rating:
              </Typography>
              <Image
                alt="star-icon"
                src={variantUser === USER_STATUS.SOLVER ? goldStar : redStar}
              />
              <Typography
                className={classes.subTitle}
                color={
                  variantUser === USER_STATUS.SOLVER ? 'secondary' : 'primary'
                }
                weight="light"
                variant="h3"
              >
                {review.rating}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.feedBackBlock}>
          <Typography variant="h3" className={classes.feedBack}>
            {review.review}
          </Typography>
          <div className={classes.statusQuest}>
            <Typography variant="h3" className={classes.status} weight="light">
              {review.statusQuest}
            </Typography>
            <Image alt="image" width={157} height={101} src={season} />
          </div>
        </div>
        {index !== reviews.length - 1 && <div className={classes.line} />}
      </div>
    ))}
  </div>
)

export default ReviewsCompletedQuest
