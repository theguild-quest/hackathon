'use client'

import React from 'react'
import Typography from '@/components/atoms/Typography'
import language from '@/assets/language.svg'
import Image from 'next/image'
import goldStar from '@/assets/goldStar.svg'
import ReviewsDefaultState from '@/components/atoms/ReviewsDefaultState'
import ReviewsCompletedQuest from '@/components/molecules/ReviewsCompletedQuest'
import classes from './page.module.sass'
import { getSelfSolver } from '@/lib/graphql/queries/user'
import { useQuery } from '@apollo/client'
import Loading from '@/app/loading'

const ProfileQuestSolver = async () => {
  const { data, loading, error } = useQuery(getSelfSolver)

  return (
    <div className={classes.solverBlock}>
      <div className={classes.textBlock}>
        <Typography
          variant="h1"
          color="secondary"
          className={classes.title}
          weight="bold"
        >
          Current Availability
        </Typography>
        {data?.getSelfSolver?.currentAvailability ? (
          <Typography className={classes.subTitle} variant="h3">
            Available to Work • ${0} quest(s) in queue
          </Typography>
        ) : (
          <Typography className={classes.subTitle} variant="h3">
            Available to Work • 0 quest(s) in queue
          </Typography>
        )}
      </div>
      <div className={classes.textBlock}>
        <Typography
          variant="h1"
          className={classes.title}
          color="secondary"
          weight="bold"
        >
          About Solver
        </Typography>

        <Typography className={classes.subTitle} variant="h3">
          {data?.getSelfSolver?.about ||
            'You haven’t written the About page yet'}
        </Typography>
      </div>
      <div className={classes.textBlock}>
        <Typography
          className={classes.title}
          variant="h1"
          color="secondary"
          weight="bold"
        >
          Skills:
        </Typography>
        {data?.getSelfSolver?.skills &&
        data?.getSelfSolver?.skills?.length > 0 ? (
          <Typography className={classes.subTitle} variant="h3">
            {data?.getSelfSolver?.skills.map((skill, i) =>
              i === 0 ? skill : ` •  ${skill}`
            )}
          </Typography>
        ) : (
          <Typography className={classes.subTitle} variant="h3">
            You haven’t posted any services yet
          </Typography>
        )}
      </div>
      <div className={classes.textBlock}>
        <Typography
          variant="h1"
          color="secondary"
          weight="bold"
          className={classes.title}
        >
          Portfolio
        </Typography>
        <div className={classes.portfolioLinkBlock}>
          {data?.getSelfSolver?.portfolioLinks &&
          data?.getSelfSolver?.portfolioLinks?.length > 0 ? (
            data?.getSelfSolver?.portfolioLinks.map((p, i) => (
              <div key={`${p} ${i}`} className={classes.portfolioLink}>
                <Image alt="language" src={language} />
                <Typography className={classes.subTitle} variant="h3">
                  {p}
                </Typography>
              </div>
            ))
          ) : (
            <Typography variant="h3">
              You haven’t added any portfolio link yet
            </Typography>
          )}
        </div>
      </div>
      <div className={classes.textBlock}>
        <div className={classes.titleReviewBlock}>
          <Typography
            variant="h1"
            color="secondary"
            className={classes.title}
            weight="bold"
          >
            Reviews on Completed Quests
          </Typography>
          <div className={classes.reviewBlock}>
            <Typography
              className={classes.subTitle}
              color="secondary"
              weight="light"
              variant="h3"
            >
              {[].length} reviews
              {/* {data?.reviews?.length} reviews */}
            </Typography>
            <Image alt="star-icon" src={goldStar} />
            <Typography
              className={classes.subTitle}
              color="secondary"
              weight="light"
              variant="h3"
            >
              5/5
            </Typography>
          </div>
        </div>
        {[].length > 0 ? (
          <ReviewsCompletedQuest reviews={[]} />
        ) : (
          <ReviewsDefaultState />
        )}
        {/* {data?.reviews?.length > 0 ? (
          <ReviewsCompletedQuest reviews={data.reviews} />
        ) : (
          <ReviewsDefaultState />
        )} */}
      </div>
    </div>
  )
}

export default ProfileQuestSolver
