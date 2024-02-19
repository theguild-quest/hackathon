import classes from './page.module.sass'
import CreatePost from '@/components/organisms/CreatePost'
import Feed from '@/components/organisms/Feed'

const Home = () => {
  return (
    <div className={classes.container}>
      <CreatePost />
      <Feed />
    </div>
  )
}

export default Home
