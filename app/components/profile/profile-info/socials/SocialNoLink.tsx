import Image from 'next/image';

type SocialNoLinkProps = {
  linkType: 'blog' | 'company' | 'location' | 'twitter';
  linkText: string;
};

function SocialNoLink({ linkType, linkText }: SocialNoLinkProps) {
  return (
    <li className="flex">
      <Image 
        src={`/assets/icon-${linkType}.svg`}
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
      />
      <span>{linkText}</span>
    </li>
  );
}

export default SocialNoLink;