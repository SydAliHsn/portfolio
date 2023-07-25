'use client';

import React from 'react';
import Link from 'next/link';
import ReactTypingEffect from 'react-typing-effect';
import PrimaryButton from '@/components/PrimaryButton';

export default function Home() {
  return (
    <main className="mx-auto h-screen flex items-center">
      <div className="container flex flex-col items-start justify-center flex-grow mx-auto px-4 sm:px-4 md:px-20 lg:px-24 section">
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

        <PrimaryButton className="mt-7">
          <Link href="/">About Me</Link>
        </PrimaryButton>
      </div>
    </main>
  );
}
