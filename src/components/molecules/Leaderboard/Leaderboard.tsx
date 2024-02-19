import React, { FC, Fragment } from 'react'
import Typography from '@/components/atoms/Typography'
import Link from 'next/link'
import classes from './Leaderboard.module.sass'

type Props = {
  items: {
    username: string
    twitterHandle: string
    referredBy: {
      username: string
    }
    points: {
      total: number
    }
  }[]
}

const Leaderboard: FC<Props> = ({ items }) => (
  <div className={classes.leaderboardWrapper}>
    <div className={classes.header}>
      <Typography variant="bodyXL" weight="bold" color="secondary">
        #
      </Typography>
      <Typography variant="bodyXL" weight="bold" color="secondary">
        Username
      </Typography>
      <Typography variant="bodyXL" weight="bold" color="secondary">
        Invited by
      </Typography>
      <Typography variant="bodyXL" weight="bold" color="secondary">
        Points
      </Typography>
    </div>
    <div className={classes.content}>
      {items?.map(({
        username, twitterHandle, referredBy, points
      }, i) => (
        <Fragment key={i}>
          <div className={classes.item}>
            <Typography variant="bodyXL" weight="bold" color="secondary">
              {i + 1}
            </Typography>
            {twitterHandle ? (
              <Link href={`https://twitter.com/${twitterHandle}`}>
                <Typography
                  variant="bodyXL"
                  className={classes.textOverflow}
                  style={{ textDecoration: 'underline' }}
                >
                  @
                  {username}
                </Typography>
              </Link>
            ) : (
              <Typography variant="bodyXL" className={classes.textOverflow}>
                {username}
              </Typography>
            )}
            <Typography variant="bodyXL" className={classes.textOverflow}>
              {referredBy?.username ? `@${referredBy?.username}` : ''}
            </Typography>
            <Typography variant="bodyXL">
              <span className={classes.points}>{points?.total || '0'}</span>
              {' '}
              points
            </Typography>
          </div>
          <div className={classes.divider} />
        </Fragment>
      ))}
    </div>
  </div>
)

export default Leaderboard
