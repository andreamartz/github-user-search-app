import { GitHubUserDataUI } from '@/app/features/github-user/model/github-user-ui';
import Stat from './Stat';

type StatsProps = Pick<
  GitHubUserDataUI,
  "followers" | "following" | "publicRepos"
>

function Stats({ followers, following, publicRepos }: StatsProps) {
  return (
    <dl>
      <Stat statType='publicRepos' statData={publicRepos} />
      <Stat statType='followers' statData={followers} />
      <Stat statType='following' statData={following} />
    </dl>
  );
}

export default Stats;