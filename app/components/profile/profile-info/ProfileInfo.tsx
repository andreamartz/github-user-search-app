import type { GitHubUserDataUI } from '@/app/features/github-user/model/github-user-ui';
import Stats from './stats/Stats';
import Socials from './socials/Socials';

type ProfileInfoProps = Pick<GitHubUserDataUI, 
  "bio" | "blog" | "company" | "followers" | "following" | "location" | "publicRepos" | "twitterUsername"
>;

function ProfileInfo({ bio, blog, company, followers, following, location, publicRepos, twitterUsername }: ProfileInfoProps) {
  return (
    <div>
      <p>{bio || 'This profile has no bio.'}</p>
      <Stats followers={followers} following={following} publicRepos={publicRepos} />
      <Socials blog={blog} company={company} location={location} twitterUsername={twitterUsername} />
    </div>
  );
}

export default ProfileInfo;