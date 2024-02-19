'use client'

import { ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

if (process.env.NODE_ENV !== 'production') {
  // Adds messages only in a dev environment
  loadDevMessages()
  loadErrorMessages()
}

// const cache = new NextSSRInMemoryCache({
//   typePolicies: {
//     PostEngagements: {
//       fields: {
//         // posts: offsetLimitPagination()
//         posts: {
//           keyArgs: false,
//           // Concatenate the incoming list items with
//           // the existing list items.
//           // merge(existing = [], incoming) {
//           //   console.log('EX', existing)
//           //   console.log('IN', incoming)
//           //   return [...existing, ...incoming]
//           // }
//         }
//       }
//     }
//   }
// })

function makeClient() {
  const httpLink = createUploadLink({
    uri: `${process.env.NEXT_PUBLIC_BE_URL}/graphql`,
    credentials: 'include'
  })

  return new NextSSRApolloClient({
    // cache,
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true
          }),
          httpLink
        ])
        : httpLink
  })
}

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => (
  <ApolloNextAppProvider makeClient={makeClient}>
    {children}
  </ApolloNextAppProvider>
)
