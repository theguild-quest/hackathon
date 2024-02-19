'use client'

import Button from '@/components/atoms/Button'
import classes from './CreatePost.module.sass'
import UserProfileIcon from '@/components/atoms/UserProfileIcon'
import galleryIcon from '@/assets/icons/gallery.svg'
import emojiIcon from '@/assets/icons/emoji.svg'
import closeIcon from '@/assets/icons/close.svg'
import Image from 'next/image'
import Typography from '@/components/atoms/Typography'
import Popup from '@/components/atoms/Popup'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'

import { createPost } from '@/lib/graphql/mutations/posts'
import { enqueueSnackbar } from 'notistack'

import { FeedQueriesForRefetch } from '@/utils/constants'
import { getSelfUser } from '@/lib/graphql/queries/user'

export default function CreatePost() {
  const client = useApolloClient()
  const [showCreatePostPopup, setShowCreatePostPopup] = useState(false)
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState<string>()
  const { data } = useQuery(getSelfUser)

  const [addPost] = useMutation(createPost)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInput = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setError('')
    setContent(e.target.value)
  }

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    console.log({
      selectedFile,
      size: selectedFile?.size,
      acceptable: selectedFile?.size! < 5242880
    })
    if (selectedFile && e.target.validity.valid) {
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const createPostSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const [content] = [formData.get('content') as string]
    const [file] = [formData.get('attachments') as File]
    console.log('content', content)
    console.log('attachments', file)
    try {
      let attachmentsParam = []
      if (file && !!file.name && !!file.size && file.type.includes('image')) {
        attachmentsParam.push(file)
      }
      const response = await addPost({
        variables: { content: content.trim(), attachments: attachmentsParam }
      })
      enqueueSnackbar('Post was created successfully!', { variant: 'success' })
      await client.refetchQueries({ include: FeedQueriesForRefetch })
      console.log('response', response)
      setShowCreatePostPopup(false)
      event.currentTarget.reset()
      setPreview('')
      setContent('')
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Popup
      open={showCreatePostPopup}
      setOpen={setShowCreatePostPopup}
      title="Create a post"
      triggerElement={
        <div className={classes.createPostBlock}>
          <UserProfileIcon profilePicture={data?.getSelf?.profileImage} />
          <input
            placeholder="Create a post..."
            className={classes.createPostInput}
            value={content}
            onChange={handleInput}
          />
        </div>
      }
      contentElement={
        <form onSubmit={createPostSubmit} className={classes.createPost}>
          <div className={classes.postContainer}>
            <div className={classes.userPicture}>
              <UserProfileIcon profilePicture={data?.getSelf?.profileImage} />
            </div>
            <div className={classes.postContent}>
              <textarea
                className={classes.postInput}
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
              <Button variant="bodyXL">Post</Button>
            </div>
          </div>
        </form>
      }
    />
  )
}
