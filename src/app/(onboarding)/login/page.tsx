import { getSessionCookie } from '@/app/actions'
import LogInStep from './components/LogInStep'
import { redirect } from 'next/navigation'

export default async function Login() {
  if (getSessionCookie()) {
    redirect('/home')
  }
  return <LogInStep />
}
