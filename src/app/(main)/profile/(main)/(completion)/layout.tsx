'use client'

import { FC, ReactNode } from 'react'
import { ModalProvider } from '@particle-network/connect-react-ui' // @particle-network/connectkit to use Auth Core
import { WalletEntryPosition } from '@particle-network/auth'
import { Avalanche, AvalancheTestnet } from '@particle-network/chains'
import CompletionRedirect from '@/components/templates/CompletionRedirect'
import { evmWallets } from '@particle-network/connect'

type Props = {
  children: ReactNode
}

const ProfileCompletionLayout: FC<Props> = async ({ children }) => (
  <CompletionRedirect>
    <ModalProvider
      options={{
        projectId: '23eac37c-20dd-4553-8030-10ab34b09e95',
        clientKey: 'cBGsCE1T8Tiv4I91HCGhKl1nYgxPiDEi8ZHwDcQn',
        appId: '0b8b9300-cbd4-450a-8c9a-8ee022709cc8',
        chains: [Avalanche, AvalancheTestnet],
        particleWalletEntry: {
          //optional: particle wallet config
          displayWalletEntry: true, //display wallet button when connect particle success.
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [Avalanche, AvalancheTestnet],
          customStyle: {} //optional: custom wallet style
        },
        securityAccount: {
          //optional: particle security account config
          promptSettingWhenSign: 1,
          promptMasterPasswordSettingWhenLogin: 1
        },
        wallets: evmWallets({
          projectId: 'ba1f2d04e2caa0de3c48dadc27430841', //replace with walletconnect projectId
          showQrModal: false
        })
      }}
      theme={'light'}
      language={'en'} //optional：localize, default en
      walletSort={['Particle Auth', 'Wallet']} //optional：walelt order
    >
      {children}
    </ModalProvider>
  </CompletionRedirect>
)
export default ProfileCompletionLayout
