import { FC, ReactNode } from 'react'
import { Prompt } from '@/utils/fonts'
import './globals.sass'
import Providers from '@/components/templates/Providers'

type Props = {
  children: ReactNode
}

export const metadata = {
  title: 'THE GUILD',
  description: 'The MyRefferalLinkCard page'
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en" className={Prompt.className}>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
)
export default RootLayout
