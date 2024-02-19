import ReferralStep from './components/ReferralStep/ReferralStep'
import SignUpStep from './components/SignUpStep'
import VerifyYourEmailStep from './components/VerifyYourEmailStep'
import CreateProfileStep from './components/CreateProfileStep'
import CreateProfileContinuedStep from './components/CreateProfileContinuedStep'
import CongratulationStep from './components/CongratulationStep'
import MultistepForm from '@/components/organisms/MultistepForm'

const flow = [
  ReferralStep,
  SignUpStep,
  CreateProfileStep,
  CreateProfileContinuedStep,
  VerifyYourEmailStep,
  CongratulationStep
]

export default async function SignUp(props: any) {
  return <MultistepForm flow={flow} pageProps={props} />
}
