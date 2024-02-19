'use client'

import { FC } from 'react'
import { useApolloClient, useMutation } from '@apollo/client'
import { createComment as createCommentMutation } from '@/lib/graphql/mutations/posts'
import { enqueueSnackbar } from 'notistack'
import { CreateCommentMutation } from '@/lib/graphql/codegen/graphql'
import CreatePopup from '../CreatePopup'
import { CreateSubmitVariables } from '../CreatePopup/CreatePopup'

type Props = {
  postId: string
}

const CreateComment: FC<Props> = ({ postId }) => {
  const [createComment] = useMutation<CreateCommentMutation>(
    createCommentMutation
  )

  const handleCommentCreate = async ({
    content,
    attachments
  }: CreateSubmitVariables) => {
    await createComment({ variables: { content, attachments, postId } })
    enqueueSnackbar('Comment was posted successfully!', {
      variant: 'success'
    })
  }

  return (
    <CreatePopup
      title="Create a comment"
      onSubmit={handleCommentCreate}
      actionTitle="Comment"
      refetchQueries={['getPostById']}
    />
  )
}

export default CreateComment
