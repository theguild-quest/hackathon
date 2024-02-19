import { emailRegExp, socialMediaRegexExps, usernameRegExp } from '../constants'

export const verifyEmail = (email: string) =>
  email.toLowerCase().match(emailRegExp)

export const verifyLoginCredentials = (
  email: string,
  password: string
): string | '' => {
  const errorMessage = 'Invalid email or password'
  if (!email.trim().length || !password.trim().length) {
    return errorMessage
  }
  if (!verifyEmail(email)) {
    return errorMessage
  }
  return ''
}

export const verifyUsername = (username: string) =>
  usernameRegExp.test(username)

export const verifyPassword = (password: string, confirmPassword: string) => {
  if (password.trim().length < 6) {
    return 'Password is too short. At least 6 characters'
  }
  if (password.trim() !== confirmPassword.trim()) {
    return 'Passwords do not match'
  }
  return ''
}

export const verifyURL = (url: string): boolean => {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
  return urlRegex.test(url)
}

export const verifySocialMediaLink = (
  platform: string,
  value: string
): boolean => socialMediaRegexExps[platform].test(value)
