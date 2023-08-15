'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap/gsap-core';
import ReactTypingEffect from 'react-typing-effect';


const Hero = (props: {}): JSX.Element => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // 4 seconds
            gsap.timeline().to(".greeting", {
                opacity: 1,
                duration: 0.5
            })
                .to(".init", {
                    opacity: 1,
                    duration: 0.5
                })
                .to(".syed", {
                    opacity: 1,
                    duration: 0.5
                })
                .to(".ali-hassan", {
                    opacity: 1,
                    duration: 0.2
                })
                .to(".roles", {
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3
                })
                .to(".intro", {
                    delay: 0.2,
                    opacity: 1,
                    duration: 0
                })
                .to(".about-button", {
                    scale: 1,
                    duration: 0,
                })
        }, container);


        return () => ctx.revert();
    }, []);

    return <section className="mx-auto min-h-screen flex items-center section bg-angled">
        <div ref={container} className="container flex flex-col items-start justify-center flex-grow mx-auto px-4 sm:px-4 md:px-20 lg:px-[7.5rem]">

            <h4 className="text-primary-light dark:text-secondary text-2xl font-medium">
                <span className="greeting inline-block opacity-0">Hello! 👋</span>
                {' '}
                <span className='init opacity-0 inline-block'>My name is</span>
            </h4>

            <h1 className="text-5xl md:text-7xl font-bold text-darker dark:text-lightest py-1 md:pr-8 !leading-[1.1]">
                <span className='inline-block syed opacity-0'>Syed </span> <span className="whitespace-nowrap inline-block ali-hassan opacity-0">Ali Hassan</span>
            </h1>

            <h2 className="roles opacity-0 text-3xl md:text-4xl text-dark dark:text-lighter font-semibold py-3 md:py-4">
                <ReactTypingEffect
                    typingDelay={200}
                    speed={30}
                    eraseSpeed={30}
                    eraseDelay={1500}
                    text={[`Fullstack Developer`, `Freelancer`, `Tech Enthusiast`, 'Student']}
                />
            </h2>

            <p className="intro opacity-0 text-xl text-dark dark:text-lighter font-normal py-1">
                I like building and breaking things on the Internet!
            </p>

            <button className="scale-0 about-button bg-primary-light dark:bg-secondary-light hover:rounded-4xl hover:bg-primary dark:hover:bg-secondary transition-all duration-300 text-secondary-light dark:text-primary text-xl font-medium px-6 py-3 mt-7 rounded-md group relative">
                <Link href="#about" >
                    <div className='flex items-center absolute'>
                        {'About Me'.split('').map((letter, i) => {
                            if (letter === ' ') return <span key={i} className="inline-block">&nbsp;</span>
                            return <span key={i} style={{ transitionDelay: `${i * 75}ms` }} className="origin-top transition-transform ease-in-out duration-300 group-hover:scale-y-0">{letter}</span>
                        })}
                    </div>
                    {/* Testing Vercel redeploy */}
                    <div className='flex items-center'>
                        {'About Me'.split('').map((letter, i) => {
                            if (letter === ' ') return <span key={i} className="inline-block">&nbsp;</span>
                            return <span key={i} style={{ transitionDelay: `${i * 75}ms` }} className="origin-bottom transition-transform ease-in-out duration-300 scale-y-0 group-hover:scale-y-100">{letter}</span>
                        })}
                    </div>
                </Link>
            </button>

        </div >
    </section >
};

export default Hero;