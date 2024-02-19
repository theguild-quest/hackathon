'use client'

import React, { FC, useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'
import {
  GetFeedPostsQuery,
  GetTrendingPostsQuery,
  Post as PostType
} from '@/lib/graphql/codegen/graphql'
import { getFeedPosts, getTrendingPosts } from '@/lib/graphql/queries/posts'
import Typography from '@/components/atoms/Typography'
import { useInView } from 'react-intersection-observer'
import classes from './Feed.module.sass'
import Post from '../Post'
import PostSkeleton from '../PostSkeleton'

type Props = {
  userId?: string
  self?: boolean
  trending?: boolean
}

const Feed: FC<Props> = ({ userId, trending = false }) => {
  const [isEnd, setIsEnd] = useState(false)

  const homeFeedResponse = useQuery(getFeedPosts, {
    variables: { limit: 15, skip: 0, ...(userId && { userId }) },
    notifyOnNetworkStatusChange: true,
    skip: !!trending
  })

  const trendingFeedResponse = useQuery(getTrendingPosts, {
    variables: { limit: 15, skip: 0, ...(trending && { hours: 24 }) },
    notifyOnNetworkStatusChange: true,
    skip: !trending
  })

  const { data, loading, error, fetchMore } = trending
    ? trendingFeedResponse
    : homeFeedResponse

  const getPosts = (data: GetFeedPostsQuery | GetTrendingPostsQuery) => {
    //@ts-ignore
    return data?.getTrendingPosts?.posts ?? data?.sortPostsByDate?.posts
  }

  const feedPosts: PostType[] = useMemo(() => {
    if (data) return getPosts(data!)

    return []
  }, [data])

  const fetchData = () => {
    fetchMore({
      variables: {
        skip: feedPosts.length
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const previousPosts = getPosts(previousResult)
        const newPosts = getPosts(fetchMoreResult)

        if (newPosts && !newPosts.length) {
          setIsEnd(true)
        }

        if (trending) {
          return {
            getTrendingPosts: {
              //@ts-ignore
              ...previousResult?.getTrendingPosts,
              posts: [...previousPosts, ...newPosts]
            }
          }
        }

        return {
          sortPostsByDate: {
            // @ts-ignore
            ...previousResult?.sortPostsByDate!,
            posts: [...previousPosts, ...newPosts]
          }
        }
      }
    })
  }

  const { ref } = useInView({
    threshold: 1,
    delay: 0,
    skip: !!isEnd,
    onChange(inView) {
      if (inView) fetchData()
    }
  })

  if (error) return `Error! ${error.message}`

  return (
    <section className={classes.posts}>
      {!!feedPosts.length &&
        feedPosts.map((post, i) => (
          <Post
            key={`${post?._id}.${i}`}
            data={post}
            selfUserId={self ? userId : ''}
          />
        ))}
      {loading &&
        // 15 skeleton loaders is from limit on which we are fetching posts
        Array.from({ length: 15 }, (_, i) => i + 1).map((i) => (
          <PostSkeleton key={i} />
        ))}
      {isEnd && (
        <Typography
          weight="light"
          className={classes.endTypography}
          variant="bodyL"
          color="pink"
        >
          You've reached the end
        </Typography>
      )}
      <div className={classes.intersectionTrigger} ref={ref} />
    </section>
  )
}

export default Feed
