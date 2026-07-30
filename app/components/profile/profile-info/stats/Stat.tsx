import { GitHubUserDataUI } from "@/app/features/github-user/model/github-user-ui";

type StatKey = keyof Pick<
  GitHubUserDataUI,
  "publicRepos" | "followers" | "following"
>;

type StatProps = {
  statType: StatKey;
  statData: number;
}

function Stat({ statType, statData }: StatProps) {
  const statTypeCap = statType === "publicRepos"
    ? "Repos"
    : `${statType.charAt(0).toUpperCase()}${statType.slice(1)}`;

  return (
    <div>
      <dt>{statTypeCap}</dt>
      <dd>{statData}</dd>
    </div>
  );
}

export default Stat;