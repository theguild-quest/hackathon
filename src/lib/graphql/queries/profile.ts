import { graphql } from '@/lib/graphql/codegen/index'
import { gql } from '@apollo/client'

export const getAccountInformation = graphql(`
  query GetAccountInformation {
    getSelf {
      displayName
      email
      twitterHandle
      username
      walletAddress
      referralCode
      location {
        city
        country
        continent
      }
      bio
      zkMeId
      website
      linkedin
      discord
      github
      telegram
      interests
      profileImage
      profileBanner
      points {
        total
        directReferrals
        layer2Referrals
        layer3Referrals
        layer4Referrals
      }
    }
  }
`)

export const getSolverInformation = graphql(`
  query GetSolverInformation {
    getSelfSolver {
      skills
      portfolioLinks
      currentAvailability
      about
    }
  }
`)

export const getSeekerInformation = graphql(`
  query GetSeekerInformation {
    getSelfSeeker {
      about
      links
    }
  }
`)

export const getNotificationSettings = graphql(`
  query GetNotificationSettings {
    getNotificationSettings {
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

export const getBlockedUsersWithCount = graphql(`
  query GetBlockedUsersWithCount {
    getBlockedUsersWithCount {
      count
      blockedUsers {
        displayName
        username
        profileImage
      }
    }
  }
`)
export const getReferrals = gql`
  query GetReferrals($searchText: String) {
    getReferrals(searchText: $searchText) {
      directReferrals
      hasNext
      indirectReferrals
      layers {
        first {
          displayName
          profileImage
          username
        }
        second {
          displayName
          profileImage
          username
        }
        third {
          displayName
          profileImage
          username
        }
        fourth {
          displayName
          profileImage
          username
        }
      }
    }
  }
`
