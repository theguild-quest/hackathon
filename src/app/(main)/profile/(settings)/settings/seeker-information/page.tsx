'use client'

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import classes from './page.module.sass'
import Input from '@/components/atoms/Input'
import Typography from '@/components/atoms/Typography'
import ProfileButton from '@/components/atoms/ProfileButton'
import arrowDownIcon from '@/assets/arrow-down.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useMutation, useQuery } from '@apollo/client'
import { getSeekerInformation } from '@/lib/graphql/queries/profile'
import { editSeekerInformation } from '@/lib/graphql/mutations/profile'
import { enqueueSnackbar } from 'notistack'
import { verifyURL } from '@/utils/helpers/verification'
import loadingGif from '@/assets/pre-signup/guild_gif.gif'

type ProfileSeekerInformationData = {
  links: string[]
  about: string
}

const ProfileSeekerInformation = () => {
  const [isLoading, setIsLoading] = useState(false)

  const maxNumberOfLinks = 5

  const { data: res, loading, error } = useQuery(getSeekerInformation)

  console.log('profile res => ', res?.getSelfSeeker)

  const [seekerInfoData, setSeekerInfoData] =
    useState<ProfileSeekerInformationData>({
      links: [],
      about: ''
    })

  useEffect(() => {
    if (res && res.getSelfSeeker) {
      const { links, about } = res.getSelfSeeker

      setSeekerInfoData({
        // @ts-ignore
        links: links || [],
        about: about!
      })
    }
  }, [res])

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setSeekerInfoData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateFields = () => {
    let isValid = true

    seekerInfoData.links.forEach((link) => {
      if (!verifyURL(link)) {
        enqueueSnackbar('Please enter a valid website URL', {
          variant: 'error'
        })
        isValid = false
      }
    })

    return isValid
  }

  const [editSeekerInfo] = useMutation(editSeekerInformation)

  const editSeekerInfoSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isFormValid = validateFields()

    if (isFormValid) {
      const formData = new FormData(event.currentTarget)

      const links: string[] = []

      for (let i = 1; i <= 5; i++) {
        const link = formData.get(`link${i}`) as string
        if (link.trim() !== '') {
          links.push(link)
        }
      }

      const [about] = [formData.get('about') as string]

      console.log('req', { links, about })

      try {
        setIsLoading(true)
        const response = await editSeekerInfo({
          variables: {
            links,
            about
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
    <div className={classes.seekerInformationContainer}>
      {loading ? (
        <div className={classes.loadingContainer}>
          <Image src={loadingGif} alt="loading-gif" />
        </div>
      ) : (
        <form onSubmit={editSeekerInfoSubmit} className={classes.content}>
          <div className={classes.contentBlock}>
            <div className={classes.content}>
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
                  Seeker Information
                </Typography>
              </div>
              <Input
                className={classes.textarea}
                isTextarea={true}
                currChars={seekerInfoData.about?.length.toString()}
                maxChars="/1500"
                labelText="About Seeker"
                placeholder="Enter your bio"
                id="about"
                name="about"
                value={seekerInfoData.about}
                onChange={handleInput}
              />
            </div>
            <div className={classes.links}>
              <Typography className={classes.title} variant="h3">
                Links
              </Typography>
              {[...Array(maxNumberOfLinks)].map((_, index) => (
                <Input
                  key={index}
                  className={classes.input}
                  placeholder="Link"
                  id={`link${index + 1}`}
                  name={`link${index + 1}`}
                  value={seekerInfoData.links[index] || ''}
                  onChange={(e) => {
                    const newValue = e.target.value
                    setSeekerInfoData((prevState) => ({
                      ...prevState,
                      links: [
                        ...prevState.links.slice(0, index),
                        newValue,
                        ...prevState.links.slice(index + 1)
                      ]
                    }))
                  }}
                />
              ))}
            </div>
          </div>
          <ProfileButton
            className={classes.button}
            variant="bodyL"
            color="dark"
            weight="semibold"
            variantButton="secondary"
            size="big"
            type="submit"
            disabled={isLoading}
          >
            Save
          </ProfileButton>
        </form>
      )}
    </div>
  )
}

export default ProfileSeekerInformation
