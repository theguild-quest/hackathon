import React, { FC, ReactNode } from 'react'
import classes from './layout.module.sass'
import Tabs from '@/components/organisms/Tabs'
import { NavRoutes } from '@/components/organisms/Navbar/Navbar'
import SpotlightFeatured from '@/components/organisms/SpotlightFeatured'
import LeaderboardGuild from '@/components/organisms/LeaderboardGuild'
import Typography from '@/components/atoms/Typography'
import SocialLinks from '@/components/molecules/SocialLinks'
import PolicyLinks from '@/components/atoms/PolicyLinks'

type Props = {
  children: ReactNode
}

const TabRoutes: NavRoutes = [
  {
    title: 'All',
    to: '/home'
  },
  {
    title: 'Following',
    to: '/home/following'
  },
  {
    title: 'Trending',
    to: '/home/trending'
  }
]

const HomeLayout: FC<Props> = ({ children }) => (
  <main>
    <div className={classes.tabsWrapper}>
      <Tabs routes={TabRoutes} />
    </div>
    <div className={classes.content}>
      <aside className={classes.sidebar}>
        <SpotlightFeatured />
        <div className={classes.additionalInfoWrapper}>
          <Typography variant="bodyL">THE GUILD. 2023</Typography>
          <SocialLinks />
          <PolicyLinks />
        </div>
      </aside>
      {children}
      <aside className={classes.sidebar}>
        <LeaderboardGuild />
      </aside>
    </div>
  </main>
)

export default HomeLayout
