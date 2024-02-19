import { create } from 'zustand'
import { User as UserType } from '@/lib/graphql/codegen/graphql'

type State = UserType

type Action = {
  updateUser: (user: State) => void
}

export const useUserState = create<State & Action>((set) => ({
  _id: '',
  bio: null,
  createdAt: null,
  discord: null,
  displayName: null,
  disputes: null,
  email: null,
  evidences: null,
  followers: null,
  follows: null,
  github: null,
  interests: null,
  linkedin: null,
  location: null,
  nftId: null,
  notificationSettings: null,
  points: null,
  posts: null,
  profileBanner: null,
  profileImage: null,
  referralCode: null,
  referredBy: null,
  seeker: null,
  solver: null,
  telegram: null,
  twitterHandle: null,
  uid: '',
  username: '',
  walletAddress: null,
  website: null,
  zkMeId: null,
  updateUser: (user: State) => set((state) => ({ ...state, ...user }))
}))
