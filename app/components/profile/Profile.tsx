import ProfileInfo from './profile-info/ProfileInfo';
import type { GitHubUserDataUI } from '@/app/features/github-user/model/github-user-ui';

type ProfileProps = Pick<GitHubUserDataUI, 
  "avatarUrl" | "bio" | "blog" | "company" | "followers" | "following"| "htmlUrl" |
  "joinedAt" | "location" | "name" | "publicRepos" | "twitterUsername" | "username"
>;

function Profile({ bio, blog, company, followers, following, location, publicRepos, twitterUsername }: ProfileProps) {
  return (
    <article className='rounded-16'>
      <ProfileInfo bio={bio} blog={blog} company={company} followers={followers}
        following={following} location={location} publicRepos={publicRepos} 
        twitterUsername={twitterUsername}
      />
    </article>
  );
}

export default Profile;