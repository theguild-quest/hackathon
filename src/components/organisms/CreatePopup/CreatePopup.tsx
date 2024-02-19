'use client'

import Button from '@/components/atoms/Button'
import classes from './CreatePopup.module.sass'
import UserProfileIcon from '@/components/atoms/UserProfileIcon'
import galleryIcon from '@/assets/icons/gallery.svg'
import emojiIcon from '@/assets/icons/emoji.svg'
import closeIcon from '@/assets/icons/close.svg'
import Image from 'next/image'
import Typography from '@/components/atoms/Typography'
import Popup from '@/components/atoms/Popup'
import {
  ChangeEvent,
  FC,
  FormEvent,
  ReactElement,
  ReactNode,
  useRef,
  useState
} from 'react'
import { useApolloClient, useQuery } from '@apollo/client'
import { getSelfUser } from '@/lib/graphql/queries/user'
import { enqueueSnackbar } from 'notistack'
import { parseErrorByCode } from '@/utils/helpers/errorParse'

export type CreateSubmitVariables = {
  content: string
  attachments: Array<File>
}

type Props = {
  title: string
  children?: ReactElement
  onSubmit: ({ content, attachments }: CreateSubmitVariables) => Promise<void>
  inputPlaceholder?: string
  actionTitle?: string
  refetchQueries?: Array<string>
}

const CreatePopup: FC<Props> = ({
  children,
  title,
  onSubmit,
  inputPlaceholder,
  actionTitle,
  refetchQueries: include
}) => {
  const client = useApolloClient()
  const [showCreatePopup, setShowCreatePopup] = useState(false)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState('')
  const { data } = useQuery(getSelfUser)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInput = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setContent(e.target.value)
  }

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && e.target.validity.valid) {
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const createSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const [content] = [formData.get('content') as string]
    const [file] = [formData.get('attachments') as File]

    try {
      setLoading(true)
      const attachmentsParam = []
      if (file && !!file.name && !!file.size && file.type.includes('image')) {
        attachmentsParam.push(file)
      }

      await onSubmit({ content, attachments: attachmentsParam })

      setContent('')
      setPreview('')

      if (include && include.length) await client.refetchQueries({ include })

      setShowCreatePopup(false)
    } catch (error) {
      setLoading(false)
      enqueueSnackbar(parseErrorByCode(), { variant: 'error' })
      console.log('error', error)
    }

    setLoading(false)
  }

  const triggerElement = children ?? (
    <div className={classes.createInputBlock}>
      <UserProfileIcon profilePicture={data?.getSelf?.profileImage} />
      <input
        placeholder={inputPlaceholder ?? "What's up?!"}
        className={classes.createInput}
        value={content}
        onChange={handleInput}
      />
    </div>
  )

  return (
    <Popup
      open={showCreatePopup}
      setOpen={setShowCreatePopup}
      title={title}
      triggerElement={triggerElement}
      contentElement={
        <form onSubmit={createSubmit} className={classes.createPopup}>
          <div className={classes.createContainer}>
            <div className={classes.userPicture}>
              <UserProfileIcon profilePicture={data?.getSelf?.profileImage} />
            </div>
            <div className={classes.contentWrapper}>
              <textarea
                className={classes.contentInput}
                placeholder="What’s Up?!"
                id="content"
                name="content"
                value={content}
                onChange={handleInput}
                maxLength={400}
                rows={6}
              ></textarea>
              {preview && (
                <div className={classes.previewWrapper}>
                  <Image
                    className={classes.previewImage}
                    src={preview}
                    fill
                    alt="uploaded-image"
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
          </div>
          <div className={classes.separator} />
          <div className={classes.footer}>
            <div className={classes.mediaTypes}>
              <div>
                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  ref={fileInputRef}
                  accept="image/*"
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
                <span className={classes.countVal}>{content.length}</span>/400
              </Typography>
              <Button variant="bodyXL" disabled={loading}>
                {actionTitle || 'Submit'}
              </Button>
            </div>
          </div>
        </form>
      }
    />
  )
}

export default CreatePopup
