'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }): JSX.Element => {
  return (
    <Link
      href={href}
      className="text-lightest relative uppercase px-2 text-base block hover:text-primary before:bg-lightest before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full hover:before:h-full  before:-z-[1] z-10 transition-all before:transition-all duration-300 before:duration-300"
    >
      {children}
    </Link>
  );
};

const Navbar = (props: {}): JSX.Element => {
  const [navBgActive, setNavBgActive] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setNavBgActive(true);
      } else {
        setNavBgActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 bg-transparent w-full z-10">
      <div
        className={`z-[5] absolute top-0 left-0 h-full bg-dark transition-width duration-[450ms] ${
          mobileNavOpen ? 'w-full' : 'w-0'
        }`}
      ></div>

      <div
        className={`z-[5] absolute top-0 right-0 h-full bg-dark transition-width duration-[450ms] ${
          navBgActive ? 'w-full' : 'w-0'
        }`}
      ></div>

      <nav className="container mx-auto flex items-center justify-between w-full py-2 md:py-5 px-2 md:px-6 text-lg">
        <Link
          href={'/'}
          className={'text-lightest uppercase text-4xl z-10 p-1 md:p-0 font-medium'}
        >
          {'{Ali}'}
        </Link>

        <button
          className="md:hidden hamburger-menu-icon z-10 flex flex-col space-y-[0.55rem] justify-center items-center p-4"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <div
            className={`w-9 h-[0.2rem] bg-lightest transition-all duration-300 ${
              mobileNavOpen && 'rotate-45 translate-y-3'
            }`}
          ></div>
          <div
            className={`w-9 h-[0.2rem] bg-lightest mb-[0.55rem] transition-all duration-300 ${
              mobileNavOpen && 'opacity-0'
            }`}
          ></div>
          <div
            className={`w-9 h-[0.2rem] bg-lightest transition-all duration-300 ${
              mobileNavOpen && '-rotate-45 -translate-y-3'
            }`}
          ></div>
        </button>

        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink href="#about">About</NavLink>
          </li>

          <li>
            <NavLink href="#about">Skills</NavLink>
          </li>

          <li>
            <NavLink href="#about">Projects</NavLink>
          </li>

          <li>
            <NavLink href="#about">Contact</NavLink>
          </li>
        </ul>

        <div
          className={`bg-dark md:hidden absolute top-[4.7rem] h-[100vh] w-[100vw] transition-all duration-[450ms] p-5 space-y-7 ${
            mobileNavOpen ? 'left-0' : 'left-full'
          }`}
        >
          <Link
            href={'/about'}
            className="text-lightest block"
          >
            About
          </Link>
          <Link
            href={'/about'}
            className="text-lightest block"
          >
            Projects
          </Link>
          <Link
            href={'/about'}
            className="text-lightest block"
          >
            Contact
          </Link>

          <Link
            href={'/about'}
            className="text-lightest block"
          >
            Testimonials
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
