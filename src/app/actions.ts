'use server'
import { cookies } from 'next/headers'

export const cookieLogger = () => {
  // REMEMBER logging will be in your terminal because it's calling on server side so check your terminal in which you've started the application
  const allCookies = cookies().getAll()
  console.log('SERVER', allCookies)

  // IF EVERYTHING IS WORKING FOR YOU
  // CHECK OUT THIS PATH TO DELETE COOKIES src / lib / firebase / auth.ts

  // FOR further development:
  // If you want to delete a specific cookie => cookies().delete("name")
  // If you want to get a specific cookie => cookies().get("name")
  // If you want to set a specific cookie => cookies().set("name", value, options? {maxAge,etc. \check docs\ })
}

export const getSessionCookie = () => {
  const nextCookies = cookies()
  if (nextCookies.get('session')) return true
  return false
}

export const deleteSessionCookie = async () => {
  console.log('STARTING TO DELETE')
  const nextCookies = cookies()
  nextCookies.delete('session')
  console.log('AFTER DELETE', cookies())
  if (!cookies().get('session')) return true
  return false
}
