import React from 'react';
import Link from 'next/link';
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';

const SideLinks = (props: {}): JSX.Element => {
  return (
    <aside className="fixed bottom-0 z-30 w-full hidden md:block">
      <div className="container relative mx-auto">
        <div className="absolute bottom-0 left-3 lg:left-8 flex flex-col items-center space-y-4">
          <Link
            href={'https://github.com/SydAliHsn'}
            className="text-[1.2rem] border-[3px] border-gray-600 dark:border-light hover:border-darkest dark:hover:border-secondary-light rounded-full p-[4px] text-gray-600 dark:text-light hover:text-darkest dark:hover:text-secondary-light transition-all duration-300 ease-in-out 
            hover:-translate-y-1"
          >
            <BiLogoGithub />
          </Link>

          <Link
            href={'https://linkedin.com/SydAliHsn'}
            className="text-[1.2rem] border-[3px] border-gray-600 dark:border-light hover:border-darkest dark:hover:border-secondary-light rounded-full p-[4px] text-gray-600 dark:text-light hover:text-darkest dark:hover:text-secondary-light transition-all duration-300 ease-in-out 
            hover:-translate-y-1"
          >
            <BiLogoLinkedin />
          </Link>

          <Link
            href={'https://twitter.com/SydAliHsn'}
            className="text-[1.2rem] border-[3px] border-gray-600 dark:border-light hover:border-darkest dark:hover:border-secondary-light rounded-full p-[4px] text-gray-600 dark:text-light hover:text-darkest dark:hover:text-secondary-light transition-all duration-300 ease-in-out 
            hover:-translate-y-1"
          >
            <BiLogoTwitter />
          </Link>

          <div className="w-[2px] h-28 bg-light"></div>
        </div>
      </div>
    </aside>
  );
};

export default SideLinks;
