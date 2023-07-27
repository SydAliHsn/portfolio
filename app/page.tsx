'use client';

import React from 'react';
import Link from 'next/link';
import ReactTypingEffect from 'react-typing-effect';

import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <main className="mx-auto h-screen flex items-center bg-primary section">
        <div className="container flex flex-col items-start justify-center flex-grow mx-auto px-4 sm:px-4 md:px-20 lg:px-[7.5rem]">
          <span className="text-secondary text-2xl font-medium">Hello! 👋 My name is</span>
          <h1 className="text-5xl md:text-7xl font-bold text-lightest py-1 md:pr-8 !leading-[1.1]">
            Syed <span className="whitespace-nowrap">Ali Hassan</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-lighter font-semibold py-3 md:py-4">
            <ReactTypingEffect
              typingDelay={200}
              speed={30}
              eraseSpeed={30}
              eraseDelay={1500}
              text={[`Fullstack Developer`, `Bug Bounty Hunter`, `Tech Enthusiast`, 'Student']}
            />
          </h2>
          <p className="text-xl text-lighter font-normal py-1">I like building and breaking things on the Internet!</p>
          <button className="bg-secondary-dark hover:rounded-4xl transition-all duration-300 text-primary text-xl font-medium px-6 py-3 mt-7">
            <Link href="/">About Me</Link>
          </button>
        </div>
      </main>

      <Projects />

      <About />
    </>
  );
}
