'use client'

import ProfileButton from '@/components/atoms/ProfileButton'
import React, { FC, useEffect, useState } from 'react'
import cx from 'classnames'
import {
  ZkMeWidget,
  type Provider,
  verifyWithZkMeServices
  // @ts-ignore
} from '@zkmelabs/widget'
import { enqueueSnackbar } from 'notistack'
import classes from './ZkMeVerification.module.sass'

type Props = {
  setVerified: (value: boolean) => void
  zkMeVerified: boolean
  userAccounts: string // USER EMAIL
}

// !!!
// !!! IMPORTANT FOR NOW WE CAN SAY THAT PERSON IS VERIFIED ONLY WHEN TRIGGERS FINISHED IN ZKME WIDGET
// !!! BEST PRACTICE WOULD BE TO CALL VERIFICATION AGAIN TO STATE THIS PERMANENTLY WITHOUT ANY ISSUES BUT THAT ISSUE IS ON ZKME SIDE
// !!! SO FOR NOW I'M COMMENTING EVERY VERIFICATION THROUGH verifyWithZkMeServices AND HOPE FOR QUICK RESPONSE FROM THEM REGARDING THE ISSUE
// !!!

const ZkMeVerification: FC<Props> = ({
  setVerified,
  zkMeVerified,
  userAccounts
}) => {
  const [zkMeVerificationLoading, setZkMeVerificationLoading] = useState(false)

  //
  // SCRIPT TO VERIFY USER WHEN ENTERING THE PAGE
  //
  const handleInitialVerification = async () => {
    const result = await verifyWithZkMeServices(
      process.env.NEXT_PUBLIC_ZK_ME_APP_ID,
      // 'M2024011194706111512984841300246',
      userAccounts,
      'Anti-Sybil'
    )

    if (result) {
      setVerified(true)
      setZkMeVerificationLoading(false)
    }
  }

  //
  // INITIAL ZKME VERIFICATION ON ENTERING THE PAGE
  //
  useEffect(() => {
    if (userAccounts && !zkMeVerified) handleInitialVerification()
  }, [userAccounts])

  //
  // TRIGGER TO START POST-WIDGET VERIFICATION
  //
  const zkMeListener = async (event: any) => {
    if (event.data.event === 'finished') {
      enqueueSnackbar('ZkKYC/MeID verification has been completed!', {
        variant: 'success'
      })
      setVerified(true)
      setZkMeVerificationLoading(true)
    }
  }

  //
  // SETTING TRIGGER FOR POST-WIDGET VERIFICATION
  //
  useEffect(() => {
    window.addEventListener('message', zkMeListener)

    return () => {
      window.removeEventListener('message', zkMeListener)
    }
  }, [])

  // ZKME VERIFICATION AFTER COMPLETEING WIDGET
  useEffect(() => {
    if (zkMeVerificationLoading) handleVerificationFinish()
  }, [zkMeVerificationLoading])

  const handleVerificationFinish = async () => {
    try {
      const result = await verifyWithZkMeServices(
        process.env.NEXT_PUBLIC_ZK_ME_APP_ID,
        // 'M2024011194706111512984841300246',
        userAccounts,
        'Anti-Sybil'
      )

      if (result) {
        enqueueSnackbar('ZkKYC/MeID verification has been completed!', {
          variant: 'success'
        })
        setZkMeVerificationLoading(false)
        setVerified(true)
      } else {
        console.log(result)
        enqueueSnackbar('Something went wrong!', { variant: 'error' })
      }
    } catch (err) {
      console.error(err)
      enqueueSnackbar('Something went wrong!', { variant: 'error' })
    }
  }

  const provider: Provider = {
    async getAccessToken() {
      const resp = await fetch('https://nest-api.zk.me/api/token/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apiKey: process.env.NEXT_PUBLIC_ZK_ME_API_KEY,
          // '2d2a9c73.d2795a676ce51a818279f846f2cc73c3'
          appId: process.env.NEXT_PUBLIC_ZK_ME_APP_ID,
          // 'M2024011194706111512984841300246',
          apiModePermission: 0,
          lv: 2
        })
      })
      const json = await resp.json()
      return json?.data?.accessToken
    },

    async getUserAccounts() {
      if (userAccounts) {
        return [userAccounts]
      }
      enqueueSnackbar(
        'Something went wrong, please refresh the page and try again.',
        { variant: 'error' }
      )
      return null
    }
  }

  const zkMeWidget = new ZkMeWidget(
    process.env.NEXT_PUBLIC_ZK_ME_APP_ID, // This parameter means the same thing as "mchNo"
    // 'M2024011194706111512984841300246',
    'TheGuild',
    0x13881,
    provider,
    { lv: 'Anti-Sybil' }
  )

  async function verify() {
    zkMeWidget.launch()
  }

  return (
    <>
      <ProfileButton
        className={cx(classes.actionButton, {
          [classes.verifiedButton]: zkMeVerified
        })}
        onClick={verify}
        color="dark"
        size="big"
        weight="semibold"
        variantButton="secondary"
        variant="bodyL"
      >
        {zkMeVerified ? 'Verified' : 'Verify'}
      </ProfileButton>
    </>
  )
}

export default ZkMeVerification
