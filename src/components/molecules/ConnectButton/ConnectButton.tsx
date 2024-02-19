'use client'

import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit'
import { useEffect } from 'react'
import { useDisconnect, useAccount } from 'wagmi'
import { useApolloClient, useMutation } from '@apollo/client'
import { EditProfile } from '@/lib/graphql/mutations/user'
import { enqueueSnackbar } from 'notistack'
import { parseErrorByCode } from '@/utils/helpers/errorParse'
import classes from './ConnectButton.module.sass'

type Props = {
  address?: string
  isLoading: boolean
}

const ConnectButton = ({ address, isLoading }: Props) => {
  const client = useApolloClient()
  const { openConnectModal } = useConnectModal()
  const { disconnect } = useDisconnect()
  const { address: walletAddress } = useAccount()
  const [editProfile] = useMutation(EditProfile)

  async function edit() {
    try {
      await editProfile({
        variables: {
          walletAddress: walletAddress || ''
        }
      })
      await client.refetchQueries({
        include: ['GetPreSignUpData']
      })
      enqueueSnackbar('Wallet Connected Successfully!.', { variant: 'success' })
    } catch (err: any) {
      console.log(err)
      enqueueSnackbar(parseErrorByCode(err.code), { variant: 'error' })
    }
  }

  useEffect(() => {
    if (!isLoading && !address && walletAddress && walletAddress.length) {
      edit()
    }
  }, [walletAddress])

  function handleConnectClick() {
    disconnect()
    openConnectModal && openConnectModal()
  }

  return address ? (
    <span className={classes.walletAddress}>{address}</span>
  ) : (
    <span onClick={handleConnectClick}>Connect Wallet</span>
  )
}

export default ConnectButton
