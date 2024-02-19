import { graphql } from '@/lib/graphql/codegen/index'

export const Logout = graphql(`
  mutation Logout {
    logout
  }
`)

export const Register = graphql(/* GraphQL */ `
  mutation Register(
    $username: String!
    $referralCode: String
    $twitterHandle: String
    $idToken: String!
  ) {
    register(
      username: $username
      referralCode: $referralCode
      twitterHandle: $twitterHandle
      idToken: $idToken
    ) {
      uid
      username
    }
  }
`)

export const EditProfile = graphql(/* GraphQL */ `
  mutation EditProfile($walletAddress: String!) {
    editProfile(walletAddress: $walletAddress) {
      walletAddress
    }
  }
`)

export const LinkProvider = graphql(/* GraphQL */ `
  mutation LinkProvider($twitterHandle: String!) {
    link(twitterHandle: $twitterHandle) {
      twitterHandle
    }
  }
`)

export const CheckUsername = graphql(/* GraphQL */ `
  mutation CheckUsername($username: String!) {
    verifyUsername(username: $username)
  }
`)

export const CheckReferralCode = graphql(/* GraphQL */ `
  mutation CheckReferralCode($referralCode: String!) {
    verifyReferralCode(referralCode: $referralCode)
  }
`)

export const Login = graphql(/* GraphQL */ `
  mutation Login($idToken: String!) {
    login(idToken: $idToken) {
      _id
      displayName
      username
      profileImage
    }
  }
`)

export const CompleteProfile = graphql(/* GraphQL */ `
  mutation CompleteProfile($walletAddress: String!, $profileImageFile: File!) {
    completeProfile(
      profileImageFile: $profileImageFile
      walletAddress: $walletAddress
    ) {
      _id
      walletAddress
      zkMeId
    }
  }
`)

export const BlockUser = graphql(/* GraphQL */ `
  mutation BlockUser($userId: String!) {
    blockUser(userId: $userId) {
      _id
    }
  }
`)

export const UnblockUser = graphql(/* GraphQL */ `
  mutation UnblockUser($userId: String!) {
    unblockUser(userId: $userId) {
      _id
    }
  }
`)

export const FollowUser = graphql(/* GraphQL */ `
  mutation FollowUser($userId: String!) {
    followUser(userId: $userId) {
      _id
    }
  }
`)

export const UnfollowUser = graphql(/* GraphQL */ `
  mutation UnfollowUser($userId: String!) {
    unfollowUser(userId: $userId) {
      _id
    }
  }
`)
