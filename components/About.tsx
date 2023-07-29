import React from 'react';
import Link from 'next/link';

import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
import { FaRegAddressCard } from 'react-icons/fa';

const About = (props: {}): JSX.Element => {
  return (
    <section
      className="section mt-24 text-darker dark:text-lightest"
      id="projects"
    >
      <div className="container mx-auto grid lg:grid-cols-[7fr,4fr] gap-4 xl:gap-6 px-2 sm:px-4 md:px-20 lg:px-[7.5rem] xl:px-40">
        <div className="p-6 sm:p-8 bg-lightest shadow-md shadow-light/10 dark:shadow-none dark:bg-dark rounded-4xl space-y-5">
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

          <div>
            <h5 className="text-xl pt-2">Tools & Technologies</h5>
            <ul className="flex flex-wrap mt-4 gap-[0.6rem]">
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">
                Javascript
              </li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">
                Typescript
              </li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">React</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">
                NextJS
              </li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">SASS</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">
                TailwindCSS
              </li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">SQL</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">Git</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">
                Python
              </li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">PHP</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">Java</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter text-sm">Linux</li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 xs:gap-4 !mt-10 md:!mt-16">
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

        <div className="grid grid-cols-3 lg:grid-cols-none lg:grid-rows-3 gap-2 lg:gap-4">
          <div className="p-4 sm:p-8 shadow-md shadow-light/10 dark:shadow-none bg-lightest dark:bg-dark rounded-4xl text-xl text-center">
            Passionate
          </div>
          <div className="p-4 sm:p-8 shadow-md shadow-light/10 dark:shadow-none bg-lightest dark:bg-dark rounded-4xl text-xl text-center">
            Lively
          </div>
          <div className="p-4 sm:p-8 shadow-md shadow-light/10 dark:shadow-none bg-lightest dark:bg-dark rounded-4xl text-xl text-center">
            Life
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
