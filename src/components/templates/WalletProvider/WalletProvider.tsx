'use client'

import React, { FC, ReactNode } from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme
} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
)
const { connectors } = getDefaultWallets({
  appName: 'The MyRefferalLinkCard',
  chains,
  projectId: process.env.NEXT_PUBLIC_RAINBOW_KIT_PROJECT_ID as string
  // 'ba1f2d04e2caa0de3c48dadc27430841'
})

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
})

const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <WagmiConfig config={config}>
    <RainbowKitProvider
      chains={chains}
      appInfo={{ appName: 'Demo' }}
      theme={midnightTheme()}
    >
      {children}
    </RainbowKitProvider>
  </WagmiConfig>
)

export default Providers
