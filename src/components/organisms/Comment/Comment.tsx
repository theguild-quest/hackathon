import Typography from '@/components/atoms/Typography'
import React, { FC, useState } from 'react'
import classes from './Comment.module.sass'
import Image from 'next/image'
import UserProfileIcon from '@/components/atoms/UserProfileIcon'
import moreIcon from '@/assets/icons/dots.svg'
import likeIcon from '@/assets/icons/like.svg'
import likedIcon from '@/assets/icons/liked.svg'
import commentIcon from '@/assets/icons/comment.svg'
import commentedIcon from '@/assets/icons/commented.svg'
import closeIcon from '@/assets/icons/close.svg'
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
  createReply as createReplyMutation,
  likeComment,
  unlikeComment
} from '@/lib/graphql/mutations/posts'
import {
  Comment as CommentType,
  CreateReplyMutation
} from '@/lib/graphql/codegen/graphql'
import WithHighlight from '@/components/templates/WithHighlight'
import Popup from '@/components/atoms/Popup'
import DeleteComment from '../DeleteComment'
import TimeAgo from '@/components/atoms/TimeAgo'
import { FeedQueriesForRefetch } from '@/utils/constants'
import { PostActionNames } from '../Post/Post'
import CreatePopup from '../CreatePopup'
import { CreateSubmitVariables } from '../CreatePopup/CreatePopup'
import { enqueueSnackbar } from 'notistack'

type Props = {
  data: CommentType
  reply?: boolean
  selfUserId?: string
  handleFollowClick?: (
    userId: string,
    status: boolean,
    changeState: (
      name: CommentActionNames & PostActionNames,
      value: boolean
    ) => void
  ) => void
  handleBlockClick?: (
    userName: string,
    status: boolean,
    changeState: (
      name: CommentActionNames & PostActionNames,
      value: boolean
    ) => void
  ) => void
  postId: string
  replyInitialId?: string
  replyIndicator?: boolean
}

export type CommentActionNames =
  | 'showDeletePopup'
  | 'showReportPopup'
  | 'showFollowText'
  | 'showBlockText'
  | 'liked'

type PostActionState = {
  [key in CommentActionNames]: boolean
}

