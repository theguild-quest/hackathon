'use client'

import React from 'react'
import Typography from '@/components/atoms/Typography'
import Image from 'next/image'
import language from '@/assets/language.svg'
import redStar from '@/assets/redStar.svg'
import ReviewsCompletedQuest from '@/components/molecules/ReviewsCompletedQuest'
import ReviewsDefaultState from '@/components/atoms/ReviewsDefaultState'
import { USER_STATUS } from '@/enums'
import classes from './page.module.sass'
import { getSelfSeeker } from '@/lib/graphql/queries/user'
import { useQuery } from '@apollo/client'
import Loading from '@/app/loading'

const ProfileQuestSeeker = () => {
  const { data: seeker, loading, error } = useQuery(getSelfSeeker)

  if (loading) <Loading />

  return (
    <div className={classes.seekerBlock}>
      <div className={classes.textBlock}>
        <Typography
          variant="h1"
          className={classes.title}
          color="primary"
          weight="bold"
        >
          About Seeker
        </Typography>

        <Typography className={classes.subTitle} variant="h3">
          {seeker?.getSelfSeeker?.about || '--'}
        </Typography>
      </div>
      <div className={classes.textBlock}>
        <Typography
          variant="h1"
          className={classes.title}
          color="primary"
          weight="bold"
        >
          Total amount spent on quests
        </Typography>

        <Typography className={classes.subTitle} variant="h3">
          {/* {seeker?.totalQuest || '--'} */}
          {false || '--'}
        </Typography>
      </div>

      <div className={classes.textBlock}>
        <Typography
          variant="h1"
          color="primary"
          weight="bold"
          className={classes.title}
        >
          Links
        </Typography>
        <div className={classes.portfolioLinkBlock}>
          {seeker?.getSelfSeeker?.links &&
          seeker?.getSelfSeeker?.links?.length > 0 ? (
            seeker?.getSelfSeeker?.links.map((link) => (
              <div key={link} className={classes.portfolioLink}>
                <Image alt="language" src={language} />
                <Typography className={classes.subTitle} variant="h3">
                  {link}
                </Typography>
              </div>
            ))
          ) : (
            <Typography className={classes.subTitle} variant="h3">
              You haven’t added any portfolio link yet
            </Typography>
          )}
        </div>
      </div>
      <div className={classes.textBlock}>
        <div className={classes.titleReviewBlock}>
          <Typography
            variant="h1"
            className={classes.title}
            color="primary"
            weight="bold"
          >
            Reviews by Solvers
          </Typography>
          <div className={classes.reviewBlock}>
            <Typography
              color="primary"
              className={classes.subTitle}
              weight="light"
              variant="h3"
            >
              {[].length} reviews
              {/* {seeker?.reviews?.length} reviews */}
            </Typography>
            <Image alt="star-icon" src={redStar} />
            <Typography
              color="primary"
              className={classes.subTitle}
              weight="light"
              variant="h3"
            >
              5/5
            </Typography>
          </div>
        </div>
        {[].length > 0 ? (
          <ReviewsCompletedQuest
            variantUser={USER_STATUS.SEEKER}
            reviews={[]}
          />
        ) : (
          <ReviewsDefaultState />
        )}
        {/* {seeker?.reviews?.length > 0 ? (
          <ReviewsCompletedQuest
            variantUser={USER_STATUS.SEEKER}
            reviews={seeker.reviews}
          />
        ) : (
          <ReviewsDefaultState />
        )} */}
      </div>
    </div>
  )
}

export default ProfileQuestSeeker

// import React from 'react'
// import Typography from '@/components/atoms/Typography'
// import Image from 'next/image'
// import language from '@/assets/language.svg'
// import redStar from '@/assets/redStar.svg'
// import ReviewsCompletedQuest from '@/components/molecules/ReviewsCompletedQuest'
// import ReviewsDefaultState from '@/components/atoms/ReviewsDefaultState'
// import { USER_STATUS } from '@/enums'
// import classes from './page.module.sass'

