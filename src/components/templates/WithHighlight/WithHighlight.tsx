import { Maybe } from 'graphql/jsutils/Maybe'
import React, { useMemo } from 'react'

interface WithHighlightProps {
  text: Maybe<string>
}

const WithHighlight: React.FC<WithHighlightProps> = ({ text }) => {
  // Regex patterns for hashtags and mentions
  const hashtagPattern = /(\B#[A-Za-z0-9_]+)/g
  const mentionPattern = /(\B@[A-Za-z0-9_]+)/g

  // Memoized processed text
  const processedText = useMemo(() => {
    if (!text) return ''

    const parts = text
      .split(hashtagPattern)
      .map((part, i) => {
        if (part.match(hashtagPattern)) {
          // Highlight hashtags
          return (
            <span key={`${part}.${i}`} style={{ color: '#3562FF' }}>
              {part}
            </span>
          )
        } else {
          // Split based on mentions
          return part.split(mentionPattern).map((subPart, index) => {
            if (subPart.match(mentionPattern)) {
              // Highlight mentions
              return (
                <span key={index} style={{ color: '#DA5A5A' }}>
                  {subPart}
                </span>
              )
            } else {
              // Regular text
              return subPart
            }
          })
        }
      })
      .flat()

    return parts

    // const parts = text.split(hashtagPattern)

    // return (
    //   <>
    //     {parts.map((part) => {
    //       if (part.match(hashtagPattern)) {
    //         return (
    //           <span key={part} style={{ color: '#3562FF' }}>
    //             {part}
    //           </span>
    //         )
    //       }

    //       const mentionParts = part.split(mentionPattern)

    //       mentionParts.map((subPart) => {
    //         return subPart.match(mentionPattern) ? (
    //           <span key={part} style={{ color: '#DA5A5A' }}>
    //             {part}
    //           </span>
    //         ) : (
    //           subPart
    //         )
    //       })
    //     })}
    //   </>
    // )
  }, [text])

  return <>{processedText}</>
}

export default WithHighlight

// import React, { useMemo } from 'react'
// import classes from './WithHighlight.module.sass'

// type Props = {
//   text: string
//   debouncedDependency: string
// }

// const WithHighlight: React.FC<Props> = ({
//   text,
//   debouncedDependency: debouncedSearch
// }) => {

//   // Decided to remove searchInput from props because debouncedDependency already includes searchInput (but if we would need to modify dependency to be object or not a searchInput then we would need to change its behaviour)
//   const renderText = useMemo(() => {
//     if (!debouncedSearch || debouncedSearch === '') return <span>{text}</span>
//     const regex = new RegExp(`(${debouncedSearch})`, 'gi')
//     const parts = text.split(regex)
//     return (
//       <span>
//         {parts.map((part, index) => {
//           return (
//             <span
//               key={index}
//               className={cx({
//                 [classes.searched]:
//                   part.toLowerCase() === debouncedSearch.toLowerCase()
//               })}
//             >
//               {part}
//             </span>
//           )
//         })}
//       </span>
//     )
//   }, [debouncedSearch])

//   return renderText
// }

// export default WithHighlight
