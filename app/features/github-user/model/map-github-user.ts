import type { GitHubApiGetAUserResponse } from "./github-user-api";
import type { GitHubUserDataUI } from "./github-user-ui";

export const NOT_AVAILABLE = "Not Available";

function formatJoinedAt(dateTime: string) {
  const joinedDate = new Date(dateTime);

  if (isNaN(joinedDate.getTime())) {
    return "Not Available";
  }

  return Intl.DateTimeFormat("en-GB", {  // en-GB because day comes before month
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(joinedDate);
}

export function mapGitHubUserDataToUI(
  user: GitHubApiGetAUserResponse
): GitHubUserDataUI {
  return {
    username: user.login,
    avatarUrl: user.avatar_url,
    htmlUrl: user.html_url,
    reposUrl: user.repos_url,
    name: user.name || `${user.login}`,
    company: user.company || NOT_AVAILABLE,
    blog: user.blog || NOT_AVAILABLE,
    location: user.location || NOT_AVAILABLE,
    bio: user.bio || "This profile has no bio",
    twitterUsername: user.twitter_username || NOT_AVAILABLE,
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    joinedAt: formatJoinedAt(user.created_at),
  }
}