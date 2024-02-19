import MultistepForm from '@/components/organisms/MultistepForm'
import { redirect } from 'next/navigation'
import LogInStep from './components/LogInStep'
import RefStep from './components/RefStep'
import VerifyEmailStep from './components/VerifyEmailStep'
import UsernameStep from './components/UsernameStep'

export const revalidate = 5

const flow = [LogInStep, RefStep, UsernameStep, VerifyEmailStep]

export default async function Recover(props: any) {
  return (
    <div>
      <MultistepForm flow={flow} pageProps={props} />
    </div>
  )
}
