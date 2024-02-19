import { FC, ReactNode } from 'react'
import background from '@/assets/background.svg'
import classes from './layout.module.sass'
import Navbar from '@/components/organisms/Navbar'
import Image from 'next/image'
import { getSessionCookie } from '../actions'
import { redirect } from 'next/navigation'

type Props = {
  children: ReactNode
}

const MainLayout: FC<Props> = async ({ children }) => {
  if (!getSessionCookie()) {
    redirect('/login')
  }

  return (
    <div className={classes.container}>
      <Image
        className={classes.bgWrap}
        alt="Background-image"
        src={background}
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
        quality={100}
        style={{
          objectFit: 'cover'
        }}
      />

      <Navbar />
      {children}
    </div>
  )
}
export default MainLayout
