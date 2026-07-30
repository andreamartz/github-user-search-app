import { GitHubUserDataUI } from '@/app/features/github-user/model/github-user-ui';
import { NOT_AVAILABLE } from '@/app/features/github-user/model/map-github-user';
import SocialLink from './SocialLink';
import SocialNoLink from './SocialNoLink';

type SocialLinksProps = Pick<GitHubUserDataUI,
  "blog" | "company" | "location" | "twitterUsername"
>;

function Socials({ blog, company, location, twitterUsername }: SocialLinksProps) {
  return (
    <ul>
      <SocialNoLink linkType="location" linkText={location} />
      {twitterUsername === NOT_AVAILABLE
        ? <SocialNoLink linkType="twitter" linkText={twitterUsername}/>
        : <SocialLink linkType="twitter" linkText={twitterUsername}/>
      }
      {blog === NOT_AVAILABLE
        ? <SocialNoLink linkType="blog" linkText={blog} />
        : <SocialLink linkType="blog" linkText={blog} />
      }
      <SocialNoLink linkType="company" linkText={`${company}`}/>
    </ul>
  );
}

export default Socials;