import React, { FC, Fragment } from 'react'
import Typography from '@/components/atoms/Typography'
import Link from 'next/link'
import { calculateJoinTime } from '@/utils/helpers/calculateTimeDifference'
import cx from 'classnames'
import classes from './SignUpsTable.module.sass'

type Props = {
  items: {
    username: string
    twitterHandle: string
    createdAt: string
    referredBy: {
      username: string
    }
  }[]
}

const SignUpsTable: FC<Props> = ({ items }) => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Typography variant="bodyXL" weight="bold" color="secondary">
          Username
        </Typography>
        <Typography variant="bodyXL" weight="bold" color="secondary">
          Invited by
        </Typography>
      </div>
      <div className={classes.content}>
        {items?.map(({
          username, twitterHandle, referredBy, createdAt
        }, i) => (
          <Fragment key={i}>
            <div className={classes.item}>
              <div className={classes.mobileHeader}>
                <Typography className={classes.mobileTitle} variant="bodyL">
                  Username:
                </Typography>
                {twitterHandle ? (
                  <Link href={`https://twitter.com/${twitterHandle}`}>
                    <Typography
                      variant="bodyL"
                      style={{ textDecoration: 'underline' }}
                      className={classes.textOverflow}
                    >
                      @
                      {username}
                    </Typography>
                  </Link>
                ) : (
                  <Typography
                    variant="bodyL"
                    className={classes.textOverflow}
                  >
                    {username}
                  </Typography>
                )}
                <Typography
                  variant="bodyL"
                  color="pastel"
                  weight="light"
                  className={cx(classes.textOverflow, classes.desktopText)}
                >
                  {calculateJoinTime(createdAt, userTimezone)}
                </Typography>
              </div>
              <div className={classes.mobileHeader}>
                <Typography className={classes.mobileTitle} variant="bodyL">
                  Invited by:
                </Typography>
                <Typography variant="bodyL" className={classes.textOverflow}>
                  {referredBy?.username}
                </Typography>
              </div>
              <div className={cx(classes.mobileHeader, classes.mobileEmpty)}>
                <Typography
                  className={classes.mobileTitle}
                  variant="bodyL"
                  color="pastel"
                >
                  Joined:
                </Typography>
                <Typography
                  variant="bodyL"
                  color="pastel"
                  weight="light"
                  className={cx(classes.textOverflow, classes.mobileText)}
                >
                  {calculateJoinTime(createdAt, userTimezone)}
                </Typography>
              </div>
              {/* calculateJoinTime */}
            </div>
            <div className={classes.divider} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default SignUpsTable
