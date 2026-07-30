import ProfileImage from './profile-img/ProfileImage';
import ProfileHeader from './profile-header/ProfileHeader';
import ProfileInfo from './profile-info/ProfileInfo';
import type { GitHubUserDataUI } from '@/app/features/github-user/model/github-user-ui';

type ProfileProps = Pick<GitHubUserDataUI, 
  "avatarUrl" | "bio" | "blog" | "company" | "followers" | "following"| "htmlUrl" |
  "joinedAt" | "location" | "name" | "publicRepos" | "twitterUsername" | "username"
>;

function Profile({ avatarUrl, bio, blog, company, followers, following, htmlUrl, joinedAt, location, name, publicRepos, twitterUsername, username }: ProfileProps) {
  return (
    <article className='rounded-16'>
      <ProfileImage avatarUrl={avatarUrl} />
      <ProfileHeader htmlUrl={htmlUrl} name={name} username={username} joinedAt={joinedAt} />
      <ProfileInfo bio={bio} blog={blog} company={company} followers={followers}
        following={following} location={location} publicRepos={publicRepos} 
        twitterUsername={twitterUsername}
      />
    </article>
  );
}

export default Profile;

// import NoResults from '@/app/components/NoResults'; 

  // if (1 === 2) {
  //   return (
  //     <NoResults />
  //   );
  // }