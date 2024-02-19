'use client'

import Typography from '@/components/atoms/Typography'
import React, { FC, FormEvent, useState } from 'react'
import Image from 'next/image'
import UserProfileIcon from '@/components/atoms/UserProfileIcon'

import moreIcon from '@/assets/icons/dots.svg'

import repostIcon from '@/assets/icons/repost.svg'
import likeIcon from '@/assets/icons/like.svg'
import likedIcon from '@/assets/icons/liked.svg'
import commentIcon from '@/assets/icons/comment.svg'

import bookmarkIcon from '@/assets/icons/bookmark.svg'
import bookmarkedIcon from '@/assets/icons/bookmarked.svg'
import shareIcon from '@/assets/icons/share.svg'
import closeIcon from '@/assets/icons/close.svg'
import Popup from '@/components/atoms/Popup/Popup'
import cx from 'classnames'

import imageError from '@/assets/imageError.jpeg'

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from '@/components/atoms/Popover/Popover'

import { useApolloClient, useMutation } from '@apollo/client'

import {
  createRepost as repostPost,
  likePost,
  unlikePost,
  createComment
} from '@/lib/graphql/mutations/posts'
import { Post as PostType } from '@/lib/graphql/codegen/graphql'
import TimeAgo from '@/components/atoms/TimeAgo/TimeAgo'
import { useRouter } from 'next/navigation'
import DeletePost from '../DeletePost'
import ViaDirectMessage from '../ViaDirectMessage'
import Report from '../Report'
import classes from './Post.module.sass'
import Comment from '../Comment'
import { enqueueSnackbar } from 'notistack'
import Quote from '../Quote'
import CreateComment from '../CreateComment'
import WithHighlight from '@/components/templates/WithHighlight'
import { getPostDataById } from '@/lib/graphql/queries/posts'
import { FeedQueriesForRefetch } from '@/utils/constants'
import {
  BlockUser,
  FollowUser,
  UnblockUser,
  UnfollowUser
} from '@/lib/graphql/mutations/user'
import { CommentActionNames } from '../Comment/Comment'
import CreatePopup, { CreateSubmitVariables } from '../CreatePopup/CreatePopup'

type Props = {
  data: PostType
  showComments?: boolean
  selfUserId?: string
}

export type PostActionNames =
  | 'bookmarked'
  | 'showDeletePopup'
  | 'showQuotePopup'
  | 'showReportPopup'
  | 'showSendViaMessagePopup'
  | 'showFollowText'
  | 'showBlockText'
  | 'liked'

type PostActionState = {
  [key in PostActionNames]: boolean
}

