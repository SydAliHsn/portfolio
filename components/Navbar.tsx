'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }): JSX.Element => {
  return (
    <Link
      href={href}
      className="text-dark dark:text-lightest relative uppercase px-2 text-base block hover:text-lightest dark:hover:text-primary before:bg-primary-light dark:before:bg-lightest font-medium dark:font-normal before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full hover:before:h-full  before:-z-[1] z-10 transition-colors before:transition-all duration-300 before:duration-300"
    >
      {children}
    </Link>
  );
};

const Navbar = (props: {}): JSX.Element => {
  const [navBgActive, setNavBgActive] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setNavBgActive(window.scrollY > 15);

    const handleScroll = () => {
      setNavBgActive(window.scrollY > 15);

      if (mobileNavOpen) setMobileNavOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileNavOpen]);

  // frost glass effect bg nav
  // bg-opacity-[0.88] backdrop-filter backdrop-saturate-120 backdrop-blur-md

  const navBgCommonClasses = 'z-[5] absolute top-0 h-full shadow-lg shadow-light/10 dark:shadow-none bg-lightest dark:bg-darkest transition-width duration-300'



  return (
    <header className="fixed top-0 left-0 bg-transparent w-full z-10">
      <div
        className={`left-0 ${navBgCommonClasses} ${mobileNavOpen ? 'w-full' : 'w-0'}`}
      ></div>

      <div
        className={`right-0 ${navBgCommonClasses} ${navBgActive ? 'w-full' : 'w-0'}`}
      ></div>

      <nav className="container mx-auto flex items-center justify-between w-full py-5 px-3 lg:px-6 text-lg">
        <Link
          href={'/'}
          className={'text-dark dark:text-lightest uppercase text-4xl z-10 font-semibold dark:font-medium'}
        >
          {'{Ali}'}
        </Link>

        <button
          className="md:hidden hamburger-menu-icon z-10 flex flex-col space-y-[0.55rem] justify-center items-center 
          mr-2"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <div
            className={`w-9 h-[0.2rem] bg-dark dark:bg-lightest transition-all duration-300 ${mobileNavOpen && 'rotate-45 translate-y-3'
              }`}
          ></div>
          <div
            className={`w-9 h-[0.2rem] bg-dark dark:bg-lightest mb-[0.55rem] transition-all duration-300 ${mobileNavOpen && 'opacity-0'
              }`}
          ></div>
          <div
            className={`w-9 h-[0.2rem] bg-dark dark:bg-lightest transition-all duration-300 ${mobileNavOpen && '-rotate-45 -translate-y-3'
              }`}
          ></div>
        </button>

        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink href="#about">About</NavLink>
          </li>

          <li>
            <NavLink href="#projects">Projects</NavLink>
          </li>

          <li>
            <NavLink href="#testimonials">Testimonials</NavLink>
          </li>

          <li>
            <NavLink href="#contact">Contact</NavLink>
          </li>
        </ul>

        <ul
          className={`z-10 bg-lightest dark:bg-darkest md:hidden absolute top-[4.7rem] h-[100vh] w-[100vw] transition-all duration-300 p-5 space-y-7 ${mobileNavOpen ? 'left-0' : 'left-full'
            }`}
        >
          {['about', 'projects', 'contact', 'testimonials'].map(el => (
            <li>
              <Link
                href={`#${el}`}
                className="text-dark dark:text-lightest block"
                onClick={() => setMobileNavOpen(false)}
              >
                {el[0].toUpperCase() + el.slice(1)}
              </Link>
            </li>
          ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
