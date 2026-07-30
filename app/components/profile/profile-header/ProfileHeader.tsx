import type { GitHubUserDataUI } from '@/app/features/github-user/model/github-user-ui';
import UserDetails from './user-details/UserDetails';

type ProfileHeaderProps = Pick<GitHubUserDataUI, 
  "htmlUrl" | "name" | "username" | "joinedAt"
>;

function ProfileHeader({ htmlUrl, name, username, joinedAt }: ProfileHeaderProps) {
  return (
    <div>
      <UserDetails htmlUrl={htmlUrl} name={name} username={username} />
      <p>joinedAt {joinedAt}</p>
    </div>
  );
}

export default ProfileHeader;