import { ReactNode } from 'react'

export const CUSTOM_ERROR_CODES = {
  USERNAME_ALREADY_IN_USE: 'auth/username-already-in-use'
}

const scheme = {
  default: 'Something went wrong. Try again later.',
  'auth/email-already-in-use': 'Email already exists. Try logging in.',
  'auth/invalid-credential': 'Invalid login credentials.',
  'auth/account-exists-with-different-credential':
    'Account exists with different credentials. Please log in with different method.',
  // CUSTOM ERROR MESSAGES (NOT FROM FIREBASE)
  'auth/username-already-in-use': (
    <>
      Username should be at least 3 characters long.
      <br /> Use only letters, numbers and "_"
    </>
  )
} as { [key: string]: string | ReactNode }

export const parseErrorByCode = (code: string = 'default') => {
  if (scheme.hasOwnProperty(code)) return scheme[code]
  else return scheme.default
}
