'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';

import Form from './Form';

const Contact = (props: {}): JSX.Element => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(".fadeIn", {
        scale: 0.8,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        ease: "power1.easeIn",
        duration: 0.6,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
        },
        stagger: {
          amount: 1,
        },
      })
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className='pt-24' ref={container}>
      <div className="container mx-auto px-2 sm:px-4 md:px-16 lg:px-[7.5rem] xl:px-36 2xl:max-w-7xl space-y-6">
        <div className="fadeIn p-6 sm:p-8 bg-lightest dark:bg-dark rounded-4xl space-y-5 shadow-md shadow-light/10 dark:shadow-black/10">
          <h2 className="text-3xl sm:text-4xl text-darker dark:text-lightest font-bold">Let&apos;s Connect</h2>

          <p className="text-xl lg:text-2xl text-dark dark:text-lighter">
            I would love to hear from you and discuss any potential opportunities or collaborations.
          </p>

          <div className="pt-8 flex flex-wrap items-center gap-3">
            <Link
              href={'https://github.com/SydAliHsn'}
              className="text-3xl flex items-center justify-center gap-2 border-2 border-light text-secondary-dark dark:text-secondary-light hover:text-primary-light dark:hover:text-secondary transtion-all rounded-full duration-300 p-2 font-medium hover:bg-[#a7f5ff42] dark:hover:bg-[#a7f5ff15]"
            >
              <BiLogoGithub />
            </Link>

            <Link
              href={'/resume'}
              className="text-3xl flex items-center justify-center gap-2 border-2 border-light text-secondary-dark dark:text-secondary-light hover:text-primary-light dark:hover:text-secondary transtion-all rounded-full duration-300 p-2 font-medium hover:bg-[#a7f5ff42] dark:hover:bg-[#a7f5ff15]"
            >
              <BiLogoLinkedin />
            </Link>

            <Link
              href={'/resume'}
              className="text-3xl flex items-center justify-center gap-2 border-2 border-light text-secondary-dark dark:text-secondary-light hover:text-primary-light dark:hover:text-secondary transtion-all rounded-full duration-300 p-2 font-medium hover:bg-[#a7f5ff42] dark:hover:bg-[#a7f5ff15]"
            >
              <BiLogoTwitter />
            </Link>

            <Link
              href={'mailto:ali@syyed.me'}
              className="text-lg flex items-center justify-center gap-2 border-2 border-light text-secondary-dark dark:text-secondary-light hover:text-primary-light dark:hover:text-secondary transtion-all rounded-full duration-300 p-2 sm:p-0 font-medium hover:bg-[#a7f5ff42] dark:hover:bg-[#a7f5ff15]"
            >
              <HiMail className="sm:hidden text-3xl" />

              <span className="hidden sm:block  py-2 px-5">ali@syyed.me</span>
            </Link>
          </div>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
