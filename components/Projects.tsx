import React from 'react';

const Projects = (props: {}): JSX.Element => {

  const skills = [
    'Javascript', 'Typescript', 'React',
  ]

  return <section
    className="section pt-24 text-darker dark:text-lightest"
    id="projects"
  >
    <div className="container mx-auto px-2 sm:px-4 md:px-16 lg:px-[7.5rem] xl:px-36 2xl:max-w-7xl">

      <div className='text-center'>
        <h1 className='text-5xl font-bold py-4'>Projects</h1>
        <p className='text-3xl font-normal'>Things I&apos;ve made trying to put my dent in the universe.</p>
      </div>

      <div className='mt-10 relative text-right'>
        <img className='w-[65%]' src="https://filipivanovic.netlify.app/projects/filipblog.webp" alt="img" />
        <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[30rem]'>
          <h3 className='text-xl'>Some App</h3>
          <p className='bg-dark rounded-3xl p-3'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
          </p>

          <ul className="flex flex-wrap mt-4 gap-[0.6rem] justify-end">

            {skills.map(skill => (<li key={skill} className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">
              {skill}
            </li>))}

          </ul>
        </div>
      </div>

    </div></section>

};

export default Projects;
