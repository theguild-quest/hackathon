import React from 'react'
import StatsCard from '@/components/molecules/StatsCard'
import XPCard from '@/components/molecules/XPCard'
import PlatformSkillsCard from '@/components/molecules/PlatformSkillsCard'
import MyReferralLinkCard from '@/components/molecules/MyRefferalLinkCard'
import RewardsCard from '@/components/molecules/RewardsCard'
import MyReferralCard from '@/components/molecules/MyRefferalCard'
import classes from './page.module.sass'

const ProfileQuestStats = () => (
  <div className={classes.questStatsContainer}>
    <div className={classes.block}>
      <StatsCard
        questsCompleted="25"
        currenLevel="Level 5"
        totalXP="1250"
        referralTier="Gold"
      />
      <MyReferralCard />
    </div>
    <div className={classes.block}>
      <XPCard totalXP="1250 XP" progressValue={50} />
      <PlatformSkillsCard />
      <MyReferralLinkCard link="https://theguild.quest/?ref=thelolax" />
      <RewardsCard />

    </div>
  </div>
)

export default ProfileQuestStats
