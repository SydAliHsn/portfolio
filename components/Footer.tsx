import React from 'react';
import Link from 'next/link';
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';

const Footer = (props: {}): JSX.Element => {
  return (
    <footer className="text-light flex flex-col gap-4 items-center mt-16 pb-3">
      <div className="flex justify-center gap-4 md:hidden text-3xl">
        <Link
          href={'https://linkedin.com/in/SydAliHsn'}
          className="hover:text-lightest"
        >
          <BiLogoLinkedin />
        </Link>

        <Link
          href={'https://github.com/SydAliHsn'}
          className="hover:text-lightest"
        >
          <BiLogoGithub />
        </Link>

        <Link
          href={'https://twitter.com/SydAliHsn'}
          className="hover:text-lightest"
        >
          <BiLogoTwitter />
        </Link>

        <Link
          href={'https://instagram.com/SydAliHsn'}
          className="hover:text-lightest"
        >
          <BiLogoInstagram />
        </Link>
      </div>

      <h3 className="text-lg font-medium">&copy; Syyed Ali Hassan</h3>
    </footer>
  );
};

export default Footer;