// const mockSeeker = {
//   aboutSeeker:
//     'I’m a dedicated UI/UX designer on a mission to transform digital experiences. With 7 years of hands-on design expertise, I blend creativity with strategy to craft immersive, user-centric solutions. My design philosophy revolves around empathy and innovation. I believe in putting users at the heart of every design decision, ensuring seamless interactions and delightful experiences. From wireframes to pixel-perfect prototypes, I thrive on creating interfaces that resonate with users on a profound level.',
//   totalAmount: '$3200 • 860 AVAX',
//   portfolios: [
//     'http://holobaycportfolio.com',
//     'http://behance.net/holobayc',
//     'http://dribble.com/holobayc',
//     'http://unsplash.com/holobayc'
//   ],
//   reviews: [
//     {
//       id: '1',
//       stardust: '2d',
//       rating: '5',
//       statusQuest: 'Finished Quest',
//       review:
//         "\"Working with HoloBAYC was an absolute pleasure! They exceeded my expectations with their exceptional design skills and attention to detail. I'm thrilled with the website they created, and I can't wait to collaborate with them again in the future. Highly recommended!"
//     },
//     {
//       id: '2',
//       stardust: '2d',
//       rating: '5',
//       statusQuest: 'Finished Quest',
//       review:
//         '"Working with HoloBAYC has been an outstanding experience. Their creativity and expertise brought my vision to life in a way I couldn\'t have imagined. The website they designed is not only visually stunning but also highly functional. Communication was seamless, and deadlines were always met. I\'m genuinely impressed and look forward to more collaborations with them. Thanks for making my online dream a reality!"'
//     },
//     {
//       id: '3',
//       stardust: '2d',
//       rating: '5',
//       statusQuest: 'Finished Quest',
//       review:
//         '"Once again HoloBAYC has proven their remarkable versatility and design prowess. Having previously worked with them on websites, I entrusted them with a Whitepaper project, and the results were outstanding. The layout and visuals perfectly complemented the content, making the document engaging and professional. I\'m delighted with the outcome and eagerly anticipate future collaborations. HoloBAYC continues to impress and exceed expectations!"'
//     },
//     {
//       id: '4',
//       stardust: '2d',
//       rating: '5',
//       statusQuest: 'Finished Quest',
//       review:
//         "\"Working with HoloBAYC was an absolute pleasure! They exceeded my expectations with their exceptional design skills and attention to detail. I'm thrilled with the website they created, and I can't wait to collaborate with them again in the future. Highly recommended!"
//     }
//   ]
// }

// const ProfileQuestSeeker = () => (
//   <div className={classes.seekerBlock}>
//     <div className={classes.textBlock}>
//       <Typography
//         variant="h1"
//         className={classes.title}
//         color="primary"
//         weight="bold"
//       >
//         About Seeker
//       </Typography>
//       {mockSeeker.aboutSeeker ? (
//         <Typography className={classes.subTitle} variant="h3">
//           {mockSeeker?.aboutSeeker}
//         </Typography>
//       ) : (
//         <Typography className={classes.subTitle} variant="h3">
//           --
//         </Typography>
//       )}
//     </div>
//     <div className={classes.textBlock}>
//       <Typography
//         variant="h1"
//         className={classes.title}
//         color="primary"
//         weight="bold"
//       >
//         Total amount spent on quests
//       </Typography>
//       {mockSeeker.totalAmount ? (
//         <Typography className={classes.subTitle} variant="h3">
//           {mockSeeker.totalAmount}
//         </Typography>
//       ) : (
//         <Typography className={classes.subTitle} variant="h3">
//           --
//         </Typography>
//       )}
//     </div>

//     <div className={classes.textBlock}>
//       <Typography
//         variant="h1"
//         color="primary"
//         weight="bold"
//         className={classes.title}
//       >
//         Links
//       </Typography>
//       <div className={classes.portfolioLinkBlock}>
//         {mockSeeker.portfolios.length > 0 ? (
//           mockSeeker.portfolios.map((p) => (
//             <div key={p} className={classes.portfolioLink}>
//               <Image alt="language" src={language} />
//               <Typography className={classes.subTitle} variant="h3">
//                 {p}
//               </Typography>
//             </div>
//           ))
//         ) : (
//           <Typography className={classes.subTitle} variant="h3">
//             You haven’t added any portfolio link yet
//           </Typography>
//         )}
//       </div>
//     </div>
//     <div className={classes.textBlock}>
//       <div className={classes.titleReviewBlock}>
//         <Typography
//           variant="h1"
//           className={classes.title}
//           color="primary"
//           weight="bold"
//         >
//           Reviews by Solvers
//         </Typography>
//         <div className={classes.reviewBlock}>
//           <Typography
//             color="primary"
//             className={classes.subTitle}
//             weight="light"
//             variant="h3"
//           >
//             {mockSeeker.reviews.length} reviews
//           </Typography>
//           <Image alt="star-icon" src={redStar} />
//           <Typography
//             color="primary"
//             className={classes.subTitle}
//             weight="light"
//             variant="h3"
//           >
//             5/5
//           </Typography>
//         </div>
//       </div>
//       {mockSeeker.reviews.length > 0 ? (
//         <ReviewsCompletedQuest
//           variantUser={USER_STATUS.SEEKER}
//           reviews={mockSeeker.reviews}
//         />
//       ) : (
//         <ReviewsDefaultState />
//       )}
//     </div>
//   </div>
// )

// export default ProfileQuestSeeker
