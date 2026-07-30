import { HttpUrl } from './github-user-api';

export type GitHubUserDataUI = {
  username: string;
  avatarUrl: HttpUrl;
  htmlUrl: HttpUrl;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitterUsername: string;
  publicRepos: number;
  followers: number;
  following: number;
  joinedAt: string;
};
