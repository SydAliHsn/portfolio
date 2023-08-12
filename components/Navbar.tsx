'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';

const sections = ['about', 'projects', 'testimonials', 'contact',];

const Navbar = (props: {}): JSX.Element => {
  const [navBgActive, setNavBgActive] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const container = useRef(null);

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

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().to(".nav", {
        opacity: 1,
        transform: 'translateY(0)',
        delay: 3.2,
        duration: 0.3,
      })
        .to(".nav-link", {
          opacity: 1,
          duration: 0.3,
          zIndex: 10,
          transform: 'translateY(0)',
          stagger: 0.1
        })
    }, container);


    return () => ctx.revert()
  }, [])

  const navBgCommonClasses = 'absolute top-0 h-full shadow-md shadow-light/30 dark:shadow-black/20 bg-lightest dark:bg-darkest transition-width duration-300'

  return (
    <header ref={container} className="z-20 fixed top-0 left-0 bg-transparent w-full">
      <div
        className={`left-0 ${navBgCommonClasses} ${mobileNavOpen ? 'w-full' : 'w-0'}`}
      ></div>

      <div
        className={`right-0 ${navBgCommonClasses} ${navBgActive ? 'w-full' : 'w-0'}`}
      ></div>

      <nav className={`nav ${!navBgActive && 'opacity-0 -translate-y-full'} container mx-auto flex items-center justify-between w-full py-5 px-3 lg:px-6 text-lg`}>
        <Link
          href={'/'}
          className={'text-dark dark:text-lightest uppercase text-3xl sm:text-4xl z-10 font-semibold dark:font-medium'}
        >
          {'{Ali}'}
        </Link>

        <button
          className={`md:hidden hamb z-10 ${mobileNavOpen && 'active'}`}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label='Open Menu'
        >
          <svg className="ham" viewBox="0 0 100 100"><path className="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path className="line middle" d="m 30,50 h 40"></path><path className="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
          </svg>
        </button>

        <ul className="hidden md:flex space-x-6">
          {sections.map((el, i) => (
            <li key={i}>
              <NavLink className={`nav-link ${!navBgActive && 'opacity-0 -translate-y-12'}`} href={`#${el}`}>
                {el[0].toUpperCase() + el.slice(1)}
              </NavLink>
            </li>))}
        </ul>

        <ul
          className={`z-10 bg-lightest dark:bg-darkest md:hidden absolute top-[4.7rem] h-[100vh] w-[100vw] transition-all duration-300 p-5 space-y-7 ${mobileNavOpen ? 'left-0' : 'left-full'
            }`}
        >
          {sections.map((el, i) => (
            <li key={i}>
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

          <li className='flex pt-5 border-t-2 border-dotted border-secondary-dark dark:border-primary-light gap-4'>
            {[

              { icon: <BiLogoGithub />, link: 'https://github.com/SydAliHsn' },
              { icon: <BiLogoLinkedin />, link: 'https://linkedin.com/in/SydAliHsn' },
              { icon: <BiLogoTwitter />, link: 'https://twitter.com/SydAliHsn' },
              { icon: <BiLogoInstagram />, link: 'https://instagram.com/SydAliHsn' },

            ].map(({ icon, link }, i) => (<Link
              key={i}
              href={link}
              className="text-[1.2rem] border-[3px] border-gray-600 dark:border-light hover:border-darkest dark:hover:border-secondary-light rounded-full p-[4px] text-gray-600 dark:text-light hover:text-darkest dark:hover:text-secondary-light transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              {icon}
            </Link>))}
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;

const NavLink = ({ children, href, className }: { children: React.ReactNode; href: string, className?: string }): JSX.Element => {
  return (
    <Link
      href={href}
      className={`text-dark dark:text-lightest relative uppercase px-2 text-base block hover:text-lightest dark:hover:text-primary before:bg-primary-light dark:before:bg-lightest font-medium dark:font-normal before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full hover:before:h-full  before:-z-[1] z-10 transition-colors before:transition-all duration-300 before:duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};