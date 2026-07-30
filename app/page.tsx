"use client"

import { useState } from 'react';
import type { GitHubUserDataUI } from './features/github-user/model/github-user-ui';
import SearchBar from './components/search-bar/SearchBar';
import Profile from './components/profile/Profile';

export default function Home() {
  const [ userInfo, setUserInfo ] = useState<GitHubUserDataUI>({
    avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    bio: 'This profile has no bio.',
    blog: 'https://github.blog',
    company: '@github',
    followers: 23451,
    following: 9,
    htmlUrl: 'https://github.com/octocat',
    joinedAt: '14 Jan 2008',
    location: 'San Francisco',
    name: 'The Octocat',
    publicRepos: 8,
    twitterUsername: 'Not Available',
    username: 'octocat',
  });

  const { avatarUrl, bio, blog, company, followers, following, htmlUrl, joinedAt, location, name, publicRepos, twitterUsername, username } = userInfo;

  return (
    <div className="flex justify-center w-full min-h-screen pt-400 md:pt-500 bg-neutral-100">
      <div className="w-full max-w-3xl px-200 md:px-400">
        <SearchBar />
        <Profile avatarUrl={avatarUrl} bio={bio} blog={blog} company={company} followers={followers} following={following} htmlUrl={htmlUrl} joinedAt={joinedAt} location={location} name={name} publicRepos={publicRepos} twitterUsername={twitterUsername} username={username} />
      </div>
    </div>
  );
}
