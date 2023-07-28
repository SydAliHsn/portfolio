import React from 'react';
import Link from 'next/link';
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
import Form from './Form';

const Contact = (props: {}): JSX.Element => {
  return (
    <section id="contact">
      <div className="container mx-auto px-2 sm:px-4 md:px-20 lg:px-[7.5rem] xl:px-40 space-y-6  mt-20">
        <div className="p-6 sm:p-8 bg-dark rounded-4xl space-y-5">
          <h2 className="text-3xl sm:text-4xl text-lightest font-bold">Let&apos;s Connect</h2>

          <p className="text-xl lg:text-2xl text-lighter">
            I would love to hear from you and discuss any potential opportunities or collaborations.
          </p>

          <div className="pt-8 flex flex-wrap items-center gap-3">
            <Link
              href={'https://github.com/SydAliHsn'}
              className="text-3xl flex items-center justify-center gap-2 border-2 border-light text-secondary hover:text-secondary-dark transtion-all rounded-full duration-300 p-2 font-medium hover:bg-[#a7f5ff15]"
            >
              <BiLogoGithub />
            </Link>

            <Link
              href={'/resume'}
              className="text-3xl flex items-center justify-center gap-2 border-2 border-light text-secondary hover:text-secondary-dark transtion-all rounded-full duration-300 p-2 font-medium hover:bg-[#a7f5ff15]"
            >
              <BiLogoLinkedin />
            </Link>

            <Link
              href={'/resume'}
              className="text-3xl flex items-center justify-center gap-2 border-2 border-light text-secondary hover:text-secondary-dark transtion-all rounded-full duration-300 p-2 font-medium hover:bg-[#a7f5ff15]"
            >
              <BiLogoTwitter />
            </Link>

            <Link
              href={'mailto:ali@syyed.me'}
              className="text-lg flex items-center justify-center gap-2 border-2 border-light text-secondary hover:text-secondary-dark transtion-all rounded-full duration-300 p-2 sm:p-0 font-medium hover:bg-[#a7f5ff15]"
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
