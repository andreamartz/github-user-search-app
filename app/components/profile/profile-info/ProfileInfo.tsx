import type { GitHubUserDataUI } from '@/app/features/github-user/model/github-user-ui';
import Stats from './stats/Stats';

type ProfileInfoProps = Pick<GitHubUserDataUI, 
  "bio" | "blog" | "company" | "followers" | "following" | "location" | "publicRepos" | "twitterUsername"
>;

function ProfileInfo({ bio, blog, company, followers, following, location, publicRepos, twitterUsername }: ProfileInfoProps) {
  return (
    <div>
      <p>{bio || 'This profile has no bio.'}</p>
      <Stats followers={followers} following={following} publicRepos={publicRepos} />
    </div>
  );
}

export default ProfileInfo;