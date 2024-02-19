import React from 'react'
import Typography from '@/components/atoms/Typography'
import spotlightTestImage from '@/assets/spotlightTest.jpeg'
import featuredTestImage from '@/assets/featuredTest.png'
import Image from 'next/image'
import BlankBlock from '@/components/atoms/BlankBlock'
import classes from './SpotlightFeatured.module.sass'

const SpotlightFeatured = () => {
  const scheme = [
    {
      title: 'SPOTLIGHT',
      content: spotlightTestImage,
      blank: false
    },
    {
      title: 'FEATURED',
      content: null,
      blank: true
    }
  ]

  return scheme.map(({ title, content, blank }) => (
    <div className={classes.wrapper}>
      <Typography className={classes.title} variant="bodyL">
        {title}
      </Typography>
      <div className={classes.contentBlock}>
        {blank || !content ? (
          <BlankBlock />
        ) : (
          <Image
            className={classes.imageBlock}
            alt={`${title}-image`}
            src={content}
            placeholder="blur"
            quality={100}
          />
        )}
      </div>
    </div>
  ))
}

export default SpotlightFeatured
