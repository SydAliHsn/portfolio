'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';

const SideLinks = (props: {}): JSX.Element => {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {


      gsap.timeline().to(".bar", {
        opacity: 1,
        duration: 0.5,
        transform: 'translateY(0)',
        delay: 4
      }).to(".social-link", {
        opacity: 1,
        duration: 0.3,
        stagger: -0.15,
        ease: 'power2.out'
      })
    }, container);


    return () => ctx.revert()
  }, [])

  return (
    <aside className="fixed bottom-0 z-5 w-full hidden md:block">
      <div ref={container} className="container relative mx-auto">

        <div className="opacity-0 translate-y-20 bar absolute bottom-0 left-3 lg:left-8 flex flex-col items-center space-y-4">

          {[
            { icon: <BiLogoGithub />, link: 'https://github.com/SydAliHsn' },
            { icon: <BiLogoLinkedin />, link: 'https://linkedin.com/in/SydAliHsn' },
            { icon: <BiLogoTwitter />, link: 'https://twitter.com/SydAliHsn' },
            { icon: <BiLogoInstagram />, link: 'https://instagram.com/SydAliHsn' },

          ].map(({ icon, link }, i) => (<Link
            key={i}
            target='_blank'
            href={link}
            className="social-link opacity-0 text-[1.2rem] border-[3px] border-gray-600 dark:border-light hover:border-darkest dark:hover:border-secondary-light rounded-full p-[4px] text-gray-600 dark:text-light hover:text-darkest dark:hover:text-secondary-light transition-all duration-300 ease-in-out 
            hover:-translate-y-1"
          >
            {icon}
          </Link>))}

          <div className="w-[2px] h-28 bg-gray-500 dark:bg-light"></div>
        </div>
      </div>
    </aside>
  );
};

export default SideLinks;
