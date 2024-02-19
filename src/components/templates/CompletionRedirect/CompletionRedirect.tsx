'use client'

import { getSelfCompletionCheck } from '@/lib/graphql/queries/user'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/navigation'
import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const CompletionRedirect: FC<Props> = ({ children }) => {
  const router = useRouter()
  const { data, loading: selfLoading, error } = useQuery(getSelfCompletionCheck)

  if (!selfLoading && data?.getSelf?.nftId!!) {
    router.replace('/profile/feed')
  }

  return <>{children}</>
}

export default CompletionRedirect
