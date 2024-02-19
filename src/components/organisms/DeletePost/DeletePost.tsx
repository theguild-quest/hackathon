'use client'
import Button from '@/components/atoms/Button'
import classes from './DeletePost.module.sass'
import Typography from '@/components/atoms/Typography'
import { useApolloClient, useMutation } from '@apollo/client'
import { deletePost as deletePostMutation } from '@/lib/graphql/mutations/posts'
import { FC, useState } from 'react'
import { enqueueSnackbar } from 'notistack'
import { parseErrorByCode } from '@/utils/helpers/errorParse'
import { FeedQueriesForRefetch } from '@/utils/constants'

type Props = {
  postId: string
  setOpen: (value: boolean) => void
}

const DeletePost: FC<Props> = ({ postId, setOpen }) => {
  const client = useApolloClient()
  const [deletePost] = useMutation(deletePostMutation)
  const [loading, setLoading] = useState(false)

  const handleDeleteClick = async () => {
    setLoading(true)
    try {
      const response = await deletePost({ variables: { postId } })
      enqueueSnackbar('Post was deleted successfully!', { variant: 'success' })
    } catch (err) {
      console.error(err)
      enqueueSnackbar(parseErrorByCode(), { variant: 'error' })
    }
    setLoading(false)
    setOpen(false)
    await client.refetchQueries({ include: FeedQueriesForRefetch })
  }

  return (
    <div className={classes.deletePost}>
      <div className={classes.separator} />
      <div className={classes.content}>
        <Typography>Are you sure you’d like to delete this post?</Typography>
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

export default DeletePost
