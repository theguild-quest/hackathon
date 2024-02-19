'use client'

import React, { useState } from 'react'
import logo from '@/assets/logo_full.svg'
import Image from 'next/image'
import NavLink from '@/components/atoms/NavLink'
import Link from 'next/link'
import UserProfileIcon from '@/components/atoms/UserProfileIcon/UserProfileIcon'
import Button from '@/components/atoms/Button'
import bellIcon from '@/assets/icons/bell.svg'
import servicesIcon from '@/assets/icons/services.svg'
import logoutIcon from '@/assets/icons/logout.svg'
import exploreIcon from '@/assets/icons/explore.svg'
import homeIcon from '@/assets/icons/home.svg'
import questsIcon from '@/assets/icons/quests.svg'
import chatIcon from '@/assets/icons/chat.svg'
import searchIcon from '@/assets/icons/search.svg'
import hamburgerIcon from '@/assets/icons/hamburger.svg'
import LinkSignOut from '@/components/atoms/LinkSignOut'
import Typography from '@/components/atoms/Typography'
import SocialLinks from '@/components/molecules/SocialLinks'
import PolicyLinks from '@/components/atoms/PolicyLinks'
import NavbarButton from '@/components/atoms/NavbarButton'
import { useQuery } from '@apollo/client'
import { getSelfUser } from '@/lib/graphql/queries/user'
import classes from './Navbar.module.sass'

export type NavRoutes = Array<{
  title: string
  to: string
  icon?: any
  notification?: boolean
}>

const routes: NavRoutes = [
  {
    title: 'HOME',
    to: '/home'
  },
  {
    title: 'QUESTS',
    to: '/quests'
  },
  {
    title: 'SERVICES',
    to: '/services'
  },
  {
    title: 'EXPLORE',
    to: '/explore'
  }
]

const mobileRoutes: NavRoutes = [
  {
    title: 'Home',
    icon: homeIcon,
    to: '/home',
    notification: false
  },
  {
    title: 'Quests',
    icon: questsIcon,
    to: '/quests',
    notification: false
  },
  {
    title: 'Services',
    icon: servicesIcon,
    to: '/services',
    notification: false
  },
  {
    title: 'Explore',
    icon: exploreIcon,
    to: '/explore',
    notification: false
  },
  {
    title: 'Notifications',
    icon: bellIcon,
    to: '/services',
    notification: true
  },
  {
    title: 'Log Out',
    icon: logoutIcon,
    to: '/explore',
    notification: false
  }
]

const Navbar = () => {
  const [isOverlayOpened, setIsOverlayOpened] = useState(false)
  const { data } = useQuery(getSelfUser)

  const toggleOverlay = () => {
    setIsOverlayOpened((prev) => !prev)
  }
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header className={classes.desktopNavbar}>
        <nav className={classes.links}>
          <Link href="/home">
            <Image
              className={classes.logo}
              alt="The Guild logo"
              src={logo}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
              quality={100}
            />
          </Link>
          {routes.map(({ title, to }) => (
            <NavLink variant="h3" href={to} key={title}>
              {title}
            </NavLink>
          ))}
        </nav>
        <div className={classes.userNavigation}>
          {/* <SearchInput/> */}
          <Button iconButton startIcon={bellIcon} notification />
          <Button iconButton startIcon={chatIcon} notification />
          <LinkSignOut />
          <Link
            href={
              !!data?.getSelf?.nftId ? '/profile/feed' : '/profile/completion'
            }
          >
            <UserProfileIcon
              profilePicture={data?.getSelf?.profileImage}
              size="big"
            />
          </Link>
        </div>
      </header>
      {/* MOBILE NAVBAR */}
      <header className={classes.mobileNavbar}>
        <div className={classes.headerStatic}>
          <NavbarButton
            startIcon={hamburgerIcon}
            menu
            notification
            onClick={toggleOverlay}
          />
          <Link href="/home">
            <Image
              className={classes.logo}
              alt="The Guild logo"
              src={logo}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
              quality={100}
            />
          </Link>
          <div className={classes.searchIcon}>
            <Image alt="search-icon" src={searchIcon} />
          </div>
        </div>
        <div className={classes.overlay} aria-hidden={!isOverlayOpened}>
          <div className={classes.overlayContent}>
            <div className={classes.userInfoContainer}>
              <div className={classes.userInfo}>
                <UserProfileIcon
                  profilePicture={data?.getSelf?.profileImage}
                  size="big"
                />
                <div className={classes.userInfoDetails}>
                  <Typography className={classes.username}>
                    {data?.getSelf?.displayName || data?.getSelf?.username}
                  </Typography>
                  <Typography className={classes.userTag}>
                    <span>@{data?.getSelf?.username}</span>
                  </Typography>
                </div>
              </div>
              <Link href="/profile/completion">
                <Button variant="bodyXL" type="submit">
                  View Profile
                </Button>
              </Link>
            </div>

            <div className={classes.mobileList}>
              {mobileRoutes.map(({ title, to, icon, notification }) => (
                <NavbarButton
                  key={title}
                  startIcon={icon}
                  notification={notification}
                  menu
                  href={to}
                  className={classes.mobileListText}
                  onClick={toggleOverlay}
                >
                  {title}
                </NavbarButton>
              ))}
            </div>

            <div className={classes.additionalInfoWrapper}>
              <Typography variant="bodyL">THE GUILD. 2023</Typography>
              <SocialLinks />
              <PolicyLinks />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
