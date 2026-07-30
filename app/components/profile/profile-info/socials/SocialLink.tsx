import Image from 'next/image';

type SocialLinkProps = {
  linkType: 'blog' | 'twitter';
  linkText: string;
};

function getHRef(linkType: SocialLinkProps["linkType"], 
  linkText: SocialLinkProps["linkText"]
): string {
  return linkType === "twitter" ? `https://x.com/${linkText}` : linkText;
}

function SocialLink({ linkType, linkText }: SocialLinkProps) {
  return (
    <li>
      <a 
        href={getHRef(linkType, linkText)}
        target="_blank" 
        className="flex"
        rel="noopener noreferrer"
      >
        <Image 
          src={`/assets/icon-${linkType}.svg`}
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
        />
        <span>{linkText}</span>
      </a>
    </li>
  );
}

export default SocialLink;