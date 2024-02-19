import { FC, ReactNode } from 'react'

type Props = {
  condition: boolean
  wrapper: (children: ReactNode) => ReactNode
  children: ReactNode
}

const ConditionalWrapper: FC<Props> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

export default ConditionalWrapper
