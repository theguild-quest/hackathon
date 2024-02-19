'use client'

import Typography from '@/components/atoms/Typography'
import React, { useEffect, useState } from 'react'
import FixedInput from '@/components/molecules/FixedInput'
import Leaderboard from '@/components/molecules/Leaderboard'
import SignUpsTable from '@/components/molecules/SignUpsTable'
import Image from 'next/image'
import guildPanel from '@/assets/pre-signup/guild_panel.png'
import guildGif from '@/assets/pre-signup/guild_gif.gif'
import guildLogo from '@/assets/logo_full.svg'
import guildLogoIcon from '@/assets/logo_icon.svg'
import cardsIcon from '@/assets/icons/cards.svg'
import errorIcon from '@/assets/icons/error.svg'
import starIcon from '@/assets/icons/starIcon.svg'
import crownIcon from '@/assets/icons/crownIcon.svg'
import LinkSignOut from '@/components/atoms/LinkSignOut'
import { getPreSignUpData } from '@/lib/graphql/queries/user'
import ConnectButton from '@/components/molecules/ConnectButton/ConnectButton'
import { useLazyQuery } from '@apollo/client'
import ConnectTwitter from '@/components/molecules/ConnectTwitter/ConnectTwitter'
import { auth } from '@/lib/firebase'
import { enqueueSnackbar } from 'notistack'
import Link from 'next/link'
import cx from 'classnames'
import { useRouter } from 'next/navigation'
import { signOut } from '@/lib/firebase/auth'
import classes from './page.module.sass'

