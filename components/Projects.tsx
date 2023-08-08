'use client'

import React from 'react';

import ProjectCard from './ProjectCard';
import bejeweled from '../public/projects/bejeweled.jpg';


const Projects = (props: {}): JSX.Element => {

  return <section
    className="section pt-24 mb-10 text-darker dark:text-lightest"
    id="projects"
  >
    <div className="container mx-auto px-2 sm:px-4 md:px-16 lg:px-[7.5rem] xl:px-36 2xl:max-w-7xl">

      <div className='text-center'>
        <h1 className='text-4xl md:text-5xl font-bold py-4'>Projects</h1>
        <p className='text-xl sm:text-2xl md:text-3xl font-normal'>Things I&apos;ve made trying to put my dent in the universe.</p>
      </div>

      <div className='mt-14 flex flex-col gap-20 sm:gap-24 lg:gap-28'>

        <ProjectCard
          technologies={['Next.JS', 'Vanilla CSS', 'Typescript', 'Storyblock CMS']}
          repoName='jewels'
          badge='Freelance Project'
          title='Bejeweled Store'
          img={bejeweled}
          url='https://bejeweledbybt.com'
          content='A minimal and user-friendly online store for a small jewelry business using Next JS. The website elegantly showcases their unique handcrafted pieces, offering customers a seamless shopping experience that balances style and functionality'
        />
      </div>
    </div>
  </section >

};

export default Projects;
