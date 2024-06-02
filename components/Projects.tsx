'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BiLogoGithub } from 'react-icons/bi';


import ProjectCard from './ProjectCard';
import bejeweled from '../public/projects/bejeweled.jpg';
import devjobs from '../public/projects/devjobs.png';
import archStudio from '../public/projects/arch-studio.jpg';
import Link from 'next/link';


const Projects = (props: {}): JSX.Element => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.from(".fadeUp", {
        scale: 0.9,
        opacity: 0,
        y: 40,
        duration: 0.4,
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
        },
        stagger: 0.2,
      })
    }, container);

    return () => ctx.revert()
  }, [])

  return <section
    className="section pt-24 mb-10 text-darker dark:text-lightest"
    id="projects"
  >
    <div ref={container} className="container mx-auto px-2 sm:px-4 md:px-16 lg:px-[7.5rem] xl:px-36 2xl:max-w-7xl">

      <div className='text-center'>
        <h1 className='fadeUp text-4xl md:text-5xl font-bold pb-4'>Projects</h1>
        <p className='fadeUp text-xl sm:text-2xl md:text-3xl'>Things I&apos;ve made trying to put my dent in the universe.</p>
      </div>

      <div className='mt-10 sm:mt-16 md:mt-20 flex flex-col gap-16 sm:gap-24 md:gap-28'>

        <ProjectCard
          technologies={['Next.JS', 'Vanilla CSS', 'Typescript', 'Storyblock CMS']}
          repoName='jewels'
          badge='Freelance Project'
          title='Bejeweled Store'
          img={bejeweled}
          url='https://bejeweledbybt.com'
          content='A minimal and user-friendly online store for a small jewelry business using Next JS. The website elegantly showcases their unique handcrafted pieces, offering customers a seamless shopping experience that balances style and functionality'
        />

        <ProjectCard
          technologies={['React.JS', 'Redux', 'SASS', 'Node.JS', 'Express', 'MongoDB']}
          repoName='dev-jobs'
          reverse
          badge='Practice Project'
          title='Devjobs Job Board'
          img={devjobs}
          url='https://devjobs.syyed.me'
          content='A simple job listing board made with React and styled with SASS/SCSS. The website fetches data from an Express backend using MongoDB and displays it in a clean and minimalistic UI.'
        />

        <ProjectCard
          technologies={['Javascript', 'SASS/SCSS', 'HTML',]}
          repoName='Arch-Studio'
          badge='Practice Project'
          title='Real Estate Website'
          img={archStudio}
          url='https://ali-arch-studio.netlify.app'
          content='A simple portfolio website for an imaginary Real Estate Firm. It&apos;s Fully responsive and has a minimalist clean UI.'
        />


        <p className='-mt-4 text-center text-lg md:text-xl'>See all of my work on <Link className='font-medium text-primary-light dark:text-secondary-dark' target='_blank' href={'https://Github.com/SydAliHsn'}>My Github <BiLogoGithub className='inline-block text-2xl' /></Link></p>

      </div>
    </div>
  </section >

};

export default Projects;
