import { graphql } from '@/lib/graphql/codegen/index'

export const createPost = graphql(`
  mutation createPost($content: String!, $attachments: [File]) {
    createPost(content: $content, attachments: $attachments) {
      _id
    }
  }
`)

export const updatePost = graphql(`
  mutation updatePost($content: String!, $id: String!) {
    updatePost(content: $content, id: $id) {
      _id
    }
  }
`)

export const createComment = graphql(`
  mutation createComment(
    $content: String!
    $postId: String!
    $attachments: [File]
  ) {
    createComment(
      content: $content
      postId: $postId
      attachments: $attachments
    ) {
      _id
    }
  }
`)

export const createReply = graphql(`
  mutation createReply(
    $content: String!
    $postId: String!
    $commentId: String!
    $attachments: [File]
  ) {
    createReply(
      content: $content
      postId: $postId
      commentId: $commentId
      attachments: $attachments
    ) {
      _id
    }
  }
`)

export const createRepost = graphql(`
  mutation createRepost($postId: String!) {
    repost(postId: $postId) {
      _id
    }
  }
`)

export const likePost = graphql(`
  mutation likePost($postId: String!) {
    likePost(postId: $postId) {
      _id
    }
  }
`)

export const unlikePost = graphql(`
  mutation unlikePost($postId: String!) {
    unlikePost(postId: $postId) {
      _id
    }
  }
`)
export const likeComment = graphql(`
  mutation likeComment($commentId: String!) {
    likeComment(commentId: $commentId) {
      _id
    }
  }
`)

export const unlikeComment = graphql(`
  mutation unlikeComment($commentId: String!) {
    unlikeComment(commentId: $commentId) {
      _id
    }
  }
`)

export const deletePost = graphql(`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`)

export const deleteComment = graphql(`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`)
