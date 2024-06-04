'use client'

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
import { FaRegAddressCard } from 'react-icons/fa';

import Productive from './svg/Productive';
import Creative from './svg/Creative';
import SelfTaught from './svg/SelfTaught';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import CircularText from './CircularText';

const skills = [
  'Javascript', 'Typescript', 'React', 'NextJS', 'NodeJS', 'Express', 'SASS', 'TailwindCSS', 'SQL', 'Git', 'Python', 'PHP', 'Linux', 'Java',
]

const Me = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.from(".watty", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 100vh",
          end: '+=700',
          scrub: true,
          pin: container.current,
          toggleActions: 'play reverse play reverse',
        },
        rotate: 360,
        ease: 'none',
      })

      gsap.from(".latty", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 100vh",
          end: '+=700',
          scrub: true,
          // pin: container.current,
          toggleActions: 'play reverse play reverse',
        },
        rotate: -160,
        ease: 'none',
      })

    }, container);

    return () => ctx.revert()
  }, [])

  return <div className='overflow-hidden max-sm:-mt-20 max-sm:-mb-4 max-xs:-mt-28 max-xs:-mb-16'>
    <div ref={container}
      className='flex flex-col justify-center relative h-[30rem] max-sm:scale-90 max-xs:scale-75'>

      <div className='watty w-[18.5rem] h-[18.5rem] bg-angled rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 box-content border-[2rem] border-primary-light dark:border-secondary overflow-hidden'>
        <Image src="/me-port.png" alt="ME!" width={463} height={539} />
      </div>

      <div className='latty absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <CircularText
          spacing={1.03}
          fontSize='1.9rem'
          text='Syed Ali Hassan • Syed Ali Hassan • Syed Ali Hassan • '
          textClassNames='dark:text-primary-light text-secondary'
        />
      </div>

    </div>
  </div>
}

const About = (props: {}): JSX.Element => {
  const personalityContainer = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const q = gsap.utils.selector(personalityContainer);

    let ctx = gsap.context(() => {
      q('.fadeIn').forEach((el: HTMLElement, i) => {
        gsap.from(el, {
          scale: 0.7,
          opacity: 0,
          duration: 0.4,
          delay: i * 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
          },
        })
      })

    }, personalityContainer);

    return () => ctx.revert()
  }, [])


  const cardCommonClasses = 'h-40 md:h-full p-2 md:p-4 shadow-md shadow-light/10 dark:shadow-black/10 bg-lightest dark:bg-dark rounded-4xl flex flex-col gap-2 fadeIn'

  return (
    <section
      className="section pt-24 text-darker dark:text-lightest"
      id="about"
    >

      <Me />

      <div className="container mx-auto flex flex-col md:flex-row gap-4 px-2 sm:px-4 md:px-16 lg:px-[7.5rem] xl:px-36 2xl:max-w-7xl md:max-h-[63rem] lg:max-h-[60rem] xl:max-h-[51rem]">

        <div className="p-4 xs:p-5 md:p-6 lg:p-8 bg-lightest shadow-md shadow-light/10 dark:shadow-black/10 dark:bg-dark rounded-4xl flex flex-col gap-5 md:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-extrabold pt-2 sm:p-0">About</h2>

          <h4 className="text-xl md:text-2xl">
            I&apos;m Ali, a passionate and creative individual who thrives on turning ideas into reality through his technical skills and knowledge.
          </h4>

          <p className="text-dark dark:text-lighter md:text-lg">
            My passion for self-learning, creation, and exploration drives me to constantly seek out new experiences
            and push the boundaries of my own potential. I am excited to embark on new adventures, collaborate with
            like-minded individuals and businesses, and contribute my unique perspectives and talents to the world around me.
          </p>

          <p className="text-dark dark:text-lighter md:text-lg">
            I&apos;m constantly seeking ways to expand my knowledge and push the boundaries of my understanding. I find
            immense joy in the process of acquiring new skills and help others do the same through my work.
          </p>

          <div className='mt-2 xl:mt-8'>
            <h5 className="text-xl">Tools & Technologies</h5>
            <ul className="flex flex-wrap mt-4 gap-[0.6rem]">

              {skills.map(skill => (<li key={skill} className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">
                {skill}
              </li>))}

            </ul>
          </div>

          <div className="flex flex-wrap justify-self-end justify-center xs:justify-start gap-2 xs:gap-4 mt-8">
            <PrimaryButton href='#contact' className='flex-grow xs:flex-grow-0'>
              Contact
              <HiOutlineChatBubbleOvalLeft className="font-medium text-2xl" />
            </PrimaryButton>

            <SecondaryButton href='/syed-ali-resume.pdf' newPage className='flex-grow xs:flex-grow-0'>
              <FaRegAddressCard /> Resume
            </SecondaryButton>
          </div>
        </div>

        <div ref={personalityContainer} className="grid grid-cols-3 md:grid-cols-none md:grid-rows-3 gap-2 md:gap-4 md:w-1/3">
          <div className={cardCommonClasses}>
            <p className="text-sm xs:text-base sm:text-lg md:text-2xl font-medium text-center">Productive</p>
            <Productive />
          </div>

          <div className={cardCommonClasses}>
            <p className="text-sm xs:text-base sm:text-lg md:text-2xl font-medium text-center">Creative</p>
            <Creative className='h-full' />
          </div>

          <div className={cardCommonClasses}>
            <p className="text-sm xs:text-base sm:text-lg md:text-2xl font-medium text-center">Self-Learner</p>
            <SelfTaught />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
