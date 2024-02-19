'use client'

import classes from './page.module.sass'
import arrowLeftIcon from '@/assets/icons/arrow-left.svg'
import Image from 'next/image'
import { getPostById } from '@/lib/graphql/queries/posts'
import Post from '@/components/organisms/Post'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import {
  GetPostByIdQuery,
  GetPostByIdQueryVariables,
  Post as PostType
} from '@/lib/graphql/codegen/graphql'
import PostSkeleton from '@/components/organisms/PostSkeleton'
import { getSelfProfile } from '@/lib/graphql/queries/user'

export default function Page({ params }: { params: { _id: string } }) {
  const { loading, data, error } = useQuery<
    GetPostByIdQuery,
    GetPostByIdQueryVariables
  >(getPostById, {
    variables: {
      postId: params._id,
      commentsLimit: 5,
      commentsSkip: 0,
      repliesLimit: 5,
      repliesSkip: 0
    }
  })
  const {
    data: selfData,
    loading: selfLoading,
    error: selfError
  } = useQuery(getSelfProfile)
  const postData = data?.getPostById?.post as PostType

  if (error) return `Error! Post Id ${params._id} ${error.message}`

  return (
    <div className={classes.container}>
      <div className={classes.postBlock}>
        <Link href="/home">
          <Image src={arrowLeftIcon} alt="back-icon" />
        </Link>
        <p>Post</p>
      </div>
      <section>
        {loading ? (
          <PostSkeleton height={500} />
        ) : (
          data?.getPostById &&
          postData && (
            <Post
              data={postData}
              showComments
              selfUserId={
                !selfLoading && !selfError ? selfData?.getSelf?._id : ''
              }
            />
          )
        )}
      </section>
    </div>
  )
}
