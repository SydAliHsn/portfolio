'use client'

import React from 'react';

import ProjectCard from './ProjectCard';



const Projects = (props: {}): JSX.Element => {

  const skills = [
    'Javascript', 'Typescript', 'React', 'Tailwind CSS'
  ]

  return <section
    className="section pt-24 text-darker dark:text-lightest"
    id="projects"
  >
    <div className="container mx-auto px-2 sm:px-4 md:px-16 lg:px-[7.5rem] xl:px-36 2xl:max-w-7xl">

      <div className='text-center'>
        <h1 className='text-4xl md:text-5xl font-bold py-4'>Projects</h1>
        <p className='text-xl sm:text-2xl md:text-3xl font-normal'>Things I&apos;ve made trying to put my dent in the universe.</p>
      </div>

      <div className='mt-14 flex flex-col gap-20 sm:gap-24 lg:gap-28'>

        <ProjectCard
          technologies={skills}
          repoName='dev-jobs'
          badge='Freelance Project'
          title='Halcyon Theme'
          img='https://filipivanovic.netlify.app/projects/filipblog.webp'
          url='https://syyed.me'
          content='A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.'
        />
      </div>
    </div>
  </section >

};

export default Projects;
