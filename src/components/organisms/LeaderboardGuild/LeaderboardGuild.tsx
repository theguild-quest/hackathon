import React from 'react'
import Typography from '@/components/atoms/Typography'
// import spotlightTestImage from '@/assets/spotlightTest.jpeg'
// import featuredTestImage from '@/assets/featuredTest.png'
import Image from 'next/image'
import BlankBlock from '@/components/atoms/BlankBlock'
import Link from 'next/link'
import classes from './LeaderboardGuild.module.sass'

// TBD: Pretty shitty component need to be refactored when guilds and leaderboards are introduced
const LeaderboardGuild = () => {
  const scheme = [
    {
      title: 'LEADERBOARD',
      blank: true,
      link: '/leaderboard'
    },
    {
      title: 'GUILDS',
      blank: true,
      link: '/guilds'
    }
  ]

  return scheme.map(({ title, blank }) => (
    <div className={classes.contentBlock}>
      <div className={classes.titleBlock}>
        <Typography className={classes.title} variant="bodyL">
          {title}
        </Typography>
        <Link href="/leaderboard" className={classes.link}>
          <Typography variant="bodyM" color="grey" inherited>
            View All
          </Typography>
        </Link>
      </div>
      <div className={classes.content}>
        {blank ? (
          <BlankBlock />
        ) : (
          <></>
        // Not in v1
        )}
      </div>
    </div>
  ))
}

export default LeaderboardGuild
