'use client'

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import arrowDownIcon from '@/assets/arrow-down.svg'
import classes from './page.module.sass'
import Input from '@/components/atoms/Input'
import ProfileButton from '@/components/atoms/ProfileButton'
import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import Link from 'next/link'
import Toggle from '@/components/atoms/Toggle'
import { useMutation, useQuery } from '@apollo/client'
import { getSolverInformation } from '@/lib/graphql/queries/profile'
import { enqueueSnackbar } from 'notistack'
import { verifyURL } from '@/utils/helpers/verification'
import { editSolverInformation } from '@/lib/graphql/mutations/profile'
import CustomSelect from '@/components/atoms/CustomSelect'
import { Option } from '@/components/atoms/CustomSelect/CustomSelect'
import loadingGif from '@/assets/pre-signup/guild_gif.gif'

const ProfileSolverInformation = () => {
  const [isLoading, setIsLoading] = useState(false)

  const maxNumberOfPortfolioLinks = 5
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const handleSelectChange = (newSelectedOptions: Option[]) => {
    setSelectedOptions(newSelectedOptions)
  }

  const { data: res, loading, error } = useQuery(getSolverInformation)

  const [solverInfoData, setSolverInfoData] = useState<{
    portfolioLinks: string[]
    skills: string[]
    currentAvailability: boolean
    about: string
  }>({
    skills: [],
    portfolioLinks: [],
    currentAvailability: false,
    about: ''
  })

  useEffect(() => {
    if (res && res.getSelfSolver) {
      const { skills, portfolioLinks, currentAvailability, about } =
        res.getSelfSolver

      setSolverInfoData({
        //@ts-ignore
        skills: skills || [],
        //@ts-ignore
        portfolioLinks: portfolioLinks || [],
        currentAvailability: currentAvailability!,
        about: about!
      })

      if (skills) {
        const defaultSelectedOptions = skills?.map((skill) => ({
          value: skill!,
          label: skill!
        }))
        setSelectedOptions(defaultSelectedOptions)
      }
    }
  }, [res])

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setSolverInfoData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateFields = () => {
    let isValid = true

    // solverInfoData.portfolioLinks.forEach((link) => {
    //   if (!verifyURL(link)) {
    //     enqueueSnackbar('Please enter a valid website URL', {
    //       variant: 'error'
    //     })
    //     isValid = false
    //   }
    // })

    return isValid
  }

  const [editSolverInfo] = useMutation(editSolverInformation)

  const editSolverInfoSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isFormValid = validateFields()

    if (isFormValid) {
      const formData = new FormData(event.currentTarget)

      const skills = selectedOptions?.map((item) => item.value)
      const portfolioLinks: string[] = []

      for (let i = 1; i <= 5; i++) {
        const link = formData.get(`portfolioLink${i}`) as string
        if (link.trim() !== '') {
          portfolioLinks.push(link)
        }
      }

      const currentAvailability = solverInfoData.currentAvailability
      const [about] = [formData.get('about') as string]

      try {
        setIsLoading(true)
        const response = await editSolverInfo({
          variables: {
            skills,
            portfolioLinks,
            currentAvailability,
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
    <div className={classes.solverInformationContainer}>
      {loading ? (
        <div className={classes.loadingContainer}>
          <Image src={loadingGif} alt="loading-gif" />
        </div>
      ) : (
        <form onSubmit={editSolverInfoSubmit} className={classes.content}>
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
                  Solver Information
                </Typography>
              </div>
              <div className={classes.availabilityBlock}>
                <Typography className={classes.title} variant="bodyL">
                  Current availability
                </Typography>
                <div className={classes.toggle}>
                  <Toggle
                    checked={solverInfoData?.currentAvailability}
                    onChange={(checked) => {
                      setSolverInfoData((prevState) => ({
                        ...prevState,
                        currentAvailability: !!checked
                      }))
                    }}
                  />
                  <Typography variant="bodyS" color="primary">
                    Available to work
                  </Typography>
                </div>
                <Typography variant="bodyS">
                  Toggling this button changes your availability status on your
                  profile.
                </Typography>
              </div>
              <Input
                className={classes.textarea}
                isTextarea={true}
                currChars={solverInfoData.about?.length.toString()}
                maxChars="/1500"
                labelText="About Solver"
                placeholder="Enter your bio"
                id="about"
                name="about"
                value={solverInfoData.about}
                onChange={handleInput}
              />
              <CustomSelect
                isMulti
                options={[
                  {
                    value: 'Photoshop',
                    label: 'Photoshop'
                  },
                  {
                    value: 'Website design',
                    label: 'Website design'
                  },
                  {
                    value: 'Figma',
                    label: 'Figma'
                  },
                  {
                    value: 'Adobe XD',
                    label: 'Adobe XD'
                  },
                  {
                    value: 'UI Design',
                    label: 'UI Design'
                  }
                ]}
                selectedOptions={selectedOptions}
                onSelectChange={handleSelectChange}
                placeholder="+ Add skills"
                labelText1="Skills"
              />
            </div>
            <div className={classes.links}>
              <Typography className={classes.title} variant="h3">
                Portfolio Links
              </Typography>
              {[...Array(maxNumberOfPortfolioLinks)].map((_, index) => (
                <Input
                  key={index}
                  className={classes.input}
                  placeholder="Link"
                  id={`portfolioLink${index + 1}`}
                  name={`portfolioLink${index + 1}`}
                  value={solverInfoData.portfolioLinks[index] || ''}
                  onChange={(e) => {
                    const newValue = e.target.value
                    setSolverInfoData((prevState) => ({
                      ...prevState,
                      portfolioLinks: [
                        ...prevState.portfolioLinks.slice(0, index),
                        newValue,
                        ...prevState.portfolioLinks.slice(index + 1)
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

export default ProfileSolverInformation
