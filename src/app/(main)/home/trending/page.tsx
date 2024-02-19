import { FC } from 'react'
import Typography from '@/components/atoms/Typography'
import CreatePost from '@/components/organisms/CreatePost'
import Feed from '@/components/organisms/Feed'
import classes from './page.module.sass'

type Props = {}

const HomeTrending: FC<Props> = () => (
  <div className={classes.container}>
    <CreatePost />
    <Feed trending />
  </div>
)

export default HomeTrending
