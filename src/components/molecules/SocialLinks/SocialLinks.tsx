import classes from './SocialLinks.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import xIcon from '@/assets/icons/socials/x.svg'
import telegramIcon from '@/assets/icons/socials/telegram.svg'
import githubIcon from '@/assets/icons/socials/github.svg'
import mediumIcon from '@/assets/icons/socials/medium.svg'

const SocialLinks = () => {
  return (
    <div className={classes.socialLinks}>
      <Link href="https://twitter.com/theguild_quest" target="_blank">
        <Image src={xIcon} alt="x-icon" />
      </Link>
      <Link href="https://t.me/+mDz5I79SLLBiZDc1">
        <Image src={telegramIcon} alt="telegram-icon" />
      </Link>
      <Link href="https://github.com/theguild-quest" target="_blank">
        <Image src={githubIcon} alt="github-icon" />
      </Link>
      <Link href="https://medium.com/@theguild_quest" target="_blank">
        <Image src={mediumIcon} alt="medium-icon" />
      </Link>
    </div>
  )
}

export default SocialLinks
