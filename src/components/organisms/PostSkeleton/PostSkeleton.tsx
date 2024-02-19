import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from './PostSkeleton.module.sass'

type Props = {
  height?: number
}

const PostSkeleton = ({ height = 190 }) => {
  return (
    <SkeletonTheme baseColor="#0c0c0c" highlightColor="#000">
      <div className={classes.postSkeleton}>
        <Skeleton height={height} />
      </div>
    </SkeletonTheme>
  )
}

export default PostSkeleton
