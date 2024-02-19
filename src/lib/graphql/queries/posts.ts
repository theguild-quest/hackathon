import { graphql } from '@/lib/graphql/codegen/index'

// export const getFeedPosts = graphql(`
//   query getFeedPosts($limit: Int, $skip: Int) {
//     sortPostsByDate(limit: $limit, skip: $skip) {
//       posts {
//         _id
//         attachments
//         author {
//           _id
//           displayName
//           username
//           profileImage
//         }
//         content
//         hasLiked
//         likes {
//           total
//         }
//         comments {
//           total
//         }
//         repostsEngagement {
//           total
//         }
//         quotesEngagement {
//           total
//         }
//         createdAt
//       }
//       hasNext
//     }
//   }
// `)

export const getFeedPosts = graphql(`
  query getFeedPosts($limit: Int, $skip: Int, $userId: String = "") {
    sortPostsByDate(limit: $limit, skip: $skip, userId: $userId) {
      posts {
        _id
        attachments
        author {
          _id
          displayName
          username
          profileImage
        }
        content
        createdAt
        hasLiked
        isQuote
        isRepost
        likes {
          total
        }
        quotesEngagement {
          total
        }
        repostsEngagement {
          total
        }
        comments {
          total
        }
        repost {
          _id
          attachments
          content
          createdAt
          hasLiked
          author {
            _id
            displayName
            username
            profileImage
          }
        }
      }
    }
  }
`)

export const getPostById = graphql(`
  query getPostById(
    $postId: String!
    $commentsLimit: Int!
    $commentsSkip: Int!
    $repliesLimit: Int!
    $repliesSkip: Int!
  ) {
    getPostById(postId: $postId) {
      post {
        _id
        attachments
        author {
          _id
          displayName
          username
          profileImage
        }
        content
        createdAt
        hasLiked
        isQuote
        isRepost
        likes {
          total
        }
        quotesEngagement {
          total
        }
        repostsEngagement {
          total
        }
        repost {
          _id
          attachments
          content
          createdAt
          hasLiked
          author {
            _id
            displayName
            username
            profileImage
          }
        }
        comments(limit: $commentsLimit, skip: $commentsSkip) {
          comments {
            _id
            attachments
            createdAt
            content
            author {
              _id
              username
              displayName
              profileImage
            }
            likes {
              total
            }
            replies(limit: $repliesLimit, skip: $repliesSkip) {
              total
              comments {
                _id
                createdAt
                attachments
                content
                author {
                  _id
                  displayName
                  profileImage
                  username
                }
                likes {
                  total
                }
              }
            }
          }
          total
        }
      }
    }
  }
`)

export const getPostDataById = graphql(`
  query getPostEngagementsById($postId: String!) {
    getPostById(postId: $postId) {
      commentsCount
      likesCount
      repostsCount
    }
  }
`)

export const getTrendingPosts = graphql(`
  query getTrendingPosts($limit: Int, $skip: Int, $hours: Int) {
    getTrendingPosts(hours: $hours, limit: $limit, skip: $skip) {
      posts {
        _id
        attachments
        author {
          _id
          displayName
          username
          profileImage
        }
        content
        createdAt
        hasLiked
        isQuote
        isRepost
        likes {
          total
        }
        quotesEngagement {
          total
        }
        repostsEngagement {
          total
        }
        comments {
          total
        }
        repost {
          _id
          attachments
          content
          createdAt
          hasLiked
          author {
            _id
            displayName
            username
            profileImage
          }
        }
      }
    }
  }
`)
