import Image from 'next/image';
import { useTheme } from '@/app/components/theme-provider/ThemeContext';

function Theme() {
  const { theme, toggleTheme } = useTheme();

  const icon = theme === 'light' ? 'moon' : 'sun';
  const iconPath = `/assets/icon-${icon}.svg`;

  return (
    <button className={`cursor-pointer flex items-center gap-150 ${theme === 'light' ? 'text-neutral-500' : 'text-neutral-200'}`}
      onClick={toggleTheme}
      type="button"
    >
      <span className={`text-preset-8`}>
        {theme === 'light' ? 'DARK' : 'LIGHT'}
      </span>
      <span className="relative aspect-square w-250 h-250 md:w-300 md:h-300">
        <Image src={iconPath}
          alt=""
          fill
          className="flex-none"
        />
      </span>
    </button>
  );
}

export default Theme;