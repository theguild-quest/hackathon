'use client'

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState
} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrowDownIcon from '@/assets/arrow-down.svg'
import Typography from '@/components/atoms/Typography'
import Input from '@/components/atoms/Input'
import image from '@/assets/image.svg'
import XIcon from '@/assets/X.svg'
import linkedInIcon from '@/assets/LinkedIn-Negative.svg'
import discordIcon from '@/assets/Discord-Negative.svg'
import githubIcon from '@/assets/Github.svg'
import telegramIcon from '@/assets/telegramIcon.svg'
import { useMutation, useQuery } from '@apollo/client'
import { getAccountInformation } from '@/lib/graphql/queries/profile'
import { enqueueSnackbar } from 'notistack'
import { editAccountInformation } from '@/lib/graphql/mutations/profile'
import { verifySocialMediaLink, verifyURL } from '@/utils/helpers/verification'
import classes from './page.module.sass'
import ProfileButton from '@/components/atoms/ProfileButton'
import RepositionImage from '@/components/organisms/RepositionImage'
import loadingGif from '@/assets/pre-signup/guild_gif.gif'
import CustomSelect, {
  Option
} from '@/components/atoms/CustomSelect/CustomSelect'

const ProfileSettingsAccountInformation = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileImage] = useState({
    original: '',
    repositioned: ''
  })
  const [profileBanner, setProfileBanner] = useState({
    original: '',
    repositioned: ''
  })

  const [selectedOptions, setSelectedOptions] = useState<Option[] | null>(null)

  const handleSelectChange = (newSelectedOptions: Option[]) => {
    setSelectedOptions(newSelectedOptions)
  }

  const { data: res, loading, error } = useQuery(getAccountInformation)

  const [accountInfoData, setAccountInfoData] = useState({
    displayName: '',
    username: '',
    location: {
      city: '',
      country: '',
      continent: ''
    },
    walletAddress: '',
    bio: '',
    interests: [],
    website: '',
    linkedin: '',
    discord: '',
    github: '',
    telegram: ''
  })

  useEffect(() => {
    if (res && res.getSelf) {
      const {
        displayName,
        username,
        profileBanner,
        location,
        walletAddress,
        bio,
        interests,
        profileImage,
        website,
        linkedin,
        discord,
        github,
        telegram
      } = res.getSelf

      setAccountInfoData({
        displayName: displayName!,
        username: username!,
        location: location!,
        walletAddress: walletAddress!,
        bio: bio!,
        // profileImage: profileImage,
        // profileBanner: profileBanner,
        //@ts-ignore
        interests: interests || [],
        website: website!,
        linkedin: linkedin!,
        discord: discord!,
        github: github!,
        telegram: telegram!
      })

      if (interests?.length && interests.every((interest) => !!interest)) {
        const defaultSelectedOptions = interests?.map((skill) => ({
          value: skill!,
          label: skill!
        }))
        setSelectedOptions(defaultSelectedOptions)
      }

      setProfileImage(
        profileImage
          ? {
              original: profileImage,
              repositioned: profileImage
            }
          : {
              original: '',
              repositioned: ''
            }
      )
      setProfileBanner(
        profileBanner
          ? {
              original: profileBanner,
              repositioned: profileBanner
            }
          : {
              original: '',
              repositioned: ''
            }
      )
    }
  }, [res])

  const profileInputRef = useRef<HTMLInputElement>(null)
  const bannerInputRef = useRef<HTMLInputElement>(null)

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setAccountInfoData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateFields = () => {
    let isValid = true

    // if (!!accountInfoData.website) {
    //   const isValidWebsite = verifyURL(accountInfoData.website)
    //   if (!isValidWebsite) {
    //     enqueueSnackbar('Please enter a valid website URL', {
    //       variant: 'error'
    //     })
    //     isValid = false
    //   }
    // }

    const socialMediaFields = [
      'twitterHandle',
      'linkedin',
      'discord',
      'github',
      'telegram'
    ]

    socialMediaFields.forEach((field) => {
      const value = accountInfoData[
        field as keyof typeof accountInfoData
      ] as string
      if (!!value && !verifySocialMediaLink(field, value)) {
        enqueueSnackbar(`Please enter a valid ${field} URL`, {
          variant: 'error'
        })
        isValid = false
      }
    })

    return isValid
  }

  const handleImageClick = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.click()
    }
  }

  const handleProfileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      const image = URL.createObjectURL(selectedFile)
      setProfileImage({
        original: image,
        repositioned: image
      })
    }
  }

  const handleProfileBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      const image = URL.createObjectURL(selectedFile)
      setProfileBanner({
        original: image,
        repositioned: image
      })
    }
  }

  console.log(selectedOptions)

  const [editAccountInfo] = useMutation(editAccountInformation)

  const editAccountInfoSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isFormValid = validateFields()

    if (isFormValid) {
      const formData = new FormData(event.currentTarget)

      // let profileImageFile, profileBannerFile

      // if (profileImage.repositioned) {
      //   const profileImageResult = await fetch(profileImage.repositioned)
      //   const profileImageBlob = await profileImageResult.blob()

      //   profileImageFile = new File(
      //     [profileImageBlob],
      //     'image.' + profileImageBlob.type.split('/')[1],
      //     {
      //       type: profileImageBlob.type
      //     }
      //   )
      // }

      // if (profileBanner.repositioned) {
      //   const profileBannerResult = await fetch(profileBanner.repositioned)
      //   const profileBannerBlob = await profileBannerResult.blob()

      //   profileBannerFile = new File(
      //     [profileBannerBlob],
      //     'image.' + profileBannerBlob.type.split('/')[1],
      //     {
      //       type: profileBannerBlob.type
      //     }
      //   )
      // }

      // const profileBannerResult = await fetch(profileBanner.repositioned)
      // const profileBannerBlob = await profileBannerResult.blob()

      const [
        displayName,
        username,
        location,
        bio,
        profileImageForm,
        profileBannerForm,
        website,
        linkedin,
        discord,
        github,
        telegram
      ] = [
        formData.get('displayName') as string,
        formData.get('username') as string,
        formData.get('location') as string,
        formData.get('bio') as string,
        formData.get('profileImage') as File,
        formData.get('profileBanner') as File,
        formData.get('website') as string,
        formData.get('linkedin') as string,
        formData.get('discord') as string,
        formData.get('github') as string,
        formData.get('telegram') as string
      ]

      try {
        setIsLoading(true)
        const response = await editAccountInfo({
          variables: {
            displayName,
            userName: username,
            bio,
            // location,
            profileImageFile: profileImageForm ?? null,
            profileBannerFile: profileBannerForm ?? null,
            // profileImageFile: profileImageFile ?? profileImage ?? null,
            // profileBannerFile: profileBannerFile ?? profileBanner ?? null,
            interests: selectedOptions?.map((option) => option.value),
            website,
            linkedin,
            discord,
            github,
            telegram
          }
        })

        enqueueSnackbar('Your account was edited successfully!', {
          variant: 'success'
        })

        console.log('response', response)

        setIsLoading(false)
      } catch (error) {
        console.log('error', error)
        setIsLoading(false)
      }
    }
  }

  return (
    <div className={classes.accountInformationContainer}>
      {loading ? (
        <div className={classes.loadingContainer}>
          <Image src={loadingGif} alt="loading-gif" />
        </div>
      ) : (
        <form onSubmit={editAccountInfoSubmit} className={classes.content}>
          <div className={classes.arrowBlock}>
            <Link href="/profile/settings">
              <Image
                className={classes.arrowBack}
                src={arrowDownIcon}
                alt="arrow-back"
              />
            </Link>
            <Typography
              style={{ marginLeft: '20%' }}
              weight="medium"
              variant="bodyL"
            >
              Account Information
            </Typography>
          </div>

          <Input
            className={classes.input}
            currChars={accountInfoData.displayName?.length.toString()}
            maxChars="/20"
            labelText="Display Name"
            id="displayName"
            name="displayName"
            value={accountInfoData.displayName}
            onChange={handleInput}
          />

          {/* {accountInfoData.twitterHandle ? (
            <Input
              className={cx(classes.input, classes.disabledInput)}
              labelText="X Account"
              id="twitterHandle"
              name="twitterHandle"
              value={accountInfoData.twitterHandle || '-'}
              disabled
            />
          ) : (
            <Input
              className={cx(classes.input, classes.disabledInput)}
              labelText="Email Address"
              id="email"
              name="email"
              value={accountInfoData.email || '-'}
              onChange={handleInput}
              disabled
            />
          )} */}
          <Input
            className={classes.input}
            currChars={accountInfoData.username?.length.toString()}
            maxChars="/20"
            labelText="Username"
            id="username"
            name="username"
            value={accountInfoData.username}
            onChange={handleInput}
          />
          {/* <Input
            className={cx(classes.input, classes.disabledInput)}
            labelText="ZKme MeID"
            id="zkMeId"
            name="zkMeId"
            value={accountInfoData.zkMeId || '-'}
            disabled
          /> */}
          <Input
            className={classes.input}
            labelText="Location"
            id="location"
            name="location"
            value={
              accountInfoData.location &&
              Object.values(accountInfoData.location)
                .filter((value) => value !== null && value !== undefined)
                .join(', ')
            }
            disabled
          />

          <Input
            className={classes.input}
            labelText="Connected Wallet"
            value={
              accountInfoData.walletAddress
                ? `${accountInfoData.walletAddress}`
                : 'Connect Wallet'
            }
            disabled
          />

          <Input
            className={classes.textarea}
            placeholder="Enter your bio"
            isTextarea
            labelText="Bio"
            currChars={accountInfoData.bio?.length.toString()}
            maxChars="/200"
            value={accountInfoData.bio}
            id="bio"
            name="bio"
            onChange={handleInput}
          />
          <div className={classes.profileContainer}>
            <div className={classes.profileImageBlock}>
              <Typography className={classes.title} variant="bodyL">
                Profile Image
              </Typography>
              <Typography
                className={classes.greyTitle}
                color="grey"
                variant="bodyM"
              >
                Recommended 350px x 350px. Max size: 5MB
              </Typography>
              <div className={classes.imageBlock}>
                <div className={classes.image}>
                  {profileImage.repositioned ? (
                    <Image
                      alt="image"
                      src={profileImage.repositioned}
                      quality={100}
                      fill
                      objectFit="cover"
                    />
                  ) : (
                    <Image alt="image" src={image} />
                  )}
                </div>
                <div className={classes.uploadBlock}>
                  <div>
                    <input
                      type="file"
                      id="profileImage"
                      name="profileImage"
                      ref={profileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleProfileImageChange}
                      accept="image/*"
                    />
                    <button
                      type="button"
                      className={classes.uploadMediaButton}
                      onClick={() => handleImageClick(profileInputRef)}
                    >
                      <Typography color="pastel" inherited variant="bodyL">
                        Upload Media
                      </Typography>
                    </button>
                  </div>
                  <RepositionImage
                    save={(url) =>
                      setProfileImage({ ...profileImage, repositioned: url })
                    }
                    profileImage={profileImage.original}
                  />
                </div>
              </div>
            </div>
            <div className={classes.profileImageBlock}>
              <Typography className={classes.title} variant="bodyL">
                Profile Banner
              </Typography>
              <Typography
                className={classes.greyTitle}
                color="grey"
                variant="bodyM"
              >
                Recommended 1600px x 300px. Max size: 5MB
              </Typography>
              <div
                style={{ flexDirection: 'column' }}
                className={classes.imageBlock}
              >
                <div className={classes.profileBannerImage}>
                  {profileBanner.repositioned ? (
                    <Image
                      alt="image"
                      src={profileBanner.repositioned}
                      fill
                      objectFit="cover"
                    />
                  ) : (
                    <Image alt="image" src={image} />
                  )}
                </div>

                <div
                  style={{ flexDirection: 'row' }}
                  className={classes.uploadBlock}
                >
                  <div>
                    <input
                      type="file"
                      id="profileBanner"
                      name="profileBanner"
                      ref={bannerInputRef}
                      style={{ display: 'none' }}
                      onChange={handleProfileBannerChange}
                      accept="image/*"
                    />
                    <button
                      type="button"
                      style={{ marginTop: 0 }}
                      className={classes.uploadMediaButton}
                      onClick={() => handleImageClick(bannerInputRef)}
                    >
                      <Typography color="pastel" inherited variant="bodyL">
                        Upload Media
                      </Typography>
                    </button>
                  </div>

                  <RepositionImage
                    save={(url) =>
                      setProfileBanner({ ...profileBanner, repositioned: url })
                    }
                    profileImage={profileBanner.original}
                    isBanner
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.connectBlock}>
            {/* <Input
              className={classes.input}
              currChars="Max 10"
              labelText="Interests"
              id="interests"
              name="interests"
              value={accountInfoData.interests?.toString()}
              onChange={handleInput}
            /> */}
            <CustomSelect
              isMulti
              options={[
                {
                  value: 'Web Development',
                  label: 'Web Development'
                },
                {
                  value: 'Mobile App Development',
                  label: 'Mobile App Development'
                },
                {
                  value: 'Data Science',
                  label: 'Data Science'
                },
                {
                  value: 'Blockchain',
                  label: 'Blockchain'
                },
                {
                  value: 'UI/UX Design',
                  label: 'UI/UX Design'
                }
              ]}
              selectedOptions={selectedOptions}
              onSelectChange={handleSelectChange}
              placeholder="+ Add interests"
              labelText1="Interests"
            />
            <Input
              className={classes.input}
              labelText="Website"
              id="website"
              name="website"
              value={accountInfoData.website}
              onChange={handleInput}
            />
            <div className={classes.connectLinks}>
              <Typography className={classes.connectTitle} variant="h3">
                Connect your social media
              </Typography>
              {/* <div className={classes.link}>
                <div className={classes.icon}>
                  <Image alt="image" src={XIcon} />
                </div>
                <Input
                  className={classes.input}
                  placeholder="Enter your X account"
                  id="twitterHandle"
                  name="twitterHandle"
                  value={accountInfoData.twitterHandle}
                  onChange={handleInput}
                />
              </div> */}
              <div className={classes.link}>
                <div className={classes.icon}>
                  <Image alt="image" src={linkedInIcon} />
                </div>
                <Input
                  className={classes.input}
                  placeholder="Enter your LinkedIn account"
                  id="linkedin"
                  name="linkedin"
                  value={accountInfoData.linkedin}
                  onChange={handleInput}
                />
              </div>
              <div className={classes.link}>
                <div className={classes.icon}>
                  <Image alt="image" src={discordIcon} />
                </div>
                <Input
                  className={classes.input}
                  placeholder="Enter your Discord account"
                  id="discord"
                  name="discord"
                  value={accountInfoData.discord}
                  onChange={handleInput}
                />
              </div>
              <div className={classes.link}>
                <div className={classes.icon}>
                  <Image alt="image" src={githubIcon} />
                </div>
                <Input
                  className={classes.input}
                  placeholder="Enter your Github account"
                  id="github"
                  name="github"
                  value={accountInfoData.github}
                  onChange={handleInput}
                />
              </div>
              <div className={classes.link}>
                <div className={classes.icon}>
                  <Image alt="image" src={telegramIcon} />
                </div>
                <Input
                  className={classes.input}
                  placeholder="Enter your Telegram account"
                  id="telegram"
                  name="telegram"
                  value={accountInfoData.telegram}
                  onChange={handleInput}
                />
              </div>
            </div>
            <ProfileButton
              style={{ marginTop: '20px' }}
              variantButton="secondary"
              color="dark"
              weight="semibold"
              pressed={false}
              size="big"
              variant="bodyL"
              type="submit"
              disabled={isLoading}
            >
              Save
            </ProfileButton>
          </div>
        </form>
      )}
    </div>
  )
}

export default ProfileSettingsAccountInformation
