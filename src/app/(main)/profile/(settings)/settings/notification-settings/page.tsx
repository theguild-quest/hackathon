'use client'

import React, { ChangeEvent, useEffect, useState } from 'react'
import arrowDownIcon from '@/assets/arrow-down.svg'
import chevronRightIcon from '@/assets/chevron-right.svg'
import Toggle from '@/components/atoms/Toggle'
import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import Link from 'next/link'
import loadingGif from '@/assets/pre-signup/guild_gif.gif'
import { useMutation, useQuery } from '@apollo/client'
import { enqueueSnackbar } from 'notistack'
import { getNotificationSettings } from '@/lib/graphql/queries/profile'
import { editNotificationSettings } from '@/lib/graphql/mutations/profile'
import classes from './page.module.sass'

type NotificationSettingsData = {
  [key: string]: {
    [key: string]: boolean
  }
}

const settingList = [
  {
    link: '/profile/settings/notification-settings/app-notifications',
    title: 'App Notifications'
  },
  {
    link: '/profile/settings/notification-settings/email-notifications',
    title: 'Email notifications'
  }
]

const socialNotifications = [
  {
    id: 'comments',
    notification: 'Comments'
  },
  {
    id: 'reposts',
    notification: 'Reposts'
  },
  {
    id: 'mentions',
    notification: 'Mentions'
  },
  {
    id: 'likes',
    notification: 'Likes'
  },
  {
    id: 'newFollowers',
    notification: 'New followers'
  },
  {
    id: 'directMessages',
    notification: 'Direct Messages'
  },
  {
    id: 'messageRequests',
    notification: 'Message Requests'
  }
]

const jobNotifications = [
  {
    id: 'directMessages',
    notification: 'Direct Messages'
  },
  {
    id: 'jobProposals',
    notification: 'Job Proposals'
  },
  {
    id: 'jobStatusUpdates',
    notification: 'Job Status Updates'
  },
  {
    id: 'newReviews',
    notification: 'New Reviews'
  },
  {
    id: 'newJobPostings',
    notification: 'New Job Postings'
  },
  {
    id: 'xpGained',
    notification: 'XP Gained'
  },
  {
    id: 'levelUpPlatformLevel',
    notification: 'Level Up (Platform level)'
  },
  {
    id: 'levelUpReferralNftTier',
    notification: 'Level Up (Referral NFT Tier)'
  }
]

const ProfileNotifationsInformation = () => {
  const { data: res, loading, error } = useQuery(getNotificationSettings)

  const [notificationSettingsData, setNotificationSettingsData] =
    useState<NotificationSettingsData>({
      jobEmailSettings: {},
      socialAppSettings: {},
      socialEmailSettings: {}
    })

  useEffect(() => {
    if (res && res.getNotificationSettings) {
      const {
        jobEmailNotifications,
        socialAppNotifications,
        socialEmailNotifications
      } = res.getNotificationSettings

      setNotificationSettingsData({
        // @ts-ignore
        jobEmailSettings: jobEmailNotifications!,
        // @ts-ignore
        socialAppSettings: socialAppNotifications!,
        // @ts-ignore
        socialEmailSettings: socialEmailNotifications!
      })
    }
  }, [res])

  const [editNotifSettings] = useMutation(editNotificationSettings)

  const handleToggleChange = async (
    type: 'socialAppSettings' | 'socialEmailSettings' | 'jobEmailSettings',
    key: string,
    checked: boolean | ChangeEvent<HTMLInputElement>
  ) => {
    const prevState = notificationSettingsData
    prevState[type] = {
      ...(prevState[type] as any),
      [key]: checked
    }
    setNotificationSettingsData({ ...prevState })

    const notifReq = {
      [type]: {
        [key]: checked
      }
    }

    try {
      const response = await editNotifSettings({
        variables: notifReq
      })
      enqueueSnackbar('Notification settings updated successfully!', {
        variant: 'success'
      })
      console.log('Response', response)
    } catch (error) {
      console.error('Error updating notification settings:', error)
      enqueueSnackbar(
        'Failed to update notification settings. Please try again.',
        {
          variant: 'error'
        }
      )
    }
  }

  return (
    <div className={classes.notificationSettingsContainer}>
      {loading ? (
        <div className={classes.loadingContainer}>
          <Image src={loadingGif} alt="loading-gif" />
        </div>
      ) : (
        <div className={classes.notificationContainer}>
          <div className={classes.content}>
            <div className={classes.arrowBlock}>
              <Link href="/profile/settings">
                <Image
                  className={classes.arrowBack}
                  src={arrowDownIcon}
                  alt="arrow-back"
                />
              </Link>
              <Typography
                style={{ marginLeft: '20%' }}
                weight="medium"
                variant="bodyL"
              >
                Notification Settings
              </Typography>
            </div>
            <div className={classes.LinkBlock}>
              {settingList.map((s, index) => (
                <Link
                  key={s.link}
                  style={{
                    border: index === settingList.length - 1 ? 'none' : ''
                  }}
                  className={classes.link}
                  href={s.link}
                >
                  <Typography variant="bodyL">{s.title}</Typography>
                  <Image
                    className={classes.icon}
                    src={chevronRightIcon}
                    width={29}
                    height={20}
                    alt="right"
                  />
                </Link>
              ))}
            </div>
          </div>
          <table className={classes.socialNotificationsTable}>
            <colgroup>
              <col style={{ width: '60%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <Typography color="primary" weight="semibold" variant="bodyL">
                    Social Notifications
                  </Typography>
                </th>
                <th>
                  <Typography weight="semibold" variant="bodyL">
                    App Notifications
                  </Typography>
                </th>
                <th>
                  <Typography weight="semibold" variant="bodyL">
                    Email notifications
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {socialNotifications.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Typography weight="light" variant="bodyL">
                      {item.notification}
                    </Typography>
                  </td>
                  <td>
                    <Toggle
                      aria-label="toggle"
                      onChange={(checked) => {
                        handleToggleChange(
                          'socialAppSettings',
                          item.id,
                          checked
                        )
                      }}
                      checked={
                        notificationSettingsData.socialAppSettings[item.id]
                      }
                    />
                  </td>
                  <td>
                    <Toggle
                      aria-label="toggle"
                      onChange={(checked) => {
                        handleToggleChange(
                          'socialEmailSettings',
                          item.id,
                          checked
                        )
                      }}
                      checked={
                        notificationSettingsData.socialEmailSettings[item.id]
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className={classes.jobNotificationsTable}>
            <colgroup>
              <col style={{ width: '80%' }} />
              <col style={{ width: '20%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <Typography color="primary" weight="semibold" variant="bodyL">
                    Job Notifications
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {jobNotifications.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Typography weight="light" variant="bodyL">
                      {item.notification}
                    </Typography>
                  </td>
                  <td>
                    <Toggle
                      aria-label="toggle"
                      onChange={(checked) => {
                        handleToggleChange('jobEmailSettings', item.id, checked)
                      }}
                      checked={
                        notificationSettingsData.jobEmailSettings[item.id]
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ProfileNotifationsInformation
