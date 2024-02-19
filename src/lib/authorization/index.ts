import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../firebase'
import { UserCredential } from 'firebase/auth'
import { signOut } from '../firebase/auth'

type ReturnType =
  | {
      status: string
      payload: UserCredential
      signInMethod: string
    }
  | {
      status: string
      payload: any
      signInMethod?: undefined
    }

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)

    return {
      status: 'success',
      payload: response,
      //@ts-ignore
      signInMethod: 'email'
    } as ReturnType
  } catch (error: any) {
    signOut()
    return { status: 'error', payload: error } as ReturnType
  }
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  try {
    const response = await signInWithPopup(auth, provider)

    return {
      status: 'success',
      payload: response,
      //@ts-ignore
      signInMethod: 'google'
    } as ReturnType
  } catch (error: any) {
    signOut()
    return { status: 'error', payload: error } as ReturnType
  }
}

export const signInWithTwitter = async () => {
  const provider = new TwitterAuthProvider()
  try {
    const response = await signInWithPopup(auth, provider)

    return {
      status: 'success',
      payload: response,
      //@ts-ignore
      signInMethod: 'twitter'
    } as ReturnType
  } catch (error: any) {
    signOut()
    return { status: 'error', payload: error } as ReturnType
  }
}

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)

    return {
      status: 'success',
      payload: response,
      //@ts-ignore
      signInMethod: 'email'
    } as ReturnType
  } catch (error: any) {
    signOut()
    return { status: 'error', payload: error } as ReturnType
  }
}
