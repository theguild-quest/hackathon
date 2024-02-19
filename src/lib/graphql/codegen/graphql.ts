/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `File` scalar type represents a file upload. */
  File: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ID']['output'];
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  author?: Maybe<User>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  hasLiked?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<LikePage>;
  replies?: Maybe<CommentsPage>;
};


export type CommentRepliesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentsPage = {
  __typename?: 'CommentsPage';
  comments?: Maybe<Array<Maybe<Comment>>>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  total: Scalars['Int']['output'];
};

export type Dispute = {
  __typename?: 'Dispute';
  _id: Scalars['ID']['output'];
  appeal?: Maybe<Scalars['String']['output']>;
  closeDate?: Maybe<Scalars['String']['output']>;
  decision?: Maybe<Scalars['String']['output']>;
  evidence?: Maybe<Array<Maybe<Evidence>>>;
  openDate?: Maybe<Scalars['String']['output']>;
  solverDeadline?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Evidence = {
  __typename?: 'Evidence';
  _id: Scalars['ID']['output'];
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  content?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type EvidenceInput = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
};

export type Hashtag = {
  __typename?: 'Hashtag';
  name: Scalars['String']['output'];
};

export type JobEmailNotifications = {
  __typename?: 'JobEmailNotifications';
  directMessages?: Maybe<Scalars['Boolean']['output']>;
  jobProposals?: Maybe<Scalars['Boolean']['output']>;
  jobStatusUpdates?: Maybe<Scalars['Boolean']['output']>;
  levelUpPlatformLevel?: Maybe<Scalars['Boolean']['output']>;
  levelUpReferralNftTier?: Maybe<Scalars['Boolean']['output']>;
  newJobPostings?: Maybe<Scalars['Boolean']['output']>;
  newReviews?: Maybe<Scalars['Boolean']['output']>;
  xpGained?: Maybe<Scalars['Boolean']['output']>;
};

export type JobEmailNotificationsInput = {
  directMessages?: InputMaybe<Scalars['Boolean']['input']>;
  jobProposals?: InputMaybe<Scalars['Boolean']['input']>;
  jobStatusUpdates?: InputMaybe<Scalars['Boolean']['input']>;
  levelUpPlatformLevel?: InputMaybe<Scalars['Boolean']['input']>;
  levelUpReferralNftTier?: InputMaybe<Scalars['Boolean']['input']>;
  newJobPostings?: InputMaybe<Scalars['Boolean']['input']>;
  newReviews?: InputMaybe<Scalars['Boolean']['input']>;
  xpGained?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LikePage = {
  __typename?: 'LikePage';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  total: Scalars['Int']['output'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type Location = {
  __typename?: 'Location';
  city: Scalars['String']['output'];
  continent: Scalars['String']['output'];
  country: Scalars['String']['output'];
};

export type LocationInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  continent?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addArbitratorToDispute?: Maybe<Dispute>;
  blockUser?: Maybe<User>;
  closeDispute?: Maybe<Dispute>;
  completeProfile?: Maybe<User>;
  createComment?: Maybe<Comment>;
  createDispute?: Maybe<Dispute>;
  createEvidenceForDispute?: Maybe<Evidence>;
  createPost?: Maybe<Post>;
  createReply?: Maybe<Comment>;
  createService?: Maybe<Service>;
  createWallet?: Maybe<User>;
  deleteComment?: Maybe<Scalars['Boolean']['output']>;
  deleteEvidence?: Maybe<Evidence>;
  deletePost?: Maybe<Scalars['Boolean']['output']>;
  deleteService?: Maybe<Service>;
  editAccountInformation?: Maybe<User>;
  editNotificationSettings?: Maybe<NotificationSettings>;
  editProfile?: Maybe<User>;
  editSeekerInformation?: Maybe<Seeker>;
  editSolverInformation?: Maybe<Solver>;
  followUser?: Maybe<User>;
  likeComment?: Maybe<Comment>;
  likePost?: Maybe<Post>;
  link?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['String']['output']>;
  register?: Maybe<User>;
  repost?: Maybe<Post>;
  savePost?: Maybe<Post>;
  sortPostsByDate?: Maybe<Post>;
  triggerNotification?: Maybe<Scalars['String']['output']>;
  unblockUser?: Maybe<User>;
  unfollowUser?: Maybe<User>;
  unlikeComment?: Maybe<Comment>;
  unlikePost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  updateService?: Maybe<Service>;
  verifyReferralCode?: Maybe<Scalars['Boolean']['output']>;
  verifyUsername?: Maybe<Scalars['Boolean']['output']>;
  voteOnDispute?: Maybe<Dispute>;
};


export type MutationAddArbitratorToDisputeArgs = {
  disputeId: Scalars['String']['input'];
};


export type MutationBlockUserArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCloseDisputeArgs = {
  decision: Scalars['String']['input'];
  disputeId: Scalars['String']['input'];
};


export type MutationCompleteProfileArgs = {
  profileImageFile?: InputMaybe<Scalars['File']['input']>;
  walletAddress?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCommentArgs = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  content: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};


export type MutationCreateDisputeArgs = {
  appeal: Scalars['String']['input'];
  evidence?: InputMaybe<Array<InputMaybe<EvidenceInput>>>;
};


export type MutationCreateEvidenceForDisputeArgs = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  disputeId: Scalars['String']['input'];
  role: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  quotePostId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateReplyArgs = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  commentId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};


export type MutationCreateServiceArgs = {
  description: Scalars['String']['input'];
  isRemote: Scalars['Boolean']['input'];
  location: LocationInput;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['File']['input']>;
  priceRange: Array<InputMaybe<Scalars['Float']['input']>>;
  skills: Array<InputMaybe<Scalars['String']['input']>>;
  timeRange: Array<InputMaybe<Scalars['String']['input']>>;
  userId: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationDeleteEvidenceArgs = {
  evidenceId: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationDeleteServiceArgs = {
  serviceId: Scalars['String']['input'];
};


export type MutationEditAccountInformationArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  discord?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  profileBannerFile?: InputMaybe<Scalars['File']['input']>;
  profileImageFile?: InputMaybe<Scalars['File']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  walletAddress?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  zkMeId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditNotificationSettingsArgs = {
  jobEmailSettings?: InputMaybe<JobEmailNotificationsInput>;
  socialAppSettings?: InputMaybe<SocialAppNotificationsInput>;
  socialEmailSettings?: InputMaybe<SocialEmailNotificationsInput>;
};


export type MutationEditProfileArgs = {
  walletAddress?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditSeekerInformationArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationEditSolverInformationArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  currentAvailability?: InputMaybe<Scalars['Boolean']['input']>;
  portfolioLinks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationFollowUserArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLikeCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationLikePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationLinkArgs = {
  twitterHandle: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  idToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  idToken: Scalars['String']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  walletAddress?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRepostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationSavePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationUnblockUserArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnfollowUserArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlikeCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationUnlikePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationUpdateServiceArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  isRemote?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['File']['input']>;
  priceRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  serviceId: Scalars['String']['input'];
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timeRange?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationVerifyReferralCodeArgs = {
  referralCode: Scalars['String']['input'];
};


export type MutationVerifyUsernameArgs = {
  username: Scalars['String']['input'];
};


export type MutationVoteOnDisputeArgs = {
  disputeId: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  ruling: Scalars['String']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  _id: Scalars['ID']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
};

export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  jobEmailNotifications?: Maybe<JobEmailNotifications>;
  socialAppNotifications?: Maybe<SocialAppNotifications>;
  socialEmailNotifications?: Maybe<SocialEmailNotifications>;
};

export type Points = {
  __typename?: 'Points';
  directReferrals: Scalars['Int']['output'];
  layer2Referrals?: Maybe<Scalars['Int']['output']>;
  layer3Referrals?: Maybe<Scalars['Int']['output']>;
  layer4Referrals?: Maybe<Scalars['Int']['output']>;
  total: Scalars['Int']['output'];
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['ID']['output'];
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  author?: Maybe<User>;
  comments?: Maybe<CommentsPage>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  hasCommented?: Maybe<Scalars['Boolean']['output']>;
  hasLiked: Scalars['Boolean']['output'];
  hasReposted?: Maybe<Scalars['Boolean']['output']>;
  hashtags?: Maybe<Array<Maybe<Hashtag>>>;
  isPinned: Scalars['Boolean']['output'];
  isQuote?: Maybe<Scalars['Boolean']['output']>;
  isRepost?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<LikePage>;
  originalPostId?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  quotesEngagement?: Maybe<QuotesEngagement>;
  repost?: Maybe<Post>;
  repostsEngagement?: Maybe<RepostsEngagement>;
};


export type PostCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PostLikesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PostQuotesEngagementArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PostRepostsEngagementArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PostDetails = {
  __typename?: 'PostDetails';
  commentsCount?: Maybe<Scalars['Int']['output']>;
  likesCount?: Maybe<Scalars['Int']['output']>;
  post?: Maybe<Post>;
  repostsCount?: Maybe<Scalars['Int']['output']>;
};

export type PostEngagements = {
  __typename?: 'PostEngagements';
  postCount?: Maybe<Scalars['Int']['output']>;
  posts?: Maybe<Array<Maybe<PostDetails>>>;
};

export type PostsPage = {
  __typename?: 'PostsPage';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  posts: Array<Maybe<Post>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  checkReferralCode?: Maybe<Scalars['Boolean']['output']>;
  filterDisputesByCloseDateRange?: Maybe<Array<Maybe<Dispute>>>;
  filterDisputesByDateRange?: Maybe<Array<Maybe<Dispute>>>;
  filterDisputesByDecision?: Maybe<Array<Maybe<Dispute>>>;
  filterServicesByDateRange?: Maybe<Array<Maybe<Service>>>;
  filterServicesByPriceRange?: Maybe<Array<Maybe<Service>>>;
  filterServicesByisRemote?: Maybe<Array<Maybe<Service>>>;
  get5LatestSignups?: Maybe<Array<Maybe<User>>>;
  getArbitrators?: Maybe<Array<Maybe<User>>>;
  getBlockedUsersWithCount?: Maybe<BlockUserList>;
  getCommentsByPost?: Maybe<CommentsPage>;
  getDisputeById?: Maybe<Dispute>;
  getDisputes?: Maybe<Array<Maybe<Dispute>>>;
  getDisputesByArbitratorId?: Maybe<Array<Maybe<Dispute>>>;
  getDisputesByUserId?: Maybe<Array<Maybe<Dispute>>>;
  getEvidenceById?: Maybe<Evidence>;
  getEvidences?: Maybe<Array<Maybe<Evidence>>>;
  getEvidencesByDisputeId?: Maybe<Array<Maybe<Evidence>>>;
  getEvidencesByUserId?: Maybe<Array<Maybe<Evidence>>>;
  getNotificationSettings?: Maybe<NotificationSettings>;
  getNumberOfUsers?: Maybe<Scalars['Int']['output']>;
  getPostById?: Maybe<PostDetails>;
  getPostCommentsById?: Maybe<Array<Maybe<Comment>>>;
  getPostsEngagement?: Maybe<PostEngagements>;
  getReferrals?: Maybe<ReferralUsersData>;
  getRepliesByComment?: Maybe<CommentsPage>;
  getSavedPosts?: Maybe<PostsPage>;
  getSelf?: Maybe<User>;
  getSelfSeeker?: Maybe<Seeker>;
  getSelfSolver?: Maybe<Solver>;
  getServiceById?: Maybe<Service>;
  getTop100UsersByPoints?: Maybe<Array<Maybe<User>>>;
  getTrendingHashtags?: Maybe<Hashtag>;
  getTrendingPosts?: Maybe<PostsPage>;
  getUserById?: Maybe<User>;
  posts?: Maybe<Array<Maybe<Post>>>;
  services?: Maybe<Array<Maybe<Service>>>;
  sortPostsByDate?: Maybe<PostsPage>;
  sortServicesByDate?: Maybe<Array<Maybe<Service>>>;
  sortServicesByPrice?: Maybe<Array<Maybe<Service>>>;
  sortServicesByisRemote?: Maybe<Array<Maybe<Service>>>;
};


export type QueryCheckReferralCodeArgs = {
  referralCode: Scalars['String']['input'];
};


export type QueryFilterDisputesByCloseDateRangeArgs = {
  end?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFilterDisputesByDateRangeArgs = {
  end?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFilterDisputesByDecisionArgs = {
  decision?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFilterServicesByDateRangeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  maxDate?: InputMaybe<Scalars['String']['input']>;
  minDate?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFilterServicesByPriceRangeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFilterServicesByisRemoteArgs = {
  isRemote: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetArbitratorsArgs = {
  disputeId: Scalars['String']['input'];
};


export type QueryGetCommentsByPostArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDisputeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDisputesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDisputesByArbitratorIdArgs = {
  arbitratorId: Scalars['String']['input'];
};


export type QueryGetEvidenceByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetEvidencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEvidencesByDisputeIdArgs = {
  disputeId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEvidencesByUserIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostByIdArgs = {
  postId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPostCommentsByIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostsEngagementArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetReferralsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetRepliesByCommentArgs = {
  commentId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSavedPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetServiceByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTrendingHashtagsArgs = {
  hours?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTrendingPostsArgs = {
  hours?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserByIdArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySortPostsByDateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySortServicesByDateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySortServicesByPriceArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySortServicesByisRemoteArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type QuotesEngagement = {
  __typename?: 'QuotesEngagement';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  posts?: Maybe<Array<Maybe<Array<Maybe<Post>>>>>;
  total: Scalars['Int']['output'];
};

export type RepostsEngagement = {
  __typename?: 'RepostsEngagement';
  authors?: Maybe<Array<Maybe<User>>>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  total: Scalars['Int']['output'];
};

export type Seeker = {
  __typename?: 'Seeker';
  about?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Service = {
  __typename?: 'Service';
  Location?: Maybe<Location>;
  _id: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hashtags?: Maybe<Array<Maybe<Hashtag>>>;
  isRemote?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  postDate?: Maybe<Scalars['String']['output']>;
  priceRange?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  skills?: Maybe<Array<Maybe<Skill>>>;
  timeRange?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Skill = {
  __typename?: 'Skill';
  name: Scalars['String']['output'];
};

export type SocialAppNotificationsInput = {
  comments?: InputMaybe<Scalars['Boolean']['input']>;
  directMessages?: InputMaybe<Scalars['Boolean']['input']>;
  likes?: InputMaybe<Scalars['Boolean']['input']>;
  mentions?: InputMaybe<Scalars['Boolean']['input']>;
  messageRequests?: InputMaybe<Scalars['Boolean']['input']>;
  newFollowers?: InputMaybe<Scalars['Boolean']['input']>;
  reposts?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialEmailNotifications = {
  __typename?: 'SocialEmailNotifications';
  comments?: Maybe<Scalars['Boolean']['output']>;
  directMessages?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<Scalars['Boolean']['output']>;
  mentions?: Maybe<Scalars['Boolean']['output']>;
  messageRequests?: Maybe<Scalars['Boolean']['output']>;
  newFollowers?: Maybe<Scalars['Boolean']['output']>;
  reposts?: Maybe<Scalars['Boolean']['output']>;
};

export type SocialEmailNotificationsInput = {
  comments?: InputMaybe<Scalars['Boolean']['input']>;
  directMessages?: InputMaybe<Scalars['Boolean']['input']>;
  likes?: InputMaybe<Scalars['Boolean']['input']>;
  mentions?: InputMaybe<Scalars['Boolean']['input']>;
  messageRequests?: InputMaybe<Scalars['Boolean']['input']>;
  newFollowers?: InputMaybe<Scalars['Boolean']['input']>;
  reposts?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Solver = {
  __typename?: 'Solver';
  about?: Maybe<Scalars['String']['output']>;
  currentAvailability?: Maybe<Scalars['Boolean']['output']>;
  portfolioLinks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  skills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  notificationAdded?: Maybe<Notification>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  disputes?: Maybe<Array<Maybe<Dispute>>>;
  email?: Maybe<Scalars['String']['output']>;
  evidences?: Maybe<Array<Maybe<Evidence>>>;
  followers?: Maybe<Array<Maybe<User>>>;
  follows?: Maybe<Array<Maybe<User>>>;
  github?: Maybe<Scalars['String']['output']>;
  interests?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  nftId?: Maybe<Scalars['String']['output']>;
  notificationSettings?: Maybe<NotificationSettings>;
  points?: Maybe<Points>;
  posts?: Maybe<Array<Maybe<Post>>>;
  profileBanner?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  referralsData?: Maybe<ReferralUsersData>;
  referredBy?: Maybe<User>;
  seeker?: Maybe<Seeker>;
  solver?: Maybe<Solver>;
  telegram?: Maybe<Scalars['String']['output']>;
  twitterHandle?: Maybe<Scalars['String']['output']>;
  uid: Scalars['ID']['output'];
  username: Scalars['String']['output'];
  walletAddress?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  zkMeId?: Maybe<Scalars['String']['output']>;
};


export type UserReferralsDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockUserList = {
  __typename?: 'blockUserList';
  blockedUsers?: Maybe<Array<Maybe<User>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type ReferralUsers = {
  __typename?: 'referralUsers';
  first?: Maybe<Array<Maybe<User>>>;
  fourth?: Maybe<Array<Maybe<User>>>;
  second?: Maybe<Array<Maybe<User>>>;
  third?: Maybe<Array<Maybe<User>>>;
};

export type ReferralUsersData = {
  __typename?: 'referralUsersData';
  directReferrals?: Maybe<Scalars['Int']['output']>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  indirectReferrals?: Maybe<Scalars['Int']['output']>;
  layers?: Maybe<ReferralUsers>;
};

export type SocialAppNotifications = {
  __typename?: 'socialAppNotifications';
  comments?: Maybe<Scalars['Boolean']['output']>;
  directMessages?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<Scalars['Boolean']['output']>;
  mentions?: Maybe<Scalars['Boolean']['output']>;
  messageRequests?: Maybe<Scalars['Boolean']['output']>;
  newFollowers?: Maybe<Scalars['Boolean']['output']>;
  reposts?: Maybe<Scalars['Boolean']['output']>;
};

export type CreatePostMutationVariables = Exact<{
  content: Scalars['String']['input'];
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>> | InputMaybe<Scalars['File']['input']>>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'Post', _id: string } | null };

export type UpdatePostMutationVariables = Exact<{
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'Post', _id: string } | null };

export type CreateCommentMutationVariables = Exact<{
  content: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>> | InputMaybe<Scalars['File']['input']>>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', _id: string } | null };

export type CreateReplyMutationVariables = Exact<{
  content: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
  attachments?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>> | InputMaybe<Scalars['File']['input']>>;
}>;


export type CreateReplyMutation = { __typename?: 'Mutation', createReply?: { __typename?: 'Comment', _id: string } | null };

export type CreateRepostMutationVariables = Exact<{
  postId: Scalars['String']['input'];
}>;


export type CreateRepostMutation = { __typename?: 'Mutation', repost?: { __typename?: 'Post', _id: string } | null };

export type LikePostMutationVariables = Exact<{
  postId: Scalars['String']['input'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost?: { __typename?: 'Post', _id: string } | null };

export type UnlikePostMutationVariables = Exact<{
  postId: Scalars['String']['input'];
}>;


export type UnlikePostMutation = { __typename?: 'Mutation', unlikePost?: { __typename?: 'Post', _id: string } | null };

export type LikeCommentMutationVariables = Exact<{
  commentId: Scalars['String']['input'];
}>;


export type LikeCommentMutation = { __typename?: 'Mutation', likeComment?: { __typename?: 'Comment', _id: string } | null };

export type UnlikeCommentMutationVariables = Exact<{
  commentId: Scalars['String']['input'];
}>;


export type UnlikeCommentMutation = { __typename?: 'Mutation', unlikeComment?: { __typename?: 'Comment', _id: string } | null };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['String']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost?: boolean | null };

export type DeleteCommentMutationVariables = Exact<{
  commentId: Scalars['String']['input'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: boolean | null };

export type CreateWalletMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateWalletMutation = { __typename?: 'Mutation', createWallet?: { __typename?: 'User', walletAddress?: string | null } | null };

export type EditAccountInformationMutationVariables = Exact<{
  displayName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  profileImageFile?: InputMaybe<Scalars['File']['input']>;
  profileBannerFile?: InputMaybe<Scalars['File']['input']>;
  interests?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  website?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  discord?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditAccountInformationMutation = { __typename?: 'Mutation', editAccountInformation?: { __typename?: 'User', _id: string } | null };

export type EditSolverInformationMutationVariables = Exact<{
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  portfolioLinks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  currentAvailability?: InputMaybe<Scalars['Boolean']['input']>;
  about?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditSolverInformationMutation = { __typename?: 'Mutation', editSolverInformation?: { __typename?: 'Solver', currentAvailability?: boolean | null } | null };

export type EditSeekerInformationMutationVariables = Exact<{
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  about?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditSeekerInformationMutation = { __typename?: 'Mutation', editSeekerInformation?: { __typename?: 'Seeker', about?: string | null } | null };

export type EditNotificationSettingsMutationVariables = Exact<{
  jobEmailSettings?: InputMaybe<JobEmailNotificationsInput>;
  socialAppSettings?: InputMaybe<SocialAppNotificationsInput>;
  socialEmailSettings?: InputMaybe<SocialEmailNotificationsInput>;
}>;


export type EditNotificationSettingsMutation = { __typename?: 'Mutation', editNotificationSettings?: { __typename?: 'NotificationSettings', jobEmailNotifications?: { __typename?: 'JobEmailNotifications', directMessages?: boolean | null, jobProposals?: boolean | null, jobStatusUpdates?: boolean | null, levelUpPlatformLevel?: boolean | null, levelUpReferralNftTier?: boolean | null, newJobPostings?: boolean | null, newReviews?: boolean | null, xpGained?: boolean | null } | null, socialAppNotifications?: { __typename?: 'socialAppNotifications', comments?: boolean | null, directMessages?: boolean | null, likes?: boolean | null, mentions?: boolean | null, messageRequests?: boolean | null, newFollowers?: boolean | null, reposts?: boolean | null } | null, socialEmailNotifications?: { __typename?: 'SocialEmailNotifications', comments?: boolean | null, directMessages?: boolean | null, likes?: boolean | null, mentions?: boolean | null, messageRequests?: boolean | null, newFollowers?: boolean | null, reposts?: boolean | null } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: string | null };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
  idToken: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'User', uid: string, username: string } | null };

export type EditProfileMutationVariables = Exact<{
  walletAddress: Scalars['String']['input'];
}>;


export type EditProfileMutation = { __typename?: 'Mutation', editProfile?: { __typename?: 'User', walletAddress?: string | null } | null };

export type LinkProviderMutationVariables = Exact<{
  twitterHandle: Scalars['String']['input'];
}>;


export type LinkProviderMutation = { __typename?: 'Mutation', link?: { __typename?: 'User', twitterHandle?: string | null } | null };

export type CheckUsernameMutationVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type CheckUsernameMutation = { __typename?: 'Mutation', verifyUsername?: boolean | null };

export type CheckReferralCodeMutationVariables = Exact<{
  referralCode: Scalars['String']['input'];
}>;


export type CheckReferralCodeMutation = { __typename?: 'Mutation', verifyReferralCode?: boolean | null };

export type LoginMutationVariables = Exact<{
  idToken: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', _id: string, displayName?: string | null, username: string, profileImage?: string | null } | null };

export type CompleteProfileMutationVariables = Exact<{
  walletAddress: Scalars['String']['input'];
  profileImageFile: Scalars['File']['input'];
}>;


export type CompleteProfileMutation = { __typename?: 'Mutation', completeProfile?: { __typename?: 'User', _id: string, walletAddress?: string | null, zkMeId?: string | null } | null };

export type BlockUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type BlockUserMutation = { __typename?: 'Mutation', blockUser?: { __typename?: 'User', _id: string } | null };

export type UnblockUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type UnblockUserMutation = { __typename?: 'Mutation', unblockUser?: { __typename?: 'User', _id: string } | null };

export type FollowUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser?: { __typename?: 'User', _id: string } | null };

export type UnfollowUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type UnfollowUserMutation = { __typename?: 'Mutation', unfollowUser?: { __typename?: 'User', _id: string } | null };

export type GetFeedPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetFeedPostsQuery = { __typename?: 'Query', sortPostsByDate?: { __typename?: 'PostsPage', posts: Array<{ __typename?: 'Post', _id: string, attachments?: Array<string | null> | null, content?: string | null, createdAt?: string | null, hasLiked: boolean, isQuote?: boolean | null, isRepost?: boolean | null, author?: { __typename?: 'User', _id: string, displayName?: string | null, username: string, profileImage?: string | null } | null, likes?: { __typename?: 'LikePage', total: number } | null, quotesEngagement?: { __typename?: 'QuotesEngagement', total: number } | null, repostsEngagement?: { __typename?: 'RepostsEngagement', total: number } | null, comments?: { __typename?: 'CommentsPage', total: number } | null, repost?: { __typename?: 'Post', _id: string, attachments?: Array<string | null> | null, content?: string | null, createdAt?: string | null, hasLiked: boolean, author?: { __typename?: 'User', _id: string, displayName?: string | null, username: string, profileImage?: string | null } | null } | null } | null> } | null };

export type GetPostByIdQueryVariables = Exact<{
  postId: Scalars['String']['input'];
  commentsLimit: Scalars['Int']['input'];
  commentsSkip: Scalars['Int']['input'];
  repliesLimit: Scalars['Int']['input'];
  repliesSkip: Scalars['Int']['input'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', getPostById?: { __typename?: 'PostDetails', post?: { __typename?: 'Post', _id: string, attachments?: Array<string | null> | null, content?: string | null, createdAt?: string | null, hasLiked: boolean, isQuote?: boolean | null, isRepost?: boolean | null, author?: { __typename?: 'User', _id: string, displayName?: string | null, username: string, profileImage?: string | null } | null, likes?: { __typename?: 'LikePage', total: number } | null, quotesEngagement?: { __typename?: 'QuotesEngagement', total: number } | null, repostsEngagement?: { __typename?: 'RepostsEngagement', total: number } | null, repost?: { __typename?: 'Post', _id: string, attachments?: Array<string | null> | null, content?: string | null, createdAt?: string | null, hasLiked: boolean, author?: { __typename?: 'User', _id: string, displayName?: string | null, username: string, profileImage?: string | null } | null } | null, comments?: { __typename?: 'CommentsPage', total: number, comments?: Array<{ __typename?: 'Comment', _id: string, attachments?: Array<string | null> | null, createdAt?: string | null, content: string, author?: { __typename?: 'User', _id: string, username: string, displayName?: string | null, profileImage?: string | null } | null, likes?: { __typename?: 'LikePage', total: number } | null, replies?: { __typename?: 'CommentsPage', total: number, comments?: Array<{ __typename?: 'Comment', _id: string, createdAt?: string | null, attachments?: Array<string | null> | null, content: string, author?: { __typename?: 'User', _id: string, displayName?: string | null, profileImage?: string | null, username: string } | null, likes?: { __typename?: 'LikePage', total: number } | null } | null> | null } | null } | null> | null } | null } | null } | null };

export type GetPostEngagementsByIdQueryVariables = Exact<{
  postId: Scalars['String']['input'];
}>;


export type GetPostEngagementsByIdQuery = { __typename?: 'Query', getPostById?: { __typename?: 'PostDetails', commentsCount?: number | null, likesCount?: number | null, repostsCount?: number | null } | null };

export type GetTrendingPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  hours?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTrendingPostsQuery = { __typename?: 'Query', getTrendingPosts?: { __typename?: 'PostsPage', posts: Array<{ __typename?: 'Post', _id: string, attachments?: Array<string | null> | null, content?: string | null, createdAt?: string | null, hasLiked: boolean, isQuote?: boolean | null, isRepost?: boolean | null, author?: { __typename?: 'User', _id: string, displayName?: string | null, username: string, profileImage?: string | null } | null, likes?: { __typename?: 'LikePage', total: number } | null, quotesEngagement?: { __typename?: 'QuotesEngagement', total: number } | null, repostsEngagement?: { __typename?: 'RepostsEngagement', total: number } | null, comments?: { __typename?: 'CommentsPage', total: number } | null, repost?: { __typename?: 'Post', _id: string, attachments?: Array<string | null> | null, content?: string | null, createdAt?: string | null, hasLiked: boolean, author?: { __typename?: 'User', _id: string, displayName?: string | null, username: string, profileImage?: string | null } | null } | null } | null> } | null };

export type GetAccountInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountInformationQuery = { __typename?: 'Query', getSelf?: { __typename?: 'User', displayName?: string | null, email?: string | null, twitterHandle?: string | null, username: string, walletAddress?: string | null, referralCode?: string | null, bio?: string | null, zkMeId?: string | null, website?: string | null, linkedin?: string | null, discord?: string | null, github?: string | null, telegram?: string | null, interests?: Array<string | null> | null, profileImage?: string | null, profileBanner?: string | null, location?: { __typename?: 'Location', city: string, country: string, continent: string } | null, points?: { __typename?: 'Points', total: number, directReferrals: number, layer2Referrals?: number | null, layer3Referrals?: number | null, layer4Referrals?: number | null } | null } | null };

export type GetSolverInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSolverInformationQuery = { __typename?: 'Query', getSelfSolver?: { __typename?: 'Solver', skills?: Array<string | null> | null, portfolioLinks?: Array<string | null> | null, currentAvailability?: boolean | null, about?: string | null } | null };

export type GetSeekerInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeekerInformationQuery = { __typename?: 'Query', getSelfSeeker?: { __typename?: 'Seeker', about?: string | null, links?: Array<string | null> | null } | null };

export type GetNotificationSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationSettingsQuery = { __typename?: 'Query', getNotificationSettings?: { __typename?: 'NotificationSettings', jobEmailNotifications?: { __typename?: 'JobEmailNotifications', directMessages?: boolean | null, jobProposals?: boolean | null, jobStatusUpdates?: boolean | null, levelUpPlatformLevel?: boolean | null, levelUpReferralNftTier?: boolean | null, newJobPostings?: boolean | null, newReviews?: boolean | null, xpGained?: boolean | null } | null, socialAppNotifications?: { __typename?: 'socialAppNotifications', comments?: boolean | null, directMessages?: boolean | null, likes?: boolean | null, mentions?: boolean | null, messageRequests?: boolean | null, newFollowers?: boolean | null, reposts?: boolean | null } | null, socialEmailNotifications?: { __typename?: 'SocialEmailNotifications', comments?: boolean | null, directMessages?: boolean | null, likes?: boolean | null, mentions?: boolean | null, messageRequests?: boolean | null, newFollowers?: boolean | null, reposts?: boolean | null } | null } | null };

export type GetBlockedUsersWithCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlockedUsersWithCountQuery = { __typename?: 'Query', getBlockedUsersWithCount?: { __typename?: 'blockUserList', count?: number | null, blockedUsers?: Array<{ __typename?: 'User', displayName?: string | null, username: string, profileImage?: string | null } | null> | null } | null };

export type GetReferralsQueryVariables = Exact<{
  searchText?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetReferralsQuery = { __typename?: 'Query', getReferrals?: { __typename?: 'referralUsersData', directReferrals?: number | null, hasNext?: boolean | null, indirectReferrals?: number | null, layers?: { __typename?: 'referralUsers', first?: Array<{ __typename?: 'User', displayName?: string | null, profileImage?: string | null, username: string } | null> | null, second?: Array<{ __typename?: 'User', displayName?: string | null, profileImage?: string | null, username: string } | null> | null, third?: Array<{ __typename?: 'User', displayName?: string | null, profileImage?: string | null, username: string } | null> | null, fourth?: Array<{ __typename?: 'User', displayName?: string | null, profileImage?: string | null, username: string } | null> | null } | null } | null };

export type Get5LatestSignupsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get5LatestSignupsQuery = { __typename?: 'Query', get5LatestSignups?: Array<{ __typename?: 'User', username: string, referredBy?: { __typename?: 'User', username: string } | null } | null> | null };

export type GetTop100UsersByPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTop100UsersByPointsQuery = { __typename?: 'Query', getTop100UsersByPoints?: Array<{ __typename?: 'User', username: string, points?: { __typename?: 'Points', total: number } | null, referredBy?: { __typename?: 'User', username: string } | null } | null> | null };

export type GetNumberOfUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNumberOfUsersQuery = { __typename?: 'Query', getNumberOfUsers?: number | null };

export type GetPreSignUpDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPreSignUpDataQuery = { __typename?: 'Query', getNumberOfUsers?: number | null, getTop100UsersByPoints?: Array<{ __typename?: 'User', username: string, twitterHandle?: string | null, referredBy?: { __typename?: 'User', username: string } | null, points?: { __typename?: 'Points', total: number } | null } | null> | null, get5LatestSignups?: Array<{ __typename?: 'User', username: string, createdAt?: string | null, twitterHandle?: string | null, referredBy?: { __typename?: 'User', username: string } | null } | null> | null, getSelf?: { __typename?: 'User', username: string, walletAddress?: string | null, referralCode?: string | null, twitterHandle?: string | null, email?: string | null, points?: { __typename?: 'Points', total: number, directReferrals: number, layer2Referrals?: number | null, layer3Referrals?: number | null, layer4Referrals?: number | null } | null } | null };

export type GetSelfQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfQuery = { __typename?: 'Query', getSelf?: { __typename?: 'User', username: string, walletAddress?: string | null, referralCode?: string | null, twitterHandle?: string | null, email?: string | null, uid: string, bio?: string | null, points?: { __typename?: 'Points', total: number, directReferrals: number, layer2Referrals?: number | null, layer3Referrals?: number | null, layer4Referrals?: number | null } | null, seeker?: { __typename?: 'Seeker', about?: string | null, links?: Array<string | null> | null } | null, solver?: { __typename?: 'Solver', about?: string | null, currentAvailability?: boolean | null, portfolioLinks?: Array<string | null> | null, skills?: Array<string | null> | null } | null, location?: { __typename?: 'Location', city: string, continent: string, country: string } | null } | null };

export type GetSelfUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfUserQuery = { __typename?: 'Query', getSelf?: { __typename?: 'User', _id: string, username: string, profileImage?: string | null, displayName?: string | null, nftId?: string | null } | null };

export type GetSelfForLoginQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfForLoginQuery = { __typename?: 'Query', getSelf?: { __typename?: 'User', username: string } | null };

export type GetSelfSeekerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfSeekerQuery = { __typename?: 'Query', getSelfSeeker?: { __typename?: 'Seeker', about?: string | null, links?: Array<string | null> | null } | null };

export type GetSelfSolverQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfSolverQuery = { __typename?: 'Query', getSelfSolver?: { __typename?: 'Solver', about?: string | null, currentAvailability?: boolean | null, portfolioLinks?: Array<string | null> | null, skills?: Array<string | null> | null } | null };

export type GetSelfProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfProfileQuery = { __typename?: 'Query', getSelf?: { __typename?: 'User', _id: string, bio?: string | null, createdAt?: string | null, discord?: string | null, displayName?: string | null, email?: string | null, github?: string | null, interests?: Array<string | null> | null, linkedin?: string | null, nftId?: string | null, profileBanner?: string | null, profileImage?: string | null, referralCode?: string | null, telegram?: string | null, twitterHandle?: string | null, username: string, walletAddress?: string | null, website?: string | null, zkMeId?: string | null, follows?: Array<{ __typename?: 'User', _id: string } | null> | null, location?: { __typename?: 'Location', city: string, continent: string, country: string } | null, followers?: Array<{ __typename?: 'User', _id: string } | null> | null } | null };

export type GetSelfCompletionCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelfCompletionCheckQuery = { __typename?: 'Query', getSelf?: { __typename?: 'User', _id: string, nftId?: string | null } | null };


export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attachments"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"File"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"attachments"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attachments"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attachments"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"File"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"attachments"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attachments"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateReplyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createReply"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attachments"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"File"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReply"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"attachments"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attachments"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateReplyMutation, CreateReplyMutationVariables>;
export const CreateRepostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRepost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateRepostMutation, CreateRepostMutationVariables>;
export const LikePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"likePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<LikePostMutation, LikePostMutationVariables>;
export const UnlikePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unlikePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlikePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UnlikePostMutation, UnlikePostMutationVariables>;
export const LikeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"likeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<LikeCommentMutation, LikeCommentMutationVariables>;
export const UnlikeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unlikeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlikeComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UnlikeCommentMutation, UnlikeCommentMutationVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const CreateWalletDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}}]}}]}}]} as unknown as DocumentNode<CreateWalletMutation, CreateWalletMutationVariables>;
export const EditAccountInformationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditAccountInformation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bio"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileImageFile"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"File"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileBannerFile"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"File"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"interests"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"website"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"linkedin"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"discord"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"github"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"telegram"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editAccountInformation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"displayName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"displayName"}}},{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"Argument","name":{"kind":"Name","value":"bio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bio"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileImageFile"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileImageFile"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileBannerFile"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileBannerFile"}}},{"kind":"Argument","name":{"kind":"Name","value":"interests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"interests"}}},{"kind":"Argument","name":{"kind":"Name","value":"website"},"value":{"kind":"Variable","name":{"kind":"Name","value":"website"}}},{"kind":"Argument","name":{"kind":"Name","value":"linkedin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"linkedin"}}},{"kind":"Argument","name":{"kind":"Name","value":"discord"},"value":{"kind":"Variable","name":{"kind":"Name","value":"discord"}}},{"kind":"Argument","name":{"kind":"Name","value":"github"},"value":{"kind":"Variable","name":{"kind":"Name","value":"github"}}},{"kind":"Argument","name":{"kind":"Name","value":"telegram"},"value":{"kind":"Variable","name":{"kind":"Name","value":"telegram"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<EditAccountInformationMutation, EditAccountInformationMutationVariables>;
export const EditSolverInformationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditSolverInformation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skills"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolioLinks"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currentAvailability"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"about"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editSolverInformation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skills"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skills"}}},{"kind":"Argument","name":{"kind":"Name","value":"portfolioLinks"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolioLinks"}}},{"kind":"Argument","name":{"kind":"Name","value":"currentAvailability"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currentAvailability"}}},{"kind":"Argument","name":{"kind":"Name","value":"about"},"value":{"kind":"Variable","name":{"kind":"Name","value":"about"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAvailability"}}]}}]}}]} as unknown as DocumentNode<EditSolverInformationMutation, EditSolverInformationMutationVariables>;
export const EditSeekerInformationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditSeekerInformation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"links"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"about"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editSeekerInformation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"links"},"value":{"kind":"Variable","name":{"kind":"Name","value":"links"}}},{"kind":"Argument","name":{"kind":"Name","value":"about"},"value":{"kind":"Variable","name":{"kind":"Name","value":"about"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}}]}}]}}]} as unknown as DocumentNode<EditSeekerInformationMutation, EditSeekerInformationMutationVariables>;
export const EditNotificationSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditNotificationSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobEmailSettings"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JobEmailNotificationsInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"socialAppSettings"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialAppNotificationsInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"socialEmailSettings"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialEmailNotificationsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editNotificationSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jobEmailSettings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobEmailSettings"}}},{"kind":"Argument","name":{"kind":"Name","value":"socialAppSettings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"socialAppSettings"}}},{"kind":"Argument","name":{"kind":"Name","value":"socialEmailSettings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"socialEmailSettings"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobEmailNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directMessages"}},{"kind":"Field","name":{"kind":"Name","value":"jobProposals"}},{"kind":"Field","name":{"kind":"Name","value":"jobStatusUpdates"}},{"kind":"Field","name":{"kind":"Name","value":"levelUpPlatformLevel"}},{"kind":"Field","name":{"kind":"Name","value":"levelUpReferralNftTier"}},{"kind":"Field","name":{"kind":"Name","value":"newJobPostings"}},{"kind":"Field","name":{"kind":"Name","value":"newReviews"}},{"kind":"Field","name":{"kind":"Name","value":"xpGained"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialAppNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"directMessages"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"mentions"}},{"kind":"Field","name":{"kind":"Name","value":"messageRequests"}},{"kind":"Field","name":{"kind":"Name","value":"newFollowers"}},{"kind":"Field","name":{"kind":"Name","value":"reposts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialEmailNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"directMessages"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"mentions"}},{"kind":"Field","name":{"kind":"Name","value":"messageRequests"}},{"kind":"Field","name":{"kind":"Name","value":"newFollowers"}},{"kind":"Field","name":{"kind":"Name","value":"reposts"}}]}}]}}]}}]} as unknown as DocumentNode<EditNotificationSettingsMutation, EditNotificationSettingsMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"referralCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"twitterHandle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"referralCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"referralCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"twitterHandle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"twitterHandle"}}},{"kind":"Argument","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const EditProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"walletAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"walletAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"walletAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}}]}}]}}]} as unknown as DocumentNode<EditProfileMutation, EditProfileMutationVariables>;
export const LinkProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LinkProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"twitterHandle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"twitterHandle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"twitterHandle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"twitterHandle"}}]}}]}}]} as unknown as DocumentNode<LinkProviderMutation, LinkProviderMutationVariables>;
export const CheckUsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CheckUsername"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyUsername"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}]}}]} as unknown as DocumentNode<CheckUsernameMutation, CheckUsernameMutationVariables>;
export const CheckReferralCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CheckReferralCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"referralCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyReferralCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"referralCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"referralCode"}}}]}]}}]} as unknown as DocumentNode<CheckReferralCodeMutation, CheckReferralCodeMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CompleteProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"walletAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileImageFile"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"File"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileImageFile"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileImageFile"}}},{"kind":"Argument","name":{"kind":"Name","value":"walletAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"walletAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}},{"kind":"Field","name":{"kind":"Name","value":"zkMeId"}}]}}]}}]} as unknown as DocumentNode<CompleteProfileMutation, CompleteProfileMutationVariables>;
export const BlockUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BlockUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<BlockUserMutation, BlockUserMutationVariables>;
export const UnblockUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnblockUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unblockUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UnblockUserMutation, UnblockUserMutationVariables>;
export const FollowUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<FollowUserMutation, FollowUserMutationVariables>;
export const UnfollowUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnfollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfollowUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UnfollowUserMutation, UnfollowUserMutationVariables>;
export const GetFeedPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFeedPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sortPostsByDate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"hasLiked"}},{"kind":"Field","name":{"kind":"Name","value":"isQuote"}},{"kind":"Field","name":{"kind":"Name","value":"isRepost"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quotesEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repostsEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"hasLiked"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFeedPostsQuery, GetFeedPostsQueryVariables>;
export const GetPostByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPostById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentsLimit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentsSkip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repliesLimit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repliesSkip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPostById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"hasLiked"}},{"kind":"Field","name":{"kind":"Name","value":"isQuote"}},{"kind":"Field","name":{"kind":"Name","value":"isRepost"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quotesEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repostsEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"hasLiked"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentsSkip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repliesLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repliesSkip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const GetPostEngagementsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPostEngagementsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPostById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentsCount"}},{"kind":"Field","name":{"kind":"Name","value":"likesCount"}},{"kind":"Field","name":{"kind":"Name","value":"repostsCount"}}]}}]}}]} as unknown as DocumentNode<GetPostEngagementsByIdQuery, GetPostEngagementsByIdQueryVariables>;
export const GetTrendingPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrendingPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTrendingPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"hasLiked"}},{"kind":"Field","name":{"kind":"Name","value":"isQuote"}},{"kind":"Field","name":{"kind":"Name","value":"isRepost"}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quotesEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repostsEngagement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"hasLiked"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTrendingPostsQuery, GetTrendingPostsQueryVariables>;
export const GetAccountInformationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccountInformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"twitterHandle"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"continent"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"zkMeId"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"telegram"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"profileBanner"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"directReferrals"}},{"kind":"Field","name":{"kind":"Name","value":"layer2Referrals"}},{"kind":"Field","name":{"kind":"Name","value":"layer3Referrals"}},{"kind":"Field","name":{"kind":"Name","value":"layer4Referrals"}}]}}]}}]}}]} as unknown as DocumentNode<GetAccountInformationQuery, GetAccountInformationQueryVariables>;
export const GetSolverInformationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSolverInformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelfSolver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"portfolioLinks"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvailability"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}}]}}]} as unknown as DocumentNode<GetSolverInformationQuery, GetSolverInformationQueryVariables>;
export const GetSeekerInformationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSeekerInformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelfSeeker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<GetSeekerInformationQuery, GetSeekerInformationQueryVariables>;
export const GetNotificationSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNotificationSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNotificationSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobEmailNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directMessages"}},{"kind":"Field","name":{"kind":"Name","value":"jobProposals"}},{"kind":"Field","name":{"kind":"Name","value":"jobStatusUpdates"}},{"kind":"Field","name":{"kind":"Name","value":"levelUpPlatformLevel"}},{"kind":"Field","name":{"kind":"Name","value":"levelUpReferralNftTier"}},{"kind":"Field","name":{"kind":"Name","value":"newJobPostings"}},{"kind":"Field","name":{"kind":"Name","value":"newReviews"}},{"kind":"Field","name":{"kind":"Name","value":"xpGained"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialAppNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"directMessages"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"mentions"}},{"kind":"Field","name":{"kind":"Name","value":"messageRequests"}},{"kind":"Field","name":{"kind":"Name","value":"newFollowers"}},{"kind":"Field","name":{"kind":"Name","value":"reposts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialEmailNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"directMessages"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"mentions"}},{"kind":"Field","name":{"kind":"Name","value":"messageRequests"}},{"kind":"Field","name":{"kind":"Name","value":"newFollowers"}},{"kind":"Field","name":{"kind":"Name","value":"reposts"}}]}}]}}]}}]} as unknown as DocumentNode<GetNotificationSettingsQuery, GetNotificationSettingsQueryVariables>;
export const GetBlockedUsersWithCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlockedUsersWithCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBlockedUsersWithCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"blockedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlockedUsersWithCountQuery, GetBlockedUsersWithCountQueryVariables>;
export const GetReferralsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReferrals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchText"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getReferrals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchText"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchText"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directReferrals"}},{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"indirectReferrals"}},{"kind":"Field","name":{"kind":"Name","value":"layers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"second"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"third"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fourth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetReferralsQuery, GetReferralsQueryVariables>;
export const Get5LatestSignupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Get5LatestSignups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"get5LatestSignups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"referredBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<Get5LatestSignupsQuery, Get5LatestSignupsQueryVariables>;
export const GetTop100UsersByPointsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTop100UsersByPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTop100UsersByPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referredBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetTop100UsersByPointsQuery, GetTop100UsersByPointsQueryVariables>;
export const GetNumberOfUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNumberOfUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNumberOfUsers"}}]}}]} as unknown as DocumentNode<GetNumberOfUsersQuery, GetNumberOfUsersQueryVariables>;
export const GetPreSignUpDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPreSignUpData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTop100UsersByPoints"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"twitterHandle"}},{"kind":"Field","name":{"kind":"Name","value":"referredBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"get5LatestSignups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"twitterHandle"}},{"kind":"Field","name":{"kind":"Name","value":"referredBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getNumberOfUsers"}},{"kind":"Field","name":{"kind":"Name","value":"getSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}},{"kind":"Field","name":{"kind":"Name","value":"twitterHandle"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"directReferrals"}},{"kind":"Field","name":{"kind":"Name","value":"layer2Referrals"}},{"kind":"Field","name":{"kind":"Name","value":"layer3Referrals"}},{"kind":"Field","name":{"kind":"Name","value":"layer4Referrals"}}]}}]}}]}}]} as unknown as DocumentNode<GetPreSignUpDataQuery, GetPreSignUpDataQueryVariables>;
export const GetSelfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}},{"kind":"Field","name":{"kind":"Name","value":"twitterHandle"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"directReferrals"}},{"kind":"Field","name":{"kind":"Name","value":"layer2Referrals"}},{"kind":"Field","name":{"kind":"Name","value":"layer3Referrals"}},{"kind":"Field","name":{"kind":"Name","value":"layer4Referrals"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"seeker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}},{"kind":"Field","name":{"kind":"Name","value":"solver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvailability"}},{"kind":"Field","name":{"kind":"Name","value":"portfolioLinks"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"continent"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]}}]} as unknown as DocumentNode<GetSelfQuery, GetSelfQueryVariables>;
export const GetSelfUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSelfUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nftId"}}]}}]}}]} as unknown as DocumentNode<GetSelfUserQuery, GetSelfUserQueryVariables>;
export const GetSelfForLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSelfForLogin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<GetSelfForLoginQuery, GetSelfForLoginQueryVariables>;
export const GetSelfSeekerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSelfSeeker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelfSeeker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<GetSelfSeekerQuery, GetSelfSeekerQueryVariables>;
export const GetSelfSolverDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSelfSolver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelfSolver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"currentAvailability"}},{"kind":"Field","name":{"kind":"Name","value":"portfolioLinks"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}}]}}]}}]} as unknown as DocumentNode<GetSelfSolverQuery, GetSelfSolverQueryVariables>;
export const GetSelfProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSelfProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"follows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"continent"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nftId"}},{"kind":"Field","name":{"kind":"Name","value":"profileBanner"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}},{"kind":"Field","name":{"kind":"Name","value":"telegram"}},{"kind":"Field","name":{"kind":"Name","value":"twitterHandle"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"zkMeId"}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]}}]} as unknown as DocumentNode<GetSelfProfileQuery, GetSelfProfileQueryVariables>;
export const GetSelfCompletionCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSelfCompletionCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSelf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"nftId"}}]}}]}}]} as unknown as DocumentNode<GetSelfCompletionCheckQuery, GetSelfCompletionCheckQueryVariables>;