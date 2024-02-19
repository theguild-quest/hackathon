'use client'

import { TwitterAuthProvider, linkWithPopup, User } from 'firebase/auth'
import { useApolloClient, useMutation } from '@apollo/client'
import { auth } from '@/lib/firebase'
import { LinkProvider } from '@/lib/graphql/mutations/user'
import { enqueueSnackbar } from 'notistack'
import Link from 'next/link'
import { parseErrorByCode } from '@/utils/helpers/errorParse'

type Props = {
  twitterHandle?: string
}

const ConnectTwitter = ({ twitterHandle }: Props) => {
  const [link] = useMutation(LinkProvider)
  const client = useApolloClient()

  const signInWithTwitter = async () => {
    const provider = new TwitterAuthProvider()
    try {
      const response = await linkWithPopup(auth.currentUser as User, provider)

      //@ts-ignore
      return response.user.reloadUserInfo.providerUserInfo.find(
        (info: { providerId: string }) => info.providerId === 'twitter.com'
      ).screenName
    } catch (error: any) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        enqueueSnackbar(
          'Twitter account already in use. Try logging in or connect our support.',
          { variant: 'error' }
        )
      } else if (error.code === 'auth/credential-already-in-use') {
        enqueueSnackbar(
          'This twitter account seems to be already linked to a different account',
          { variant: 'error' }
        )
      } else {
        enqueueSnackbar(parseErrorByCode(), {
          variant: 'error'
        })
      }
      console.error({ error })
    }
  }

  async function handleConnect() {
    try {
      const handle = await signInWithTwitter()

      await link({ variables: { twitterHandle: handle } })

      await client.refetchQueries({
        include: ['GetPreSignUpData']
      })

      enqueueSnackbar('X was succesfully linked!', { variant: 'success' })
    } catch (err) {
      console.error(err)
      enqueueSnackbar(parseErrorByCode(), { variant: 'error' })
    }
  }

  return twitterHandle ? (
    <Link href={`https://twitter.com/${twitterHandle}`}>
      <span>
        @
        {twitterHandle}
      </span>
    </Link>
  ) : (
    <span onClick={handleConnect}>Connect X</span>
  )
}

export default ConnectTwitter