const Post: FC<Props> = ({ data, showComments, selfUserId }) => {
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
    repost,
    repostsEngagement,
    quotesEngagement
  } = data

  const router = useRouter()

  const [showImageError, setShowImageError] = useState(false)

  const client = useApolloClient()

  const [likeSinglePost] = useMutation(likePost, {
    variables: { postId: _id }
  })
  const [unlikeSinglePost] = useMutation(unlikePost, {
    variables: { postId: _id }
  })

  const [followUser] = useMutation(FollowUser)
  const [unfollowUser] = useMutation(UnfollowUser)

  const [blockUser] = useMutation(BlockUser)
  const [unblockUser] = useMutation(UnblockUser)

  const [createRepostMutation] = useMutation(repostPost, {
    variables: { postId: _id }
  })

  const [createCommentMutation] = useMutation(createComment)

  const [
    {
      liked,
      bookmarked,
      showDeletePopup,
      showQuotePopup,
      showReportPopup,
      showSendViaMessagePopup,
      showFollowText,
      showBlockText
    },
    setPostActions
  ] = useState<PostActionState>({
    liked: hasLiked,
    bookmarked: false,
    showDeletePopup: false,
    showQuotePopup: false,
    showReportPopup: false,
    showSendViaMessagePopup: false,
    showFollowText: true,
    showBlockText: true
  })

  const changePostActions = (name: PostActionNames, value: boolean) => {
    setPostActions((prev) => ({ ...prev, [name]: value }))
  }

  const togglePostState = (name: PostActionNames) => {
    setPostActions((prev) => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  const handleFollowClick = async (
    userId: string,
    status: boolean,
    changeState: (
      name: PostActionNames & CommentActionNames,
      value: boolean
    ) => void
  ) => {
    let res
    if (status) {
      changeState('showFollowText', false)
      try {
        res = await followUser({
          variables: { userId }
        })
      } catch (error) {
        console.log('FOLLOW ERROR', { error })
        changeState('showFollowText', true)
      }
    } else {
      changeState('showFollowText', true)
      try {
        res = await unfollowUser({
          variables: { userId }
        })
      } catch (error) {
        console.log('UNFOLLOW ERROR', { error })
        changeState('showFollowText', false)
      }
    }

    await client.refetchQueries({ include: FeedQueriesForRefetch })
  }

  const handleLikeClick = async () => {
    if (liked) {
      changePostActions('liked', false)
      try {
        await unlikeSinglePost()
      } catch (error) {
        console.log('LIKE ERROR', { error })
        changePostActions('liked', true)
      }
    } else {
      changePostActions('liked', true)
      try {
        await likeSinglePost()
      } catch (error) {
        console.log('LIKE ERROR', { error })
        changePostActions('liked', false)
      }
    }

    await client.refetchQueries({ include: FeedQueriesForRefetch })
  }

  const handleBlockClick = async (
    userId: string,
    status: boolean,
    changeState: (
      name: PostActionNames & CommentActionNames,
      value: boolean
    ) => void
  ) => {
    if (status) {
      changeState('showBlockText', false)

      try {
        await blockUser({
          variables: { userId }
        })
      } catch (error) {
        console.log('BLOCK ERROR', { error })
        changeState('showBlockText', true)
      }
    } else {
      changeState('showBlockText', true)
      try {
        await unblockUser({
          variables: { userId }
        })
      } catch (error) {
        console.log('UNBLOCK ERROR', { error })
        changeState('showBlockText', false)
      }
    }

    await client.refetchQueries({ include: FeedQueriesForRefetch })
  }

  const handleCreateRepost = async () => {
    await createRepostMutation()
    enqueueSnackbar('Repost was created successfully!', { variant: 'success' })
  }

  const handleCommentCreate = async ({
    content,
    attachments
  }: CreateSubmitVariables) => {
    await createCommentMutation({
      variables: { content, attachments, postId: _id }
    })
    enqueueSnackbar('Comment was posted successfully!', {
      variant: 'success'
    })
  }

  const redirectToPostPage = () => {
    router.push(`/home/${_id}`)
  }

  // TODO
  // const handleCreateQuote = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   const formData = new FormData(event.currentTarget)
  //   const [content] = [formData.get('content') as string]
  //   // TODO: add attachements logic
  //   // const [attachments] = [formData.get('attachments') as string]
  //   console.log('content', content)

  //   // console.log('attachments', attachments)
  //   // try {
  //   //   const response = await repost({ variables: { content } })
  //   //   console.log('response', response)
  //   // } catch (error) {
  //   //   console.log('error', error)
  //   // }
  // }

  const handleBrowserCopy = () => {}

  const isOwnPost = data.author?._id && selfUserId === data.author?._id

  return (
    <article className={classes.post}>
      <header className={classes.header}>
        {isRepost && (
          <div className={classes.repostedBy}>
            <Image alt="repost-icon" src={repostIcon} />
            <Typography variant="bodyL" inherited color="pink">
              @{author?.username} <Typography color="grey">reposted</Typography>
            </Typography>
          </div>
        )}
        <div className={classes.userInfoContainer}>
          <div className={classes.userInfo}>
            {/* <Link href={`/${data?.author?.username}`}> */}
            <UserProfileIcon
              profilePicture={
                isRepost ? repost?.author?.profileImage : author?.profileImage
              }
            />
            {/* </Link> */}
            <div className={classes.userInfoDetails}>
              <Typography className={classes.username} variant="bodyXL">
                {isRepost
                  ? repost?.author?.displayName || repost?.author?.username
                  : author?.displayName || author?.username}
              </Typography>
              <Typography
                className={classes.userTag}
                variant="bodyXL"
                color="grey"
              >
                {isRepost ? (
                  <>
                    @{repost?.author?.username} •{' '}
                    <TimeAgo createdAt={createdAt!} />
                  </>
                ) : (
                  <>
                    @{author?.username} • <TimeAgo createdAt={createdAt!} />
                  </>
                )}
              </Typography>
            </div>
          </div>
          <Popover placement="bottom-end">
            <PopoverTrigger className={classes.popoverTrigger}>
              <Image alt="options-icon" src={moreIcon} />
            </PopoverTrigger>
            <PopoverContent className={classes.popoverContent}>
              <PopoverClose className={classes.popoverClose}>
                <Image
                  src={closeIcon}
                  alt="close-icon"
                  className={classes.closeIcon}
                />
              </PopoverClose>
              <div className={classes.optionsContainer}>
                {isOwnPost ? (
                  <>
                    <Typography>Pin Post</Typography>
                    <div className={classes.popoverSeparator} />
                    <Typography
                      color="primary"
                      onClick={() => changePostActions('showDeletePopup', true)}
                    >
                      Delete Post
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      onClick={() =>
                        handleFollowClick(
                          author?._id ?? '',
                          showFollowText,
                          changePostActions
                        )
                      }
                    >
                      {showFollowText
                        ? `Follow @${author?.username}`
                        : `Unfollow @${author?.username}`}
                    </Typography>
                    <div className={classes.popoverSeparator} />
                    <Typography
                      onClick={() =>
                        handleBlockClick(
                          author?._id ?? '',
                          showBlockText,
                          changePostActions
                        )
                      }
                    >
                      {showBlockText
                        ? `Block @${author?.username}`
                        : `Unblock @${author?.username}`}
                    </Typography>
                    <div className={classes.popoverSeparator} />
                    <Typography
                      onClick={() => changePostActions('showReportPopup', true)}
                    >
                      Report Post
                    </Typography>
                  </>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Popup
          open={showDeletePopup}
          setOpen={(value: boolean) =>
            changePostActions('showDeletePopup', value)
          }
          title="Delete Post"
          triggerElement={<></>}
          contentElement={
            <DeletePost
              postId={_id}
              setOpen={(value: boolean) =>
                changePostActions('showDeletePopup', value)
              }
            />
          }
        />
        <Popup
          open={showReportPopup}
          setOpen={(value: boolean) =>
            changePostActions('showReportPopup', value)
          }
          title="Report an issue"
          triggerElement={<></>}
          contentElement={<Report />}
        />
      </header>

      {/* CONTENT OF THE POST */}
      {/* CONTENT OF THE POST */}
      {/* CONTENT OF THE POST */}
      <div
        className={classes.content}
        // !!!!
        // IMPORTANT WHEN TO NAVIGATE ON POST CLICK
        // !!!!
        onClick={redirectToPostPage}
      >
        <Typography variant="bodyXL" className={classes.postText}>
          <WithHighlight text={content} />
        </Typography>
        {!!attachments?.length &&
          attachments.every((attachment) =>
            attachment?.includes('firebase')
          ) && (
            <div className={classes.attachmentsWrapper}>
              <Image
                className={cx(classes.contentImage, {
                  [classes.contentImageError]: !!showImageError
                })}
                alt={`${author?.username || 'Aboba'}-post-media`}
                onError={(e) => {
                  setShowImageError(true)
                  console.log('IMAGE ERROR', e)
                }}
                src={showImageError ? imageError : attachments[0]!}
                quality={100}
                // fill
                width={500}
                height={500}
              />
            </div>
          )}
      </div>

      {/* FOOTER OF THE POST */}
      {/* FOOTER OF THE POST */}
      {/* FOOTER OF THE POST */}
      <footer className={classes.footer}>
        <div className={classes.postActions}>
          <div>
            {/* <Popup
              open={showQuotePopup}
              setOpen={(value: boolean) =>
                changePostActions('showQuotePopup', value)
              }
              title={`Replying to @${author?.username}`}
              triggerElement={<></>}
              contentElement={<Quote data={data} />}
            /> */}
            <Popover placement="top-start">
              <PopoverTrigger className={classes.popoverTrigger}>
                <Image alt="repost-icon" src={repostIcon} />
              </PopoverTrigger>
              <PopoverContent
                className={cx(
                  classes.popoverContent,
                  classes.repostPopoverContent
                )}
              >
                <PopoverClose className={classes.popoverClose}>
                  <Image
                    src={closeIcon}
                    alt="close-icon"
                    className={classes.closeIcon}
                  />
                </PopoverClose>
                <div className={classes.optionsContainer}>
                  <Typography onClick={handleCreateRepost}>Repost</Typography>
                  {/* <div className={classes.popoverSeparator} />
                  <Typography
                    onClick={() => changePostActions('showQuotePopup', true)}
                  >
                    Quote
                  </Typography> */}
                </div>
              </PopoverContent>
            </Popover>
            {/* REPOSTS + QUOTES COUNT */}
            <Typography variant="bodyXL" inherited>
              {(repostsEngagement?.total || 0) + (quotesEngagement?.total || 0)}
            </Typography>
          </div>
          <div>
            <Image
              alt="like-icon"
              src={liked ? likedIcon : likeIcon}
              onClick={handleLikeClick}
            />
            <Typography variant="bodyXL" inherited>
              {likes?.total}
            </Typography>
          </div>
          <div>
            <Image
              alt="comment-icon"
              src={commentIcon}
              onClick={redirectToPostPage}
            />
            {/* COMMENTS COUNT */}
            <Typography variant="bodyXL" inherited>
              {comments?.total}
            </Typography>
          </div>
        </div>
        <div>
          <Image
            className={classes.image}
            alt="bookmark-icon"
            src={bookmarked ? bookmarkedIcon : bookmarkIcon}
            onClick={() => togglePostState('bookmarked')}
          />
          <Popover placement="top-end">
            <PopoverTrigger className={classes.popoverTrigger}>
              <Image
                className={classes.image}
                alt="share-icon"
                src={shareIcon}
              />
            </PopoverTrigger>
            <PopoverContent className={classes.popoverContent}>
              <PopoverClose className={classes.popoverClose}>
                <Image
                  src={closeIcon}
                  alt="close-icon"
                  className={classes.closeIcon}
                />
              </PopoverClose>
              <div className={classes.optionsContainer}>
                <Typography onClick={handleBrowserCopy}>Copy Link</Typography>
                <div className={classes.popoverSeparator} />
                <Typography
                  onClick={() =>
                    changePostActions('showSendViaMessagePopup', true)
                  }
                >
                  Send via Direct Message
                </Typography>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        {/* NOT FOR INITIAL RELEASE */}
        {/* NOT FOR INITIAL RELEASE */}
        {/* NOT FOR INITIAL RELEASE */}
        {/* <div style={{ display: 'none' }}>
          <Popup
            title="Send via Direct Message"
            open={showSendViaMessagePopup}
            setOpen={(value: boolean) =>
              changePostActions('showQuotePopup', value)
            }
            triggerElement={<></>}
            contentElement={<ViaDirectMessage />}
          />
        </div> */}
      </footer>
      {showComments && (
        <div className={classes.comments}>
          {/* COMMENT CREATION */}
          <CreatePopup
            title="Create a comment"
            onSubmit={handleCommentCreate}
            actionTitle="Comment"
            refetchQueries={['getPostById']}
          />
          {comments?.comments &&
            comments?.comments.map(
              (comment) =>
                comment && (
                  <Comment
                    key={comment._id}
                    data={comment}
                    postId={_id}
                    selfUserId={selfUserId}
                    handleFollowClick={handleFollowClick}
                    handleBlockClick={handleBlockClick}
                  />
                )
            )}
          <div className={classes.seeMore}>
            <Typography align="center" color="grey">
              See more comments
            </Typography>
          </div>
        </div>
      )}
    </article>
  )
}

export default Post
