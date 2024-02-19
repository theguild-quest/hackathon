import React, { FC, ReactNode } from 'react'
import ProfileQuestTabs from '@/components/molecules/ProfileQuestTabs'

type Props = {
  children: ReactNode
}

const QuestLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <ProfileQuestTabs />
      {children}
    </>
  )
}

export default QuestLayout
