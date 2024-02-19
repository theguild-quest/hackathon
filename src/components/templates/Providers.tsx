'use client'

import { ApolloWrapper } from '@/lib/graphql/ApolloWrapper'
import React, { FC, ReactNode } from 'react'
import { SnackbarProvider } from 'notistack'
import Authorization from './Authorization'
import WalletProvider from './WalletProvider'

type Props = {
  children: ReactNode
}

const Providers: FC<Props> = ({ children }) => (
  <ApolloWrapper>
    <Authorization>
      <SnackbarProvider>{children}</SnackbarProvider>
    </Authorization>
  </ApolloWrapper>
)

export default Providers
