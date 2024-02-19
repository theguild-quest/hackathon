import { create } from 'zustand'
import { User } from 'firebase/auth'

type State = {
  email: string
  password: string
  referralCode: string
  username: string
  signInMethod: '' | 'google' | 'twitter' | 'email'
  token: string
  user: User | null
  twitterHandle: string
  userTimezone: string
}

type Action = {
  updateEmail: (firstName: State['email']) => void
  updatePassword: (lastName: State['password']) => void
  updateUsername: (firstName: State['username']) => void
  updateReferralCode: (firstName: State['referralCode']) => void
  updateSignInMethod: (signInMethod: State['signInMethod']) => void
  updateTwitterHandle: (twitterHandle: State['twitterHandle']) => void
  updateUserTimezone: (userTimezone: State['userTimezone']) => void
  updateToken: (token: State['token']) => void
  updateUser: (user: State['user']) => void
}

export const useSignUpState = create<State & Action>((set) => ({
  email: '',
  password: '',
  referralCode: '',
  username: '',
  signInMethod: '',
  token: '',
  user: null,
  userTimezone: '',
  twitterHandle: '',
  updateTwitterHandle: (twitterHandle) => set(() => ({ twitterHandle })),
  updateEmail: (email) => set(() => ({ email })),
  updatePassword: (password) => set(() => ({ password })),
  updateUsername: (username) => set(() => ({ username })),
  updateReferralCode: (referralCode) => set(() => ({ referralCode })),
  updateSignInMethod: (signInMethod) => set(() => ({ signInMethod })),
  updateUserTimezone: (userTimezone) => set(() => ({ userTimezone })),
  updateToken: (token) => set(() => ({ token })),
  updateUser: (user: State['user']) => set(() => ({ user }))
}))
