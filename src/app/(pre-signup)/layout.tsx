import { FC, ReactNode } from 'react'
import background from '@/assets/background.svg'
import Navbar from '@/components/organisms/Navbar'
import Image from 'next/image'
import WalletProvider from '@/components/templates/WalletProvider/WalletProvider'
import classes from './layout.module.sass'

type Props = {
  children: ReactNode
}

export const metadata = {
  title: 'THE GUILD | PRE-SIGNUP',
  description: 'The MyRefferalLinkCard pre-signup page'
}

const MainLayout: FC<Props> = ({ children }) => (
  <main className={classes.container}>
    <WalletProvider>
      <Image
        className={classes.bgWrap}
        alt="Background-image"
        src={background}
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
        quality={100}
      />

      {children}
    </WalletProvider>
  </main>
)
export default MainLayout
