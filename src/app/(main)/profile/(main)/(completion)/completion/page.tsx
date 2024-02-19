'use client'

import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import '@particle-network/connect-react-ui/dist/index.css'
import { ConnectButton } from '@particle-network/connect-react-ui' // @particle-network/connectkit to use Auth Core
import Image from 'next/image'
import Typography from '@/components/atoms/Typography'
import {
  useApolloClient,
  useMutation,
  useQuery,
  useSuspenseQuery
} from '@apollo/client'
import image from '@/assets/image.svg'
import { CreateWallet } from '@/lib/graphql/mutations/profile'
import cx from 'classnames'

import '@zkmelabs/widget/dist/style.css'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useDisconnect } from 'wagmi'
import { enqueueSnackbar } from 'notistack'
import { CompleteProfile } from '@/lib/graphql/mutations/user'
import { useRouter } from 'next/navigation'
import { getSelfProfile } from '@/lib/graphql/queries/user'
import ProfileButton from '@/components/atoms/ProfileButton'
import ZkMeVerification from '@/components/templates/ZkMeVerification/ZkMeVerification'
import classes from './page.module.sass'
import loadingGif from '@/assets/pre-signup/guild_gif.gif'
import { useAccount } from '@particle-network/connect-react-ui'
import { ProfileQueriesForRefetch } from '@/utils/constants'

//use this in react component.
/* Profile flow
   1. Verify with zkMe.(have to pass the correct email)
   2. Connect wallet(getting the address) or create MetaKeep wallet
   3. Send complete profile mutation to the BE. If the user's using his own wallet(not MetaKeep) send the wallet address in the mutation.
*/

const ProfileCompletionPage = () => {
  const router = useRouter()
  const client = useApolloClient()
  const [createMetaKeepWallet] = useMutation(CreateWallet)
  const [completeProfile] = useMutation(CompleteProfile)
  const [completeLoading, setCompleteLoading] = useState(false)
  const { data, loading: selfLoading, error } = useQuery(getSelfProfile)
  const account = useAccount()
  console.log(account)

  if (!selfLoading && data?.getSelf?.nftId!!) {
    router.replace('/profile/feed')
  }

  const fileInputRef = useRef<HTMLInputElement>(null)

  const [zkMeVerified, setZkMeVerified] = useState(false)
  const [connected, setConnected] = useState(false)
  const [preview, setPreview] = useState<string>('')
  const [profileNFT, setProfileNFT] = useState<File | null>(null)

  const handleUploadMedia = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && e.target.validity.valid) {
      setPreview(URL.createObjectURL(selectedFile))
      setProfileNFT(selectedFile)
    }
  }

  const handleCompleteProfile = async () => {
    try {
      setCompleteLoading(true)
      const response = await completeProfile({
        variables: {
          walletAddress: account || '',
          profileImageFile: profileNFT || ''
        }
      })
      console.log(response.data)
      enqueueSnackbar('Profile was completed successfully', {
        variant: 'success'
      })
      await client.refetchQueries({ include: ProfileQueriesForRefetch })
      setCompleteLoading(false)
      router.replace('/profile/feed')
    } catch (err) {
      console.log(err)
      enqueueSnackbar('Something went wrong!', {
        variant: 'error'
      })
      setCompleteLoading(false)
    }
    setCompleteLoading(false)
  }

  return (
    <>
      {data?.getSelf?.nftId && selfLoading ? (
        <div className={classes.loadingContainer}>
          <Image src={loadingGif} alt="loading-gif" />
        </div>
      ) : (
        <div className={classes.completeContainer}>
          <Typography variant="h1" weight="bold" className={classes.title}>
            Complete your profile
          </Typography>
          <div className={classes.completeBlock}>
            <div className={cx(classes.complete)}>
              <Typography variant="h1" className={classes.completeTitle}>
                Step 1 - Create your wallet with Particle Auth
              </Typography>
              <Typography className={classes.completeSubTitle} variant="h3">
                {connected
                  ? 'You have successfully connected your own wallet!'
                  : 'Click here if you want to connect your own wallet'}
              </Typography>
              <div className={classes.buttonsBlock}>
                <>
                  <ConnectButton />
                </>
              </div>
            </div>
            <div
              className={cx(classes.nftBlock, {
                [classes.blockedStep]: !account
              })}
            >
              <Typography variant="h1" className={classes.completeTitle}>
                Step 2 - Mint your Profile NFT
              </Typography>
              <Typography className={classes.completeSubTitle} variant="h3">
                Uploading media is optional. If you decide not to upload any
                media, your Profile NFT will be minted along with a default
                image. You can change the image later.
              </Typography>
              <div className={classes.imageBlock}>
                <div className={classes.image}>
                  <Image
                    alt="image"
                    className={preview && classes.previewImage}
                    src={preview || image}
                    width={preview ? 308 : undefined}
                    height={preview ? 352 : undefined}
                  />
                </div>
                <button className={classes.uploadMediaButton}>
                  <input
                    type="file"
                    id="attachments"
                    name="attachments"
                    ref={fileInputRef}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <Typography
                    color="pastel"
                    inherited
                    variant="bodyL"
                    onClick={handleUploadMedia}
                  >
                    Upload Media
                  </Typography>
                </button>
              </div>
            </div>
            <ProfileButton
              color="dark"
              variantButton="secondary"
              className={classes.completeButton}
              weight="semibold"
              disabled={!account}
              size="big"
              variant="bodyL"
              onClick={handleCompleteProfile}
            >
              Complete
            </ProfileButton>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileCompletionPage
