import { FC, ReactNode } from 'react'
import Image from 'next/image'
import { onboardingGifBlurDataUrl } from '@/utils/constants'
import onboardingGif from '@/assets/onboarding.gif'
import onboardingMaterial from '@/assets/onboarding_background_material.png'
import classes from './layout.module.sass'
import logo from '@/assets/logo_full.svg'
import logoIcon from '@/assets/logo_icon.svg'
import Link from 'next/link'
import { cookieLogger } from '../actions'

type Props = {
  children: ReactNode
}

export const metadata = {
  title: 'THE GUILD | ONBOARDING',
  description: 'The Guild onboarding'
}

const OnboardingLayout: FC<Props> = ({ children }) => {
  cookieLogger()
  return (
    <main className={classes.container}>
      <Image
        className={classes.onboardingMaterial}
        alt="onboarding-background-material"
        src={onboardingMaterial}
        placeholder="blur"
        quality={100}
        fill
        style={{
          objectFit: 'cover'
        }}
      />
      <aside className={classes.sideBackground}>
        <Image
          alt="onboarding-background"
          src={onboardingGif}
          placeholder="blur"
          blurDataURL={onboardingGifBlurDataUrl}
          quality={100}
          style={{
            objectFit: 'cover'
          }}
        />
      </aside>
      <section className={classes.content}>
        <Link href="/login">
          <Image
            className={classes.logo}
            alt="The Guild logo"
            src={logo}
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
            quality={100}
          />
        </Link>
        <Link href="/login">
          <Image
            className={classes.logoIcon}
            alt="The Guild logo"
            src={logoIcon}
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
            quality={100}
          />
        </Link>
        {children}
      </section>
    </main>
  )
}
export default OnboardingLayout
