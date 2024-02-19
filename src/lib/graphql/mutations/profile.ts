import { graphql } from '@/lib/graphql/codegen/index'

export const CreateWallet = graphql(/* GraphQL */ `
  mutation CreateWallet {
    createWallet {
      walletAddress
    }
  }
`)

export const editAccountInformation = graphql(/* GraphQL */ `
  mutation EditAccountInformation(
    $displayName: String
    $userName: String
    $location: LocationInput
    $bio: String
    $profileImageFile: File
    $profileBannerFile: File
    $interests: [String]
    $website: String
    $linkedin: String
    $discord: String
    $github: String
    $telegram: String
  ) {
    editAccountInformation(
      displayName: $displayName
      # twitterHandle: $twitterHandle
      # email: $email
      userName: $userName
      location: $location
      bio: $bio
      profileImageFile: $profileImageFile
      profileBannerFile: $profileBannerFile
      interests: $interests
      website: $website
      linkedin: $linkedin
      discord: $discord
      github: $github
      telegram: $telegram
    ) {
      _id
    }
  }
`)

export const editSolverInformation = graphql(/* GraphQL */ `
  mutation EditSolverInformation(
    $skills: [String]
    $portfolioLinks: [String]
    $currentAvailability: Boolean
    $about: String
  ) {
    editSolverInformation(
      skills: $skills
      portfolioLinks: $portfolioLinks
      currentAvailability: $currentAvailability
      about: $about
    ) {
      currentAvailability
    }
  }
`)

export const editSeekerInformation = graphql(/* GraphQL */ `
  mutation EditSeekerInformation($links: [String], $about: String) {
    editSeekerInformation(links: $links, about: $about) {
      about
    }
  }
`)

export const editNotificationSettings = graphql(/* GraphQL */ `
  mutation EditNotificationSettings(
    $jobEmailSettings: JobEmailNotificationsInput
    $socialAppSettings: SocialAppNotificationsInput
    $socialEmailSettings: SocialEmailNotificationsInput
  ) {
    editNotificationSettings(
      jobEmailSettings: $jobEmailSettings
      socialAppSettings: $socialAppSettings
      socialEmailSettings: $socialEmailSettings
    ) {
      jobEmailNotifications {
        directMessages
        jobProposals
        jobStatusUpdates
        levelUpPlatformLevel
        levelUpReferralNftTier
        newJobPostings
        newReviews
        xpGained
      }
      socialAppNotifications {
        comments
        directMessages
        likes
        mentions
        messageRequests
        newFollowers
        reposts
      }
      socialEmailNotifications {
        comments
        directMessages
        likes
        mentions
        messageRequests
        newFollowers
        reposts
      }
    }
  }
`)
