import Button from '@/components/atoms/Button'
import UserProfileIcon from '@/components/atoms/UserProfileIcon'
import searchIcon from '@/assets/icons/search.svg'
import Image from 'next/image'
import Typography from '@/components/atoms/Typography'
import userProfile from '@/assets/user_profile_picture.jpg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import closeIcon from '@/assets/icons/close.svg'
import classes from './ViaDirectMessage.module.sass'

type User = {
  username: string
  userPicture: StaticImport
  userTag: string
}

const users: User[] = [
  { username: 'The ARK', userTag: 'theark123', userPicture: userProfile },
  { username: 'UserXuser', userTag: 'theark123', userPicture: userProfile },
  { username: 'Olana Dada', userTag: 'dadalana', userPicture: userProfile },
  { username: 'The ARK', userTag: 'theark123', userPicture: userProfile },
  { username: 'The ARK', userTag: 'theark123', userPicture: userProfile },
  { username: 'The ARK', userTag: 'theark123', userPicture: userProfile },
  { username: 'The ARK', userTag: 'theark123', userPicture: userProfile },
  { username: 'The ARK', userTag: 'theark123', userPicture: userProfile },
  { username: 'The ARK', userTag: 'theark123', userPicture: userProfile },
  { username: 'The ARK', userTag: 'theark123', userPicture: userProfile }
]

const selectedUsers: User[] = [
  { username: 'The ARK', userTag: 'theark123', userPicture: userProfile },
  { username: 'UserXuser', userTag: 'theark123', userPicture: userProfile },
  { username: 'Olana Dada', userTag: 'dadalana', userPicture: userProfile }
]

export default function ViaDirectMessage() {
  return (
    <div className={classes.viaDirectMessage}>
      <div className={classes.content}>
        <div className={classes.searchBlock}>
          <div className={classes.searchInputContainer}>
            <Image
              src={searchIcon}
              alt="search-icon"
              className={classes.searchIcon}
            />
            <input
              placeholder="Search people"
              className={classes.searchInput}
            />
          </div>
          {selectedUsers && selectedUsers?.length > 0 && (
            <div className={classes.selectedUsers}>
              {selectedUsers?.map((user) => (
                <div key={user.username} className={classes.selectedUser}>
                  <Typography className={classes.userTag}>
                    @{user?.userTag}
                  </Typography>
                  <Image src={closeIcon} alt="remove-icon" />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={classes.separator} />
        <div className={classes.users}>
          {users?.map((user) => (
            <div className={classes.user}>
              <div className={classes.userInfo}>
                <UserProfileIcon profilePicture={user.userPicture} />
                <div className={classes.userInfoDetails}>
                  <Typography className={classes.username}>
                    {user.username}
                  </Typography>
                  <Typography className={classes.userTag}>
                    @{user.userTag}
                  </Typography>
                </div>
              </div>
              <div>
                {/* !TODO - handle checkmark */}
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={classes.check}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={classes.separator} />
        <div className={classes.footer}>
          <div className={classes.messageCommentBlock}>
            <input
              placeholder="Add a comment"
              className={classes.messageCommentInput}
            />
            <Typography variant="bodyM" className={classes.count}>
              <span className={classes.countVal}>0</span>/400
            </Typography>
          </div>
          <Button variant="bodyXL" className={classes.sendButton}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