const Comment: FC<Props> = ({
  data,
  reply,
  selfUserId,
  handleFollowClick,
  handleBlockClick,
  postId,
  replyInitialId,
  replyIndicator
}) => {
  const {
    _id,
    author,
    content,
    attachments,
    replies,
    likes,
    createdAt,
    hasLiked
  } = data

  const [showImageError, setShowImageError] = useState(false)
  const client = useApolloClient()
  const [
    { liked, showDeletePopup, showReportPopup, showFollowText, showBlockText },
    setCommentActions
  ] = useState<PostActionState>({
    liked: !!hasLiked,
    showDeletePopup: false,
    showReportPopup: false,
    showFollowText: true,
    showBlockText: true
  })

  const isOwnComment = data.author?._id && selfUserId === data.author?._id

  const changeCommentActions = (name: CommentActionNames, value: boolean) => {
    setCommentActions((prev) => ({ ...prev, [name]: value }))
  }

  const toggleCommentState = (name: CommentActionNames) => {
    setCommentActions((prev) => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  const [likeSingleComment] = useMutation(likeComment, {
    variables: { commentId: _id }
  })
  const [unlikeSingleComment] = useMutation(unlikeComment, {
    variables: { commentId: _id }
  })

  const handleLikeClick = async () => {
    if (liked) {
      changeCommentActions('liked', false)
      try {
        await unlikeSingleComment()
      } catch (error) {
        console.log('LIKE ERROR', { error })
        changeCommentActions('liked', true)
      }
    } else {
      changeCommentActions('liked', true)
      try {
        await likeSingleComment()
      } catch (error) {
        console.log('LIKE ERROR', { error })
        changeCommentActions('liked', false)
      }
    }
    await client.refetchQueries({ include: ['getPostById'] })
  }

  const [createReply] = useMutation<CreateReplyMutation>(createReplyMutation)

  const handleCommentCreate = async ({
    content,
    attachments
  }: CreateSubmitVariables) => {
    await createReply({
      variables: {
        content,
        attachments,
        postId,
        commentId: reply ? replyInitialId : _id
      }
    })
    enqueueSnackbar('Reply was posted successfully!', {
      variant: 'success'
    })
  }

  return (
    <article className={!reply ? classes.commentsContainer : ''}>
      <div className={reply ? classes.reply : classes.comment}>
        <div className={classes.userTree}>
          {/* <Link href={`/${data.userTag}`}> */}
          {/* CHANGE TO PROFILE */}
          <UserProfileIcon profilePicture={author?.profileImage} />
          {/* </Link> */}
          {(replyIndicator || !!data.replies?.comments?.length) && (
            <div className={classes.line} />
          )}
        </div>
        <div className={classes.commentContainer}>
          <header className={classes.userInfoContainer}>
            <div className={classes.userInfo}>
              <div className={classes.userInfoDetails}>
                <Typography className={classes.username}>
                  {author?.username}
                </Typography>
                <Typography className={classes.userTag}>
                  @{author?.username} • <TimeAgo createdAt={createdAt!} />
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
                  {isOwnComment ? (
                    <>
                      <Typography
                        pointer
                        color="primary"
                        onClick={() =>
                          changeCommentActions('showDeletePopup', true)
                        }
                      >
                        Delete Comment
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography
                        onClick={() => {
                          if (handleFollowClick) {
                            handleFollowClick(
                              author?._id ?? '',
                              showFollowText,
                              changeCommentActions
                            )
                          }
                        }}
                      >
                        {showFollowText
                          ? `Follow @${author?.username}`
                          : `Unfollow @${author?.username}`}
                      </Typography>
                      <div className={classes.popoverSeparator} />
                      <Typography
                        onClick={() => {
                          if (handleBlockClick) {
                            handleBlockClick(
                              author?._id ?? '',
                              showBlockText,
                              changeCommentActions
                            )
                          }
                        }}
                      >
                        {showBlockText
                          ? `Block @${author?.username}`
                          : `Unblock @${author?.username}`}
                      </Typography>
                      <div className={classes.popoverSeparator} />
                      <Typography
                        onClick={() =>
                          changeCommentActions('showReportPopup', true)
                        }
                      >
                        Report Post
                      </Typography>
                    </>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </header>
          <div className={classes.content}>
            <Typography variant="bodyL" className={classes.postText}>
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
          <footer className={classes.footer}>
            <div className={classes.postActions}>
              <div>
                <Image
                  alt="like-icon"
                  src={liked ? likedIcon : likeIcon}
                  onClick={handleLikeClick}
                />
                <Typography variant="bodyL">{likes?.total}</Typography>
              </div>
              {reply ? (
                <div>
                  <Image alt="comment-icon" src={commentIcon} />
                  <CreatePopup
                    title={`Reply to @${data.author?.username}`}
                    onSubmit={handleCommentCreate}
                    actionTitle="Reply"
                    refetchQueries={['getPostById']}
                  >
                    <Typography variant="bodyL" color="grey">
                      Reply
                    </Typography>
                  </CreatePopup>
                </div>
              ) : (
                <div>
                  <CreatePopup
                    title={`Reply to @${data.author?.username}`}
                    onSubmit={handleCommentCreate}
                    actionTitle="Reply"
                    refetchQueries={['getPostById']}
                  >
                    <Image alt="comment-icon" src={commentIcon} />
                  </CreatePopup>
                  <Typography variant="bodyL" inherited>
                    {replies?.total}
                  </Typography>
                </div>
              )}
            </div>
          </footer>
        </div>
      </div>
      <Popup
        open={showDeletePopup}
        setOpen={(value: boolean) =>
          changeCommentActions('showDeletePopup', value)
        }
        title="Delete Comment"
        triggerElement={<></>}
        contentElement={
          <DeleteComment
            commentId={_id}
            setOpen={(value: boolean) =>
              changeCommentActions('showDeletePopup', value)
            }
          />
        }
      />
      {data?.replies?.comments &&
        data?.replies.comments.map((comment, i, initialArray) => {
          return (
            <div key={comment?._id} className={classes.repliesContainer}>
              <Comment
                data={comment!}
                reply
                postId={postId}
                replyInitialId={_id}
                replyIndicator={initialArray.length - 1 === i ? false : true}
                handleFollowClick={handleFollowClick}
                handleBlockClick={handleBlockClick}
              />

              {/* <div style={{ padding: 10 }}>
                <Typography align="center" className={classes.seeMore}>
                  See more...
                </Typography>
              </div> */}
            </div>
          )
        })}
    </article>
  )
}

export default Comment