const PreSignUp = () => {
  const [isLoading, setLoading] = useState(true)
  const [getData, { data: resp, loading, error }] = useLazyQuery(getPreSignUpData)
  const router = useRouter()
  const getTop100UsersByPoints = resp?.getTop100UsersByPoints
  const get5LatestSignups = resp?.get5LatestSignups
  const getNumberOfUsers = resp?.getNumberOfUsers
  const getSelf = resp?.getSelf

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log(error?.graphQLErrors)
    if (error) {
      signOut()
      router.replace('/login')
      enqueueSnackbar(
        'Something went wrong with getting account data. Try loggin in again or contact our support.',
        { variant: 'error' }
      )
    }
  }, [error])

  useEffect(() => {
    if (loading || !getSelf) {
      setLoading(true)
    }
    if (!loading && getSelf) {
      setLoading(false)
    }
  }, [auth.currentUser, loading])

  return (
    <main className={cx(classes.main, { [classes.loading]: isLoading })}>
      <div
        className={cx(classes.loadingWrapper, { [classes.loading]: isLoading })}
      />
      <Link href="/login">
        <Image
          src={guildLogo}
          alt="the-guild-logo"
          className={classes.guildLogo}
        />
      </Link>
      <Link href="/login">
        <Image
          src={guildLogoIcon}
          alt="the-guild-logo"
          className={classes.guildLogoIcon}
        />
      </Link>
      <Image
        src={guildPanel}
        alt="the-guild-panel"
        className={classes.guildPanel}
      />
      <Image
        src={guildGif}
        alt="the-guild-gif"
        className={cx(classes.guildGif, { [classes.loading]: isLoading })}
        quality={100}
      />
      <div className={classes.content}>
        <div className={classes.profileInfo}>
          <Typography variant="h1" weight="bold" color="secondary">
            Pre-Sign Up Profile
          </Typography>
          <div className={classes.userInfo}>
            <Typography variant="bodyXL" inherited>
              Username
            </Typography>
            <Typography variant="bodyXL">{getSelf?.username}</Typography>

            <div className={classes.divider} />

            <Typography variant="bodyXL" inherited>
              Email
            </Typography>
            <Typography variant="bodyXL">{getSelf?.email || '-'}</Typography>

            <div className={classes.divider} />
            <div className={classes.twitterProvider}>
              <Typography variant="bodyXL" inherited>
                Social Media
                {!getSelf?.twitterHandle && (
                  <span className={classes.required}>
                    * Connect your social media for 50 points!
                  </span>
                )}
              </Typography>
              <Typography
                variant="bodyXL"
                color={getSelf?.twitterHandle ? undefined : 'secondary'}
                className={classes.actionLink}
              >
                <ConnectTwitter
                  twitterHandle={getSelf?.twitterHandle as string}
                />
              </Typography>
              {auth?.currentUser?.photoURL && (
                <Image
                  src={auth?.currentUser?.photoURL}
                  alt="your twitter profile picture"
                  className={classes.twitPic}
                  width={38}
                  height={38}
                />
              )}
            </div>

            <div className={classes.divider} />

            <Typography variant="bodyXL" inherited>
              Wallet Address
              {!getSelf?.walletAddress && (
                <span className={classes.required}>
                  * Connect your wallet for 50 points!
                </span>
              )}
            </Typography>
            <Typography
              variant="bodyXL"
              inherited
              className={classes.actionLink}
            >
              <ConnectButton
                address={getSelf?.walletAddress as string}
                isLoading={isLoading}
              />
            </Typography>
          </div>
          <FixedInput
            onClick={() => {
              navigator.clipboard.writeText(
                `https://pre.theguild.quest/registration?ref=${getSelf?.referralCode}`
              )
              enqueueSnackbar('Copied!', {
                variant: 'success'
              })
            }}
            label={<Typography variant="bodyXL">My referral link</Typography>}
            content={(
              <Typography
                variant="bodyXL"
                color="primary"
                className={classes.refInput}
              >
                https://pre.theguild.quest/registration?ref=
                {getSelf?.referralCode}
              </Typography>
            )}
            icon={cardsIcon}
          />
          <div className={classes.refCountWrapper}>
            <Typography className={classes.refCountLabel}>
              My referrals
              {' '}
              <Image src={errorIcon} alt="error-icon" />
            </Typography>
            <div className={classes.refCount}>
              <div className={classes.directReferrals}>
                <Typography variant="bodyXL">Direct Referrals</Typography>
                <Typography variant="bodyXL" color="primary">
                  {getSelf?.points?.directReferrals}
                </Typography>
              </div>
              <div className={classes.divider} />
              <div className={classes.indirectReferrals}>
                <Typography variant="bodyXL">Indirect Referrals</Typography>
                <div className={classes.offset}>
                  <div className={classes.refLine}>
                    <Typography variant="bodyXL">
                      2nd Layer Referrals
                    </Typography>
                    <Typography
                      variant="bodyXL"
                      weight="bold"
                      color="secondary"
                    >
                      {getSelf?.points?.layer2Referrals}
                    </Typography>
                  </div>
                  <div className={classes.refLine}>
                    <Typography variant="bodyXL">
                      3rd Layer Referrals
                    </Typography>
                    <Typography
                      variant="bodyXL"
                      weight="bold"
                      color="secondary"
                    >
                      {getSelf?.points?.layer3Referrals}
                    </Typography>
                  </div>
                  <div className={classes.refLine}>
                    <Typography variant="bodyXL">
                      4th Layer Referrals
                    </Typography>
                    <Typography
                      variant="bodyXL"
                      weight="bold"
                      color="secondary"
                    >
                      {getSelf?.points?.layer4Referrals}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.points}>
          <div className={classes.pointsLine}>
            <FixedInput
              label={(
                <Typography
                  variant="h1"
                  color="secondary"
                  weight="bold"
                  className={classes.pointsLabel}
                >
                  My Points Earned
                </Typography>
              )}
              content={(
                <Typography variant="h1" color="primary" weight="bold">
                  {getSelf?.points?.total}
                </Typography>
              )}
              icon={starIcon}
            />
            <FixedInput
              label={(
                <Typography
                  variant="h1"
                  color="secondary"
                  weight="bold"
                  className={classes.pointsLabel}
                >
                  Pre-registered users
                </Typography>
              )}
              content={(
                <Typography variant="h1" color="primary" weight="bold">
                  {getNumberOfUsers}
                </Typography>
              )}
              icon={crownIcon}
            />
          </div>
          <div className={classes.leaderboardHeader}>
            <Typography variant="h1" weight="bold" color="secondary">
              Leaderboard
            </Typography>
            <Typography variant="bodyXL">Top 100 users</Typography>
          </div>
          {/* @ts-ignore */}
          <Leaderboard items={getTop100UsersByPoints} />
        </div>
        <div className={classes.signUps}>
          <Typography variant="h1" weight="bold" color="secondary">
            New sign ups
          </Typography>
          {/* @ts-ignore */}
          <SignUpsTable items={get5LatestSignups} />
        </div>
      </div>
      {/* <div className={classes.additionalInfoWrapper}>
        <div className={classes.policyLinks}>
          <Typography variant="bodyM" weight="light" color="pastel">
            Privacy Policy
          </Typography>
          <div className={classes.separator} />
          <Typography variant="bodyM" weight="light" color="pastel">
            Cookie Policy
          </Typography>
          <div className={classes.separator} />
          <Typography variant="bodyM" weight="light" color="pastel">
            Terms of Service
          </Typography>
        </div>
        <div className={classes.socialLinks}>
          <Typography variant="bodyM">THE GUILD. 2023</Typography>
          <div>
            <Link href="https://twitter.com/theguild_quest" target="_blank">
              <Image src={xIcon} alt="x-icon" />
            </Link>
            <Link href="https://t.me/+mDz5I79SLLBiZDc1">
              <Image src={telegramIcon} alt="telegram-icon" />
            </Link>
            <Link href="https://github.com/theguild-quest" target="_blank">
              <Image src={githubIcon} alt="github-icon" />
            </Link>
            <Link href="https://medium.com/@theguild_quest" target="_blank">
              <Image src={mediumIcon} alt="medium-icon" />
            </Link>
            <Link href="https://theguild.gitbook.io/untitled/" target="_blank">
              <Image src={gitbookIcon} alt="gitbookIcon-icon" />
            </Link>
          </div>
        </div>
      </div> */}
      <LinkSignOut className={classes.signOutLink} />
    </main>
  )
}

export default PreSignUp
