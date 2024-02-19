import Button from '@/components/atoms/Button'
import classes from './Quote.module.sass'
import UserProfileIcon from '@/components/atoms/UserProfileIcon'
import profilePicture from '@/assets/user_profile_picture.jpg'
import galleryIcon from '@/assets/icons/gallery.svg'
import emojiIcon from '@/assets/icons/emoji.svg'
import closeIcon from '@/assets/icons/close.svg'
import Image from 'next/image'
import Typography from '@/components/atoms/Typography'
import Link from 'next/link'
import { ChangeEvent, useRef, useState } from 'react'
import { Post as PostType } from '@/lib/graphql/codegen/graphql'

type Props = {
  data: PostType
}

export default function Quote({ data }: Props) {
  const {
    _id,
    content,
    attachments,
    createdAt,
    author,
    likes,
    hasLiked,
    isQuote,
    isRepost,
    comments,
    repost
  } = data!

  const [quoteContent, setQuoteContent] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState<string>()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setError('')
    setQuoteContent(e.target.value)
  }

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  return (
    <div className={classes.quote}>
      <div className={classes.postContainer}>
        <div className={classes.userPicture}>
          <UserProfileIcon profilePicture={author?.profileImage} />
        </div>
        <div className={classes.reply}>
          <div className={classes.postContent}>
            <textarea
              className={classes.quoteInput}
              placeholder="What’s Up?!"
              value={quoteContent}
              onChange={handleInput}
              maxLength={400}
              rows={2}
            ></textarea>
            {preview && (
              <div className={classes.previewWrapper}>
                <Image
                  className={classes.previewImage}
                  src={preview}
                  fill
                  alt=""
                />
                <div className={classes.removePreview}>
                  <Image
                    src={closeIcon}
                    alt="close-icon"
                    className={classes.closeIcon}
                    onClick={() => setPreview('')}
                  />
                </div>
              </div>
            )}
          </div>
          <article className={classes.post}>
            <header className={classes.header}>
              <div className={classes.userInfoContainer}>
                <div className={classes.userInfo}>
                  {/* <Link href={`/${data.userTag}`}> */}
                  <UserProfileIcon profilePicture={author?.profileImage} />
                  {/* </Link> */}
                  <div className={classes.userInfoDetails}>
                    <Typography className={classes.username}>
                      {author?.displayName}
                    </Typography>
                    <Typography className={classes.userTag}>
                      @{author?.username} • <span>{createdAt}m</span>
                    </Typography>
                  </div>
                </div>
              </div>
            </header>
            <Link href={`/home/posts/${_id}`}>
              <div className={classes.content}>
                <Typography variant="bodyL" className={classes.quoteText}>
                  {content}
                </Typography>
                {/* {!!attachments?.length &&
                  attachments.every((attachment) =>
                    attachment?.includes('firebase')
                  ) && (
                    <div className={classes.attachmentsWrapper}>
                      <Image
                        className={classes.contentImage}
                        alt={`${author?.username || 'Aboba'}-post-media`}
                        onError={(e) => console.log('IMAGE ERROR', e)}
                        src={attachments[0]!}
                        quality={100}
                        // fill
                        width={500}
                        height={500}
                      />
                    </div>
                  )} */}
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
            <span className={classes.countVal}>{quoteContent.length}</span>/400
          </Typography>
          <Button variant="bodyXL">Post</Button>
        </div>
      </div>
    </div>
  )
}
