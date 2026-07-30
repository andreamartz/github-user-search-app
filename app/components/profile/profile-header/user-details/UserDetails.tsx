import type { GitHubUserDataUI } from '@/app/features/github-user/model/github-user-ui';

type UserDetailsProps = Pick<GitHubUserDataUI, 
  "htmlUrl" | "name" | "username"
>;

function UserDetails({ htmlUrl, name, username }: UserDetailsProps) {
  return (
    <header>
      <h2>{name}</h2>
      <a 
        href={`${htmlUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`@${username}`}
      </a>
    </header>
  );
}

export default UserDetails;