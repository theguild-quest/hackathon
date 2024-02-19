'use client'
import Button from '@/components/atoms/Button'
import classes from './DeleteComment.module.sass'
import Typography from '@/components/atoms/Typography'
import { useApolloClient, useMutation } from '@apollo/client'
import { deleteComment as deleteCommentMutation } from '@/lib/graphql/mutations/posts'
import { FC, useState } from 'react'
import { enqueueSnackbar } from 'notistack'
import { parseErrorByCode } from '@/utils/helpers/errorParse'

type Props = {
  commentId: string
  setOpen: (value: boolean) => void
}

const DeleteComment: FC<Props> = ({ commentId, setOpen }) => {
  const client = useApolloClient()
  const [deleteComment] = useMutation(deleteCommentMutation)
  const [loading, setLoading] = useState(false)

  const handleDeleteClick = async () => {
    setLoading(true)
    try {
      const response = await deleteComment({ variables: { commentId } })
      enqueueSnackbar('Comment was deleted successfully!', {
        variant: 'success'
      })
    } catch (err) {
      console.error(err)
      enqueueSnackbar(parseErrorByCode(), { variant: 'error' })
    }
    setLoading(false)
    setOpen(false)
    await client.refetchQueries({ include: ['getPostById'] })
  }

  return (
    <div className={classes.deleteComment}>
      <div className={classes.separator} />
      <div className={classes.content}>
        <Typography>Are you sure you’d like to delete this comment?</Typography>
        <div className={classes.buttonContainer}>
          <Button
            disabled={loading}
            variant="bodyXL"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            disabled={loading}
            variant="bodyXL"
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DeleteComment
