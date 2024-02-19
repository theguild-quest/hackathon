import Button from '@/components/atoms/Button'
import UserProfileIcon from '@/components/atoms/UserProfileIcon'
import profilePicture from '@/assets/user_profile_picture.jpg'
import galleryIcon from '@/assets/icons/gallery.svg'
import emojiIcon from '@/assets/icons/emoji.svg'
import Image from 'next/image'
import Typography from '@/components/atoms/Typography'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'
import { ChangeEvent, useRef } from 'react'
import Post from '../Post'
import classes from './Repost.module.sass'

type Props = {
  data: {
    _id: string
    repostedBy?: string | null
    username: string
    userPicture: StaticImport
    userTag: string
    createdAt: number // TBD: need to change to date
    content: string
    attachements: StaticImport[] | null
    counters: {
      likes: number
      reposts: number
      comments: number
    }
  }
  showComments?: boolean
}

export default function CreateRepost({ data }: Props) {
  const {
    _id,
    username,
    userTag,
    createdAt,
    content,
    attachements,
    userPicture
  } = data

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    console.log('Selected file:', selectedFile)
  }

  return (
    <div className={classes.repost}>
      <div className={classes.postContainer}>
        <div className={classes.userPicture}>
          <UserProfileIcon profilePicture={profilePicture} />
        </div>
        <div className={classes.reply}>
          <textarea
            className={classes.repostInput}
            placeholder="What’s Up?!"
            rows={2}
          ></textarea>
          <article className={classes.post}>
            <header className={classes.header}>
              <div className={classes.userInfoContainer}>
                <div className={classes.userInfo}>
                  {/* <Link href={`/${data.userTag}`}> */}
                  <UserProfileIcon profilePicture={profilePicture} />
                  {/* </Link> */}
                  <div className={classes.userInfoDetails}>
                    <Typography className={classes.username}>
                      {username}
                    </Typography>
                    <Typography className={classes.userTag}>
                      @{userTag} • <span>{createdAt}m</span>
                    </Typography>
                  </div>
                </div>
              </div>
            </header>
            <Link href={`/home/posts/${_id}`}>
              <div className={classes.content}>
                <Typography variant="bodyL" className={classes.repostText}>
                  {content}
                </Typography>
                {attachements && (
                  <Image
                    className={classes.contentImage}
                    alt={`${username}-post-media`}
                    src={attachements[0]}
                  />
                )}
              </div>
            </Link>
          </article>
        </div>
      </div>
      <div className={classes.separator} />
      <div className={classes.footer}>
        <div className={classes.mediaTypes}>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <Image
              src={galleryIcon}
              alt="gallery-icon"
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div>
            <Image src={emojiIcon} alt="emoji-icon" />
          </div>
        </div>
        <div className={classes.footer}>
          <Typography variant="bodyM" className={classes.count}>
            <span className={classes.countVal}>0</span>/400
          </Typography>
          <Button variant="bodyXL">Post</Button>
        </div>
      </div>
    </div>
  )
}
