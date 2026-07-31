"use client"

import { ReactNode, useState, useEffect, useMemo } from 'react';
import { ThemeContext } from '@/app/components/theme-provider/ThemeContext';

const THEME_STORAGE_KEY = 'github-user-search-theme';

function initializeTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  return mediaQueryList.matches ? 'dark' : 'light';
}

function ThemeProvider({ children }: {children: ReactNode}) {
  const [theme, setTheme] = useState<'light' | 'dark'>(initializeTheme);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }

  const value = useMemo(
    () => ({ theme, toggleTheme }),
    [theme]
  );

  return (
    <ThemeContext value={value}>
      <div data-theme={`${theme}`} className="min-h-screen">
        { children }
      </div>
    </ThemeContext>
  );
}

export default ThemeProvider;