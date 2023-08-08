'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Sun from './svg/Sun';
import Moon from './svg/Moon';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="fixed z-30 bottom-5 right-5 md:bottom-8 md:right-8">
      <button
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className={`rounded-full p-1 sm:p-3 shadow-md shadow-dark/20 dark:shadow-light/10 dark:shadow-black/10 hover:scale-105 transition-transform ${resolvedTheme === 'dark' ? 'bg-lightest' : 'bg-darkest'}`}
      >
        {resolvedTheme === 'dark' ? (
          <Sun
            height={40}
            width={40}
          />
        ) : (
          <Moon
            height={40}
            width={40}
          />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
