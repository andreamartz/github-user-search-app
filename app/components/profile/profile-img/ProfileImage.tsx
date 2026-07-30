import Image from 'next/image';
import type { GitHubUserDataUI } from '@/app/features/github-user/model/github-user-ui';

type ProfileImageProps = Pick<GitHubUserDataUI, "avatarUrl">;

function ProfileImage({ avatarUrl }: ProfileImageProps) {
  return (
    <div className="relative aspect-square">
      <Image
        alt="the user's avatar"
        fill
        src={avatarUrl}
      />
    </div>
  );
}

export default ProfileImage;