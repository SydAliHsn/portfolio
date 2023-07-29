'use client';

import React from 'react';
import Link from 'next/link';
import ReactTypingEffect from 'react-typing-effect';

import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <main className="mx-auto h-screen flex items-centersection bg-angled">
        <div className="container flex flex-col items-start justify-center flex-grow mx-auto px-4 sm:px-4 md:px-20 lg:px-[7.5rem]">
          <span className="text-primary-light dark:text-secondary text-2xl font-medium">Hello! 👋 My name is</span>
          <h1 className="text-5xl md:text-7xl font-bold text-darker dark:text-lightest py-1 md:pr-8 !leading-[1.1]">
            Syed <span className="whitespace-nowrap">Ali Hassan</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-dark dark:text-lighter font-semibold py-3 md:py-4">
            <ReactTypingEffect
              typingDelay={200}
              speed={30}
              eraseSpeed={30}
              eraseDelay={1500}
              text={[`Fullstack Developer`, `Bug Bounty Hunter`, `Tech Enthusiast`, 'Student']}
            />
          </h2>
          <p className="text-xl text-dark dark:text-lighter font-normal py-1">
            I like building and breaking things on the Internet!
          </p>
          <button className="bg-primary-light dark:bg-secondary-light hover:rounded-4xl hover:bg-primary dark:hover:bg-secondary transition-all duration-300 text-secondary-light text-xl font-medium px-6 py-3 mt-7">
            <Link href="/">About Me</Link>
          </button>
        </div>
      </main>

      <Projects />

      <About />

      <Contact />
    </>
  );
}
