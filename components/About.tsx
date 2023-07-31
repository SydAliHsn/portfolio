import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
import { FaRegAddressCard } from 'react-icons/fa';

import Productive from './svg/Productive';
import Creative from './svg/Creative';
import SelfTaught from './svg/SelfTaught';

const About = (props: {}): JSX.Element => {
  const skills = [
    'Javascript', 'Typescript', 'React', 'NextJS', 'NodeJS', 'Express', 'SASS', 'TailwindCSS', 'SQL', 'Git', 'Python', 'PHP', 'Linux', 'Java',
  ]

  return (
    <section
      className="section mt-24 text-darker dark:text-lightest"
      id="projects"
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-4 px-2 sm:px-4 md:px-16 lg:px-[7.5rem] xl:px-36 2xl:max-w-7xl">

        <div className="p-6 md:p-6 lg:p-8 bg-lightest shadow-md shadow-light/10 dark:shadow-none dark:bg-dark rounded-4xl flex flex-col gap-5 md:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-extrabold">About</h2>

          <h4 className="text-xl md:text-2xl">
            I&apos;m Ali, a passionate and creative individual who thrives on self-learning and exploring new ideas.
          </h4>

          <p className="text-dark dark:text-lighter md:text-lg">
            My passion for self-learning, creativity, and exploration drives me to constantly seek out new experiences
            and push the boundaries of my own potential. I am excited to embark on new adventures, collaborate with
            like-minded individuals, and contribute my unique perspectives and talents to the world around me.
          </p>

          <p className="text-dark dark:text-lighter text-lg">
            I&apos;m constantly seeking ways to expand my knowledge and push the boundaries of my understanding. I find
            immense joy in the process of acquiring new skills and discovering innovative concepts.
          </p>



          <div className='mt-2 xl:mt-8'>
            <h5 className="text-xl">Tools & Technologies</h5>
            <ul className="flex flex-wrap mt-4 gap-[0.6rem]">

              {skills.map(skill => (<li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">
                {skill}
              </li>))}

            </ul>
          </div>

          <div className="flex flex-wrap justify-center xs:justify-start gap-2 xs:gap-4 mt-8 lg:mt-14">
            <Link
              href={'/'}
              className="flex items-center justify-center gap-2 text-lightest bg-primary-light hover:bg-primary transition-all rounded-4xl py-2 sm:py-[0.6rem] px-6 sm:px-7 duration-300 sm:text-lg flex-grow xs:flex-grow-0"
            >
              Contact
              <HiOutlineChatBubbleOvalLeft className="font-medium text-2xl" />
            </Link>

            <Link
              href={'/resume'}
              className="flex items-center justify-center gap-2 border-2 border-light text-secondary-dark dark:text-secondary-light hover:text-primary-light dark:hover:text-secondary transtion-all rounded-4xl duration-300 py-2 sm:py-[0.6rem] px-6 sm:px-7 sm:text-lg font-medium hover:bg-[#a7f5ff42] dark:hover:bg-[#a7f5ff15] flex-grow xs:flex-grow-0"
            >
              <FaRegAddressCard />
              Resume
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-none md:grid-rows-3 gap-2 md:gap-4 md:max-h-[58.5rem] xl:max-h-[51rem] md:w-1/3">
          <div className="h-40 md:h-full p-2 md:p-4 shadow-md shadow-light/10 dark:shadow-none bg-lightest dark:bg-dark rounded-4xl flex flex-col gap-2">
            <p className="xs:text-lg md:text-2xl font-medium text-center">Productive</p>

            <Productive />

          </div>



          <div className="h-40 md:h-full p-2 md:p-4 shadow-md shadow-light/10 dark:shadow-none bg-lightest dark:bg-dark rounded-4xl flex flex-col gap-2">
            <p className="xs:text-lg md:text-2xl font-medium text-center">Creative</p>
            <Creative />
          </div>

          <div className="h-40 md:h-full p-2 md:p-4 shadow-md shadow-light/10 dark:shadow-none bg-lightest dark:bg-dark rounded-4xl flex flex-col gap-2">
            <p className="xs:text-lg md:text-2xl text-center">Self-Learner</p>

            <SelfTaught />

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
