import { graphql } from '@/lib/graphql/codegen/index'
import { gql } from '@apollo/client'

export const get5LatestSignups = graphql(/* GraphQL */ `
  query Get5LatestSignups {
    get5LatestSignups {
      username
      referredBy {
        username
      }
    }
  }
`)

export const getTop100UsersByPoints = graphql(/* GraphQL */ `
  query GetTop100UsersByPoints {
    getTop100UsersByPoints {
      username
      points {
        total
      }
      referredBy {
        username
      }
    }
  }
`)

export const getNumberOfUsers = graphql(/* GraphQL */ `
  query GetNumberOfUsers {
    getNumberOfUsers
  }
`)

export const getPreSignUpData = graphql(/* GraphQL */ `
  query GetPreSignUpData {
    getTop100UsersByPoints {
      username
      twitterHandle
      referredBy {
        username
      }
      points {
        total
      }
    }
    get5LatestSignups {
      username
      createdAt
      twitterHandle
      referredBy {
        username
      }
    }
    getNumberOfUsers
    getSelf {
      username
      walletAddress
      referralCode
      twitterHandle
      email
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

export const getSelf = graphql(`
  query GetSelf {
    getSelf {
      username
      walletAddress
      referralCode
      twitterHandle
      email
      uid
      points {
        total
        directReferrals
        layer2Referrals
        layer3Referrals
        layer4Referrals
      }
      bio
      seeker {
        about
        links
      }

      solver {
        about
        currentAvailability
        portfolioLinks
        skills
      }
      location {
        city
        continent
        country
      }
    }
  }
`)

// MAIN BEFORE USER ENTERS PROFILE PAGE
export const getSelfUser = graphql(`
  query GetSelfUser {
    getSelf {
      _id
      username
      profileImage
      displayName
      nftId
    }
  }
`)

export const getSelfForLogin = graphql(/* GraphQL */ `
  query GetSelfForLogin {
    getSelf {
      username
    }
  }
`)

export const getSelfSeeker = graphql(`
  query GetSelfSeeker {
    getSelfSeeker {
      about
      links
    }
  }
`)

export const getSelfSolver = graphql(`
  query GetSelfSolver {
    getSelfSolver {
      about
      currentAvailability
      portfolioLinks
      skills
    }
  }
`)

// export const getSelfProfile = graphql(/* GraphQL */ `
//   query GetSelfProfile {
//     getSelf {
//       _id
//       bio
//       createdAt
//       discord
//       displayName
//       email
//       github
//       interests
//       linkedin
//       location {
//         city
//         continent
//         country
//       }
//       nftId
//       profileBanner
//       profileImage
//       referralCode
//       telegram
//       twitterHandle
//       username
//       walletAddress
//       website
//       zkMeId
//     }
//   }
// `)

export const getSelfProfile = graphql(/* GraphQL */ `
  query GetSelfProfile {
    getSelf {
      _id
      bio
      createdAt
      discord
      displayName
      email
      follows {
        _id
      }
      github
      interests
      linkedin
      location {
        city
        continent
        country
      }
      nftId
      profileBanner
      profileImage
      referralCode
      telegram
      twitterHandle
      username
      walletAddress
      website
      zkMeId
      followers {
        _id
      }
    }
  }
`)

export const getSelfCompletionCheck = graphql(`
  query GetSelfCompletionCheck {
    getSelf {
      _id
      nftId
    }
  }
`)
