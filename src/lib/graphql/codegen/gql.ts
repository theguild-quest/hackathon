/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createPost($content: String!, $attachments: [File]) {\n    createPost(content: $content, attachments: $attachments) {\n      _id\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation updatePost($content: String!, $id: String!) {\n    updatePost(content: $content, id: $id) {\n      _id\n    }\n  }\n": types.UpdatePostDocument,
    "\n  mutation createComment(\n    $content: String!\n    $postId: String!\n    $attachments: [File]\n  ) {\n    createComment(\n      content: $content\n      postId: $postId\n      attachments: $attachments\n    ) {\n      _id\n    }\n  }\n": types.CreateCommentDocument,
    "\n  mutation createReply(\n    $content: String!\n    $postId: String!\n    $commentId: String!\n    $attachments: [File]\n  ) {\n    createReply(\n      content: $content\n      postId: $postId\n      commentId: $commentId\n      attachments: $attachments\n    ) {\n      _id\n    }\n  }\n": types.CreateReplyDocument,
    "\n  mutation createRepost($postId: String!) {\n    repost(postId: $postId) {\n      _id\n    }\n  }\n": types.CreateRepostDocument,
    "\n  mutation likePost($postId: String!) {\n    likePost(postId: $postId) {\n      _id\n    }\n  }\n": types.LikePostDocument,
    "\n  mutation unlikePost($postId: String!) {\n    unlikePost(postId: $postId) {\n      _id\n    }\n  }\n": types.UnlikePostDocument,
    "\n  mutation likeComment($commentId: String!) {\n    likeComment(commentId: $commentId) {\n      _id\n    }\n  }\n": types.LikeCommentDocument,
    "\n  mutation unlikeComment($commentId: String!) {\n    unlikeComment(commentId: $commentId) {\n      _id\n    }\n  }\n": types.UnlikeCommentDocument,
    "\n  mutation deletePost($postId: String!) {\n    deletePost(postId: $postId)\n  }\n": types.DeletePostDocument,
    "\n  mutation deleteComment($commentId: String!) {\n    deleteComment(commentId: $commentId)\n  }\n": types.DeleteCommentDocument,
    "\n  mutation CreateWallet {\n    createWallet {\n      walletAddress\n    }\n  }\n": types.CreateWalletDocument,
    "\n  mutation EditAccountInformation(\n    $displayName: String\n    $userName: String\n    $location: LocationInput\n    $bio: String\n    $profileImageFile: File\n    $profileBannerFile: File\n    $interests: [String]\n    $website: String\n    $linkedin: String\n    $discord: String\n    $github: String\n    $telegram: String\n  ) {\n    editAccountInformation(\n      displayName: $displayName\n      # twitterHandle: $twitterHandle\n      # email: $email\n      userName: $userName\n      location: $location\n      bio: $bio\n      profileImageFile: $profileImageFile\n      profileBannerFile: $profileBannerFile\n      interests: $interests\n      website: $website\n      linkedin: $linkedin\n      discord: $discord\n      github: $github\n      telegram: $telegram\n    ) {\n      _id\n    }\n  }\n": types.EditAccountInformationDocument,
    "\n  mutation EditSolverInformation(\n    $skills: [String]\n    $portfolioLinks: [String]\n    $currentAvailability: Boolean\n    $about: String\n  ) {\n    editSolverInformation(\n      skills: $skills\n      portfolioLinks: $portfolioLinks\n      currentAvailability: $currentAvailability\n      about: $about\n    ) {\n      currentAvailability\n    }\n  }\n": types.EditSolverInformationDocument,
    "\n  mutation EditSeekerInformation($links: [String], $about: String) {\n    editSeekerInformation(links: $links, about: $about) {\n      about\n    }\n  }\n": types.EditSeekerInformationDocument,
    "\n  mutation EditNotificationSettings(\n    $jobEmailSettings: JobEmailNotificationsInput\n    $socialAppSettings: SocialAppNotificationsInput\n    $socialEmailSettings: SocialEmailNotificationsInput\n  ) {\n    editNotificationSettings(\n      jobEmailSettings: $jobEmailSettings\n      socialAppSettings: $socialAppSettings\n      socialEmailSettings: $socialEmailSettings\n    ) {\n      jobEmailNotifications {\n        directMessages\n        jobProposals\n        jobStatusUpdates\n        levelUpPlatformLevel\n        levelUpReferralNftTier\n        newJobPostings\n        newReviews\n        xpGained\n      }\n      socialAppNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n      socialEmailNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n    }\n  }\n": types.EditNotificationSettingsDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  mutation Register(\n    $username: String!\n    $referralCode: String\n    $twitterHandle: String\n    $idToken: String!\n  ) {\n    register(\n      username: $username\n      referralCode: $referralCode\n      twitterHandle: $twitterHandle\n      idToken: $idToken\n    ) {\n      uid\n      username\n    }\n  }\n": types.RegisterDocument,
    "\n  mutation EditProfile($walletAddress: String!) {\n    editProfile(walletAddress: $walletAddress) {\n      walletAddress\n    }\n  }\n": types.EditProfileDocument,
    "\n  mutation LinkProvider($twitterHandle: String!) {\n    link(twitterHandle: $twitterHandle) {\n      twitterHandle\n    }\n  }\n": types.LinkProviderDocument,
    "\n  mutation CheckUsername($username: String!) {\n    verifyUsername(username: $username)\n  }\n": types.CheckUsernameDocument,
    "\n  mutation CheckReferralCode($referralCode: String!) {\n    verifyReferralCode(referralCode: $referralCode)\n  }\n": types.CheckReferralCodeDocument,
    "\n  mutation Login($idToken: String!) {\n    login(idToken: $idToken) {\n      _id\n      displayName\n      username\n      profileImage\n    }\n  }\n": types.LoginDocument,
    "\n  mutation CompleteProfile($walletAddress: String!, $profileImageFile: File!) {\n    completeProfile(\n      profileImageFile: $profileImageFile\n      walletAddress: $walletAddress\n    ) {\n      _id\n      walletAddress\n      zkMeId\n    }\n  }\n": types.CompleteProfileDocument,
    "\n  mutation BlockUser($userId: String!) {\n    blockUser(userId: $userId) {\n      _id\n    }\n  }\n": types.BlockUserDocument,
    "\n  mutation UnblockUser($userId: String!) {\n    unblockUser(userId: $userId) {\n      _id\n    }\n  }\n": types.UnblockUserDocument,
    "\n  mutation FollowUser($userId: String!) {\n    followUser(userId: $userId) {\n      _id\n    }\n  }\n": types.FollowUserDocument,
    "\n  mutation UnfollowUser($userId: String!) {\n    unfollowUser(userId: $userId) {\n      _id\n    }\n  }\n": types.UnfollowUserDocument,
    "\n  query getFeedPosts($limit: Int, $skip: Int, $userId: String = \"\") {\n    sortPostsByDate(limit: $limit, skip: $skip, userId: $userId) {\n      posts {\n        _id\n        attachments\n        author {\n          _id\n          displayName\n          username\n          profileImage\n        }\n        content\n        createdAt\n        hasLiked\n        isQuote\n        isRepost\n        likes {\n          total\n        }\n        quotesEngagement {\n          total\n        }\n        repostsEngagement {\n          total\n        }\n        comments {\n          total\n        }\n        repost {\n          _id\n          attachments\n          content\n          createdAt\n          hasLiked\n          author {\n            _id\n            displayName\n            username\n            profileImage\n          }\n        }\n      }\n    }\n  }\n": types.GetFeedPostsDocument,
    "\n  query getPostById(\n    $postId: String!\n    $commentsLimit: Int!\n    $commentsSkip: Int!\n    $repliesLimit: Int!\n    $repliesSkip: Int!\n  ) {\n    getPostById(postId: $postId) {\n      post {\n        _id\n        attachments\n        author {\n          _id\n          displayName\n          username\n          profileImage\n        }\n        content\n        createdAt\n        hasLiked\n        isQuote\n        isRepost\n        likes {\n          total\n        }\n        quotesEngagement {\n          total\n        }\n        repostsEngagement {\n          total\n        }\n        repost {\n          _id\n          attachments\n          content\n          createdAt\n          hasLiked\n          author {\n            _id\n            displayName\n            username\n            profileImage\n          }\n        }\n        comments(limit: $commentsLimit, skip: $commentsSkip) {\n          comments {\n            _id\n            attachments\n            createdAt\n            content\n            author {\n              _id\n              username\n              displayName\n              profileImage\n            }\n            likes {\n              total\n            }\n            replies(limit: $repliesLimit, skip: $repliesSkip) {\n              total\n              comments {\n                _id\n                createdAt\n                attachments\n                content\n                author {\n                  _id\n                  displayName\n                  profileImage\n                  username\n                }\n                likes {\n                  total\n                }\n              }\n            }\n          }\n          total\n        }\n      }\n    }\n  }\n": types.GetPostByIdDocument,
    "\n  query getPostEngagementsById($postId: String!) {\n    getPostById(postId: $postId) {\n      commentsCount\n      likesCount\n      repostsCount\n    }\n  }\n": types.GetPostEngagementsByIdDocument,
    "\n  query getTrendingPosts($limit: Int, $skip: Int, $hours: Int) {\n    getTrendingPosts(hours: $hours, limit: $limit, skip: $skip) {\n      posts {\n        _id\n        attachments\n        author {\n          _id\n          displayName\n          username\n          profileImage\n        }\n        content\n        createdAt\n        hasLiked\n        isQuote\n        isRepost\n        likes {\n          total\n        }\n        quotesEngagement {\n          total\n        }\n        repostsEngagement {\n          total\n        }\n        comments {\n          total\n        }\n        repost {\n          _id\n          attachments\n          content\n          createdAt\n          hasLiked\n          author {\n            _id\n            displayName\n            username\n            profileImage\n          }\n        }\n      }\n    }\n  }\n": types.GetTrendingPostsDocument,
    "\n  query GetAccountInformation {\n    getSelf {\n      displayName\n      email\n      twitterHandle\n      username\n      walletAddress\n      referralCode\n      location {\n        city\n        country\n        continent\n      }\n      bio\n      zkMeId\n      website\n      linkedin\n      discord\n      github\n      telegram\n      interests\n      profileImage\n      profileBanner\n      points {\n        total\n        directReferrals\n        layer2Referrals\n        layer3Referrals\n        layer4Referrals\n      }\n    }\n  }\n": types.GetAccountInformationDocument,
    "\n  query GetSolverInformation {\n    getSelfSolver {\n      skills\n      portfolioLinks\n      currentAvailability\n      about\n    }\n  }\n": types.GetSolverInformationDocument,
    "\n  query GetSeekerInformation {\n    getSelfSeeker {\n      about\n      links\n    }\n  }\n": types.GetSeekerInformationDocument,
    "\n  query GetNotificationSettings {\n    getNotificationSettings {\n      jobEmailNotifications {\n        directMessages\n        jobProposals\n        jobStatusUpdates\n        levelUpPlatformLevel\n        levelUpReferralNftTier\n        newJobPostings\n        newReviews\n        xpGained\n      }\n      socialAppNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n      socialEmailNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n    }\n  }\n": types.GetNotificationSettingsDocument,
    "\n  query GetBlockedUsersWithCount {\n    getBlockedUsersWithCount {\n      count\n      blockedUsers {\n        displayName\n        username\n        profileImage\n      }\n    }\n  }\n": types.GetBlockedUsersWithCountDocument,
    "\n  query GetReferrals($searchText: String) {\n    getReferrals(searchText: $searchText) {\n      directReferrals\n      hasNext\n      indirectReferrals\n      layers {\n        first {\n          displayName\n          profileImage\n          username\n        }\n        second {\n          displayName\n          profileImage\n          username\n        }\n        third {\n          displayName\n          profileImage\n          username\n        }\n        fourth {\n          displayName\n          profileImage\n          username\n        }\n      }\n    }\n  }\n": types.GetReferralsDocument,
    "\n  query Get5LatestSignups {\n    get5LatestSignups {\n      username\n      referredBy {\n        username\n      }\n    }\n  }\n": types.Get5LatestSignupsDocument,
    "\n  query GetTop100UsersByPoints {\n    getTop100UsersByPoints {\n      username\n      points {\n        total\n      }\n      referredBy {\n        username\n      }\n    }\n  }\n": types.GetTop100UsersByPointsDocument,
    "\n  query GetNumberOfUsers {\n    getNumberOfUsers\n  }\n": types.GetNumberOfUsersDocument,
    "\n  query GetPreSignUpData {\n    getTop100UsersByPoints {\n      username\n      twitterHandle\n      referredBy {\n        username\n      }\n      points {\n        total\n      }\n    }\n    get5LatestSignups {\n      username\n      createdAt\n      twitterHandle\n      referredBy {\n        username\n      }\n    }\n    getNumberOfUsers\n    getSelf {\n      username\n      walletAddress\n      referralCode\n      twitterHandle\n      email\n      points {\n        total\n        directReferrals\n        layer2Referrals\n        layer3Referrals\n        layer4Referrals\n      }\n    }\n  }\n": types.GetPreSignUpDataDocument,
    "\n  query GetSelf {\n    getSelf {\n      username\n      walletAddress\n      referralCode\n      twitterHandle\n      email\n      uid\n      points {\n        total\n        directReferrals\n        layer2Referrals\n        layer3Referrals\n        layer4Referrals\n      }\n      bio\n      seeker {\n        about\n        links\n      }\n\n      solver {\n        about\n        currentAvailability\n        portfolioLinks\n        skills\n      }\n      location {\n        city\n        continent\n        country\n      }\n    }\n  }\n": types.GetSelfDocument,
    "\n  query GetSelfUser {\n    getSelf {\n      _id\n      username\n      profileImage\n      displayName\n      nftId\n    }\n  }\n": types.GetSelfUserDocument,
    "\n  query GetSelfForLogin {\n    getSelf {\n      username\n    }\n  }\n": types.GetSelfForLoginDocument,
    "\n  query GetSelfSeeker {\n    getSelfSeeker {\n      about\n      links\n    }\n  }\n": types.GetSelfSeekerDocument,
    "\n  query GetSelfSolver {\n    getSelfSolver {\n      about\n      currentAvailability\n      portfolioLinks\n      skills\n    }\n  }\n": types.GetSelfSolverDocument,
    "\n  query GetSelfProfile {\n    getSelf {\n      _id\n      bio\n      createdAt\n      discord\n      displayName\n      email\n      follows {\n        _id\n      }\n      github\n      interests\n      linkedin\n      location {\n        city\n        continent\n        country\n      }\n      nftId\n      profileBanner\n      profileImage\n      referralCode\n      telegram\n      twitterHandle\n      username\n      walletAddress\n      website\n      zkMeId\n      followers {\n        _id\n      }\n    }\n  }\n": types.GetSelfProfileDocument,
    "\n  query GetSelfCompletionCheck {\n    getSelf {\n      _id\n      nftId\n    }\n  }\n": types.GetSelfCompletionCheckDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPost($content: String!, $attachments: [File]) {\n    createPost(content: $content, attachments: $attachments) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation createPost($content: String!, $attachments: [File]) {\n    createPost(content: $content, attachments: $attachments) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updatePost($content: String!, $id: String!) {\n    updatePost(content: $content, id: $id) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation updatePost($content: String!, $id: String!) {\n    updatePost(content: $content, id: $id) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createComment(\n    $content: String!\n    $postId: String!\n    $attachments: [File]\n  ) {\n    createComment(\n      content: $content\n      postId: $postId\n      attachments: $attachments\n    ) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation createComment(\n    $content: String!\n    $postId: String!\n    $attachments: [File]\n  ) {\n    createComment(\n      content: $content\n      postId: $postId\n      attachments: $attachments\n    ) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createReply(\n    $content: String!\n    $postId: String!\n    $commentId: String!\n    $attachments: [File]\n  ) {\n    createReply(\n      content: $content\n      postId: $postId\n      commentId: $commentId\n      attachments: $attachments\n    ) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation createReply(\n    $content: String!\n    $postId: String!\n    $commentId: String!\n    $attachments: [File]\n  ) {\n    createReply(\n      content: $content\n      postId: $postId\n      commentId: $commentId\n      attachments: $attachments\n    ) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createRepost($postId: String!) {\n    repost(postId: $postId) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation createRepost($postId: String!) {\n    repost(postId: $postId) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation likePost($postId: String!) {\n    likePost(postId: $postId) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation likePost($postId: String!) {\n    likePost(postId: $postId) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation unlikePost($postId: String!) {\n    unlikePost(postId: $postId) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation unlikePost($postId: String!) {\n    unlikePost(postId: $postId) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation likeComment($commentId: String!) {\n    likeComment(commentId: $commentId) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation likeComment($commentId: String!) {\n    likeComment(commentId: $commentId) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation unlikeComment($commentId: String!) {\n    unlikeComment(commentId: $commentId) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation unlikeComment($commentId: String!) {\n    unlikeComment(commentId: $commentId) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deletePost($postId: String!) {\n    deletePost(postId: $postId)\n  }\n"): (typeof documents)["\n  mutation deletePost($postId: String!) {\n    deletePost(postId: $postId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteComment($commentId: String!) {\n    deleteComment(commentId: $commentId)\n  }\n"): (typeof documents)["\n  mutation deleteComment($commentId: String!) {\n    deleteComment(commentId: $commentId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateWallet {\n    createWallet {\n      walletAddress\n    }\n  }\n"): (typeof documents)["\n  mutation CreateWallet {\n    createWallet {\n      walletAddress\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditAccountInformation(\n    $displayName: String\n    $userName: String\n    $location: LocationInput\n    $bio: String\n    $profileImageFile: File\n    $profileBannerFile: File\n    $interests: [String]\n    $website: String\n    $linkedin: String\n    $discord: String\n    $github: String\n    $telegram: String\n  ) {\n    editAccountInformation(\n      displayName: $displayName\n      # twitterHandle: $twitterHandle\n      # email: $email\n      userName: $userName\n      location: $location\n      bio: $bio\n      profileImageFile: $profileImageFile\n      profileBannerFile: $profileBannerFile\n      interests: $interests\n      website: $website\n      linkedin: $linkedin\n      discord: $discord\n      github: $github\n      telegram: $telegram\n    ) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation EditAccountInformation(\n    $displayName: String\n    $userName: String\n    $location: LocationInput\n    $bio: String\n    $profileImageFile: File\n    $profileBannerFile: File\n    $interests: [String]\n    $website: String\n    $linkedin: String\n    $discord: String\n    $github: String\n    $telegram: String\n  ) {\n    editAccountInformation(\n      displayName: $displayName\n      # twitterHandle: $twitterHandle\n      # email: $email\n      userName: $userName\n      location: $location\n      bio: $bio\n      profileImageFile: $profileImageFile\n      profileBannerFile: $profileBannerFile\n      interests: $interests\n      website: $website\n      linkedin: $linkedin\n      discord: $discord\n      github: $github\n      telegram: $telegram\n    ) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditSolverInformation(\n    $skills: [String]\n    $portfolioLinks: [String]\n    $currentAvailability: Boolean\n    $about: String\n  ) {\n    editSolverInformation(\n      skills: $skills\n      portfolioLinks: $portfolioLinks\n      currentAvailability: $currentAvailability\n      about: $about\n    ) {\n      currentAvailability\n    }\n  }\n"): (typeof documents)["\n  mutation EditSolverInformation(\n    $skills: [String]\n    $portfolioLinks: [String]\n    $currentAvailability: Boolean\n    $about: String\n  ) {\n    editSolverInformation(\n      skills: $skills\n      portfolioLinks: $portfolioLinks\n      currentAvailability: $currentAvailability\n      about: $about\n    ) {\n      currentAvailability\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditSeekerInformation($links: [String], $about: String) {\n    editSeekerInformation(links: $links, about: $about) {\n      about\n    }\n  }\n"): (typeof documents)["\n  mutation EditSeekerInformation($links: [String], $about: String) {\n    editSeekerInformation(links: $links, about: $about) {\n      about\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditNotificationSettings(\n    $jobEmailSettings: JobEmailNotificationsInput\n    $socialAppSettings: SocialAppNotificationsInput\n    $socialEmailSettings: SocialEmailNotificationsInput\n  ) {\n    editNotificationSettings(\n      jobEmailSettings: $jobEmailSettings\n      socialAppSettings: $socialAppSettings\n      socialEmailSettings: $socialEmailSettings\n    ) {\n      jobEmailNotifications {\n        directMessages\n        jobProposals\n        jobStatusUpdates\n        levelUpPlatformLevel\n        levelUpReferralNftTier\n        newJobPostings\n        newReviews\n        xpGained\n      }\n      socialAppNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n      socialEmailNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EditNotificationSettings(\n    $jobEmailSettings: JobEmailNotificationsInput\n    $socialAppSettings: SocialAppNotificationsInput\n    $socialEmailSettings: SocialEmailNotificationsInput\n  ) {\n    editNotificationSettings(\n      jobEmailSettings: $jobEmailSettings\n      socialAppSettings: $socialAppSettings\n      socialEmailSettings: $socialEmailSettings\n    ) {\n      jobEmailNotifications {\n        directMessages\n        jobProposals\n        jobStatusUpdates\n        levelUpPlatformLevel\n        levelUpReferralNftTier\n        newJobPostings\n        newReviews\n        xpGained\n      }\n      socialAppNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n      socialEmailNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register(\n    $username: String!\n    $referralCode: String\n    $twitterHandle: String\n    $idToken: String!\n  ) {\n    register(\n      username: $username\n      referralCode: $referralCode\n      twitterHandle: $twitterHandle\n      idToken: $idToken\n    ) {\n      uid\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation Register(\n    $username: String!\n    $referralCode: String\n    $twitterHandle: String\n    $idToken: String!\n  ) {\n    register(\n      username: $username\n      referralCode: $referralCode\n      twitterHandle: $twitterHandle\n      idToken: $idToken\n    ) {\n      uid\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditProfile($walletAddress: String!) {\n    editProfile(walletAddress: $walletAddress) {\n      walletAddress\n    }\n  }\n"): (typeof documents)["\n  mutation EditProfile($walletAddress: String!) {\n    editProfile(walletAddress: $walletAddress) {\n      walletAddress\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LinkProvider($twitterHandle: String!) {\n    link(twitterHandle: $twitterHandle) {\n      twitterHandle\n    }\n  }\n"): (typeof documents)["\n  mutation LinkProvider($twitterHandle: String!) {\n    link(twitterHandle: $twitterHandle) {\n      twitterHandle\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CheckUsername($username: String!) {\n    verifyUsername(username: $username)\n  }\n"): (typeof documents)["\n  mutation CheckUsername($username: String!) {\n    verifyUsername(username: $username)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CheckReferralCode($referralCode: String!) {\n    verifyReferralCode(referralCode: $referralCode)\n  }\n"): (typeof documents)["\n  mutation CheckReferralCode($referralCode: String!) {\n    verifyReferralCode(referralCode: $referralCode)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($idToken: String!) {\n    login(idToken: $idToken) {\n      _id\n      displayName\n      username\n      profileImage\n    }\n  }\n"): (typeof documents)["\n  mutation Login($idToken: String!) {\n    login(idToken: $idToken) {\n      _id\n      displayName\n      username\n      profileImage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CompleteProfile($walletAddress: String!, $profileImageFile: File!) {\n    completeProfile(\n      profileImageFile: $profileImageFile\n      walletAddress: $walletAddress\n    ) {\n      _id\n      walletAddress\n      zkMeId\n    }\n  }\n"): (typeof documents)["\n  mutation CompleteProfile($walletAddress: String!, $profileImageFile: File!) {\n    completeProfile(\n      profileImageFile: $profileImageFile\n      walletAddress: $walletAddress\n    ) {\n      _id\n      walletAddress\n      zkMeId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation BlockUser($userId: String!) {\n    blockUser(userId: $userId) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation BlockUser($userId: String!) {\n    blockUser(userId: $userId) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnblockUser($userId: String!) {\n    unblockUser(userId: $userId) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation UnblockUser($userId: String!) {\n    unblockUser(userId: $userId) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation FollowUser($userId: String!) {\n    followUser(userId: $userId) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation FollowUser($userId: String!) {\n    followUser(userId: $userId) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnfollowUser($userId: String!) {\n    unfollowUser(userId: $userId) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation UnfollowUser($userId: String!) {\n    unfollowUser(userId: $userId) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getFeedPosts($limit: Int, $skip: Int, $userId: String = \"\") {\n    sortPostsByDate(limit: $limit, skip: $skip, userId: $userId) {\n      posts {\n        _id\n        attachments\n        author {\n          _id\n          displayName\n          username\n          profileImage\n        }\n        content\n        createdAt\n        hasLiked\n        isQuote\n        isRepost\n        likes {\n          total\n        }\n        quotesEngagement {\n          total\n        }\n        repostsEngagement {\n          total\n        }\n        comments {\n          total\n        }\n        repost {\n          _id\n          attachments\n          content\n          createdAt\n          hasLiked\n          author {\n            _id\n            displayName\n            username\n            profileImage\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getFeedPosts($limit: Int, $skip: Int, $userId: String = \"\") {\n    sortPostsByDate(limit: $limit, skip: $skip, userId: $userId) {\n      posts {\n        _id\n        attachments\n        author {\n          _id\n          displayName\n          username\n          profileImage\n        }\n        content\n        createdAt\n        hasLiked\n        isQuote\n        isRepost\n        likes {\n          total\n        }\n        quotesEngagement {\n          total\n        }\n        repostsEngagement {\n          total\n        }\n        comments {\n          total\n        }\n        repost {\n          _id\n          attachments\n          content\n          createdAt\n          hasLiked\n          author {\n            _id\n            displayName\n            username\n            profileImage\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPostById(\n    $postId: String!\n    $commentsLimit: Int!\n    $commentsSkip: Int!\n    $repliesLimit: Int!\n    $repliesSkip: Int!\n  ) {\n    getPostById(postId: $postId) {\n      post {\n        _id\n        attachments\n        author {\n          _id\n          displayName\n          username\n          profileImage\n        }\n        content\n        createdAt\n        hasLiked\n        isQuote\n        isRepost\n        likes {\n          total\n        }\n        quotesEngagement {\n          total\n        }\n        repostsEngagement {\n          total\n        }\n        repost {\n          _id\n          attachments\n          content\n          createdAt\n          hasLiked\n          author {\n            _id\n            displayName\n            username\n            profileImage\n          }\n        }\n        comments(limit: $commentsLimit, skip: $commentsSkip) {\n          comments {\n            _id\n            attachments\n            createdAt\n            content\n            author {\n              _id\n              username\n              displayName\n              profileImage\n            }\n            likes {\n              total\n            }\n            replies(limit: $repliesLimit, skip: $repliesSkip) {\n              total\n              comments {\n                _id\n                createdAt\n                attachments\n                content\n                author {\n                  _id\n                  displayName\n                  profileImage\n                  username\n                }\n                likes {\n                  total\n                }\n              }\n            }\n          }\n          total\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPostById(\n    $postId: String!\n    $commentsLimit: Int!\n    $commentsSkip: Int!\n    $repliesLimit: Int!\n    $repliesSkip: Int!\n  ) {\n    getPostById(postId: $postId) {\n      post {\n        _id\n        attachments\n        author {\n          _id\n          displayName\n          username\n          profileImage\n        }\n        content\n        createdAt\n        hasLiked\n        isQuote\n        isRepost\n        likes {\n          total\n        }\n        quotesEngagement {\n          total\n        }\n        repostsEngagement {\n          total\n        }\n        repost {\n          _id\n          attachments\n          content\n          createdAt\n          hasLiked\n          author {\n            _id\n            displayName\n            username\n            profileImage\n          }\n        }\n        comments(limit: $commentsLimit, skip: $commentsSkip) {\n          comments {\n            _id\n            attachments\n            createdAt\n            content\n            author {\n              _id\n              username\n              displayName\n              profileImage\n            }\n            likes {\n              total\n            }\n            replies(limit: $repliesLimit, skip: $repliesSkip) {\n              total\n              comments {\n                _id\n                createdAt\n                attachments\n                content\n                author {\n                  _id\n                  displayName\n                  profileImage\n                  username\n                }\n                likes {\n                  total\n                }\n              }\n            }\n          }\n          total\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPostEngagementsById($postId: String!) {\n    getPostById(postId: $postId) {\n      commentsCount\n      likesCount\n      repostsCount\n    }\n  }\n"): (typeof documents)["\n  query getPostEngagementsById($postId: String!) {\n    getPostById(postId: $postId) {\n      commentsCount\n      likesCount\n      repostsCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTrendingPosts($limit: Int, $skip: Int, $hours: Int) {\n    getTrendingPosts(hours: $hours, limit: $limit, skip: $skip) {\n      posts {\n        _id\n        attachments\n        author {\n          _id\n          displayName\n          username\n          profileImage\n        }\n        content\n        createdAt\n        hasLiked\n        isQuote\n        isRepost\n        likes {\n          total\n        }\n        quotesEngagement {\n          total\n        }\n        repostsEngagement {\n          total\n        }\n        comments {\n          total\n        }\n        repost {\n          _id\n          attachments\n          content\n          createdAt\n          hasLiked\n          author {\n            _id\n            displayName\n            username\n            profileImage\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTrendingPosts($limit: Int, $skip: Int, $hours: Int) {\n    getTrendingPosts(hours: $hours, limit: $limit, skip: $skip) {\n      posts {\n        _id\n        attachments\n        author {\n          _id\n          displayName\n          username\n          profileImage\n        }\n        content\n        createdAt\n        hasLiked\n        isQuote\n        isRepost\n        likes {\n          total\n        }\n        quotesEngagement {\n          total\n        }\n        repostsEngagement {\n          total\n        }\n        comments {\n          total\n        }\n        repost {\n          _id\n          attachments\n          content\n          createdAt\n          hasLiked\n          author {\n            _id\n            displayName\n            username\n            profileImage\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAccountInformation {\n    getSelf {\n      displayName\n      email\n      twitterHandle\n      username\n      walletAddress\n      referralCode\n      location {\n        city\n        country\n        continent\n      }\n      bio\n      zkMeId\n      website\n      linkedin\n      discord\n      github\n      telegram\n      interests\n      profileImage\n      profileBanner\n      points {\n        total\n        directReferrals\n        layer2Referrals\n        layer3Referrals\n        layer4Referrals\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAccountInformation {\n    getSelf {\n      displayName\n      email\n      twitterHandle\n      username\n      walletAddress\n      referralCode\n      location {\n        city\n        country\n        continent\n      }\n      bio\n      zkMeId\n      website\n      linkedin\n      discord\n      github\n      telegram\n      interests\n      profileImage\n      profileBanner\n      points {\n        total\n        directReferrals\n        layer2Referrals\n        layer3Referrals\n        layer4Referrals\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSolverInformation {\n    getSelfSolver {\n      skills\n      portfolioLinks\n      currentAvailability\n      about\n    }\n  }\n"): (typeof documents)["\n  query GetSolverInformation {\n    getSelfSolver {\n      skills\n      portfolioLinks\n      currentAvailability\n      about\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSeekerInformation {\n    getSelfSeeker {\n      about\n      links\n    }\n  }\n"): (typeof documents)["\n  query GetSeekerInformation {\n    getSelfSeeker {\n      about\n      links\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetNotificationSettings {\n    getNotificationSettings {\n      jobEmailNotifications {\n        directMessages\n        jobProposals\n        jobStatusUpdates\n        levelUpPlatformLevel\n        levelUpReferralNftTier\n        newJobPostings\n        newReviews\n        xpGained\n      }\n      socialAppNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n      socialEmailNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNotificationSettings {\n    getNotificationSettings {\n      jobEmailNotifications {\n        directMessages\n        jobProposals\n        jobStatusUpdates\n        levelUpPlatformLevel\n        levelUpReferralNftTier\n        newJobPostings\n        newReviews\n        xpGained\n      }\n      socialAppNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n      socialEmailNotifications {\n        comments\n        directMessages\n        likes\n        mentions\n        messageRequests\n        newFollowers\n        reposts\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBlockedUsersWithCount {\n    getBlockedUsersWithCount {\n      count\n      blockedUsers {\n        displayName\n        username\n        profileImage\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlockedUsersWithCount {\n    getBlockedUsersWithCount {\n      count\n      blockedUsers {\n        displayName\n        username\n        profileImage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetReferrals($searchText: String) {\n    getReferrals(searchText: $searchText) {\n      directReferrals\n      hasNext\n      indirectReferrals\n      layers {\n        first {\n          displayName\n          profileImage\n          username\n        }\n        second {\n          displayName\n          profileImage\n          username\n        }\n        third {\n          displayName\n          profileImage\n          username\n        }\n        fourth {\n          displayName\n          profileImage\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetReferrals($searchText: String) {\n    getReferrals(searchText: $searchText) {\n      directReferrals\n      hasNext\n      indirectReferrals\n      layers {\n        first {\n          displayName\n          profileImage\n          username\n        }\n        second {\n          displayName\n          profileImage\n          username\n        }\n        third {\n          displayName\n          profileImage\n          username\n        }\n        fourth {\n          displayName\n          profileImage\n          username\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Get5LatestSignups {\n    get5LatestSignups {\n      username\n      referredBy {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query Get5LatestSignups {\n    get5LatestSignups {\n      username\n      referredBy {\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTop100UsersByPoints {\n    getTop100UsersByPoints {\n      username\n      points {\n        total\n      }\n      referredBy {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTop100UsersByPoints {\n    getTop100UsersByPoints {\n      username\n      points {\n        total\n      }\n      referredBy {\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetNumberOfUsers {\n    getNumberOfUsers\n  }\n"): (typeof documents)["\n  query GetNumberOfUsers {\n    getNumberOfUsers\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPreSignUpData {\n    getTop100UsersByPoints {\n      username\n      twitterHandle\n      referredBy {\n        username\n      }\n      points {\n        total\n      }\n    }\n    get5LatestSignups {\n      username\n      createdAt\n      twitterHandle\n      referredBy {\n        username\n      }\n    }\n    getNumberOfUsers\n    getSelf {\n      username\n      walletAddress\n      referralCode\n      twitterHandle\n      email\n      points {\n        total\n        directReferrals\n        layer2Referrals\n        layer3Referrals\n        layer4Referrals\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPreSignUpData {\n    getTop100UsersByPoints {\n      username\n      twitterHandle\n      referredBy {\n        username\n      }\n      points {\n        total\n      }\n    }\n    get5LatestSignups {\n      username\n      createdAt\n      twitterHandle\n      referredBy {\n        username\n      }\n    }\n    getNumberOfUsers\n    getSelf {\n      username\n      walletAddress\n      referralCode\n      twitterHandle\n      email\n      points {\n        total\n        directReferrals\n        layer2Referrals\n        layer3Referrals\n        layer4Referrals\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSelf {\n    getSelf {\n      username\n      walletAddress\n      referralCode\n      twitterHandle\n      email\n      uid\n      points {\n        total\n        directReferrals\n        layer2Referrals\n        layer3Referrals\n        layer4Referrals\n      }\n      bio\n      seeker {\n        about\n        links\n      }\n\n      solver {\n        about\n        currentAvailability\n        portfolioLinks\n        skills\n      }\n      location {\n        city\n        continent\n        country\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSelf {\n    getSelf {\n      username\n      walletAddress\n      referralCode\n      twitterHandle\n      email\n      uid\n      points {\n        total\n        directReferrals\n        layer2Referrals\n        layer3Referrals\n        layer4Referrals\n      }\n      bio\n      seeker {\n        about\n        links\n      }\n\n      solver {\n        about\n        currentAvailability\n        portfolioLinks\n        skills\n      }\n      location {\n        city\n        continent\n        country\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSelfUser {\n    getSelf {\n      _id\n      username\n      profileImage\n      displayName\n      nftId\n    }\n  }\n"): (typeof documents)["\n  query GetSelfUser {\n    getSelf {\n      _id\n      username\n      profileImage\n      displayName\n      nftId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSelfForLogin {\n    getSelf {\n      username\n    }\n  }\n"): (typeof documents)["\n  query GetSelfForLogin {\n    getSelf {\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSelfSeeker {\n    getSelfSeeker {\n      about\n      links\n    }\n  }\n"): (typeof documents)["\n  query GetSelfSeeker {\n    getSelfSeeker {\n      about\n      links\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSelfSolver {\n    getSelfSolver {\n      about\n      currentAvailability\n      portfolioLinks\n      skills\n    }\n  }\n"): (typeof documents)["\n  query GetSelfSolver {\n    getSelfSolver {\n      about\n      currentAvailability\n      portfolioLinks\n      skills\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSelfProfile {\n    getSelf {\n      _id\n      bio\n      createdAt\n      discord\n      displayName\n      email\n      follows {\n        _id\n      }\n      github\n      interests\n      linkedin\n      location {\n        city\n        continent\n        country\n      }\n      nftId\n      profileBanner\n      profileImage\n      referralCode\n      telegram\n      twitterHandle\n      username\n      walletAddress\n      website\n      zkMeId\n      followers {\n        _id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSelfProfile {\n    getSelf {\n      _id\n      bio\n      createdAt\n      discord\n      displayName\n      email\n      follows {\n        _id\n      }\n      github\n      interests\n      linkedin\n      location {\n        city\n        continent\n        country\n      }\n      nftId\n      profileBanner\n      profileImage\n      referralCode\n      telegram\n      twitterHandle\n      username\n      walletAddress\n      website\n      zkMeId\n      followers {\n        _id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSelfCompletionCheck {\n    getSelf {\n      _id\n      nftId\n    }\n  }\n"): (typeof documents)["\n  query GetSelfCompletionCheck {\n    getSelf {\n      _id\n      nftId\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;