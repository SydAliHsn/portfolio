import React from 'react';
import Link from 'next/link';

import IoChatbubbleOutline from 'react-icons/io';

const About = (props: {}): JSX.Element => {
  return (
    <section
      className="section mt-24 text-lightest"
      id="projects"
    >
      <div className="container mx-auto grid gap-20 px-4 sm:px-4 md:px-20 lg:px-[7.5rem]">
        <div className="p-8 bg-dark rounded-[3rem] md:w-2/3 space-y-5">
          <h2 className="text-4xl font-extrabold">About</h2>

          <h4 className="text-2xl">
            I&apos;m Ali, a passionate and creative individual who thrives on self-learning and exploring new ideas.
          </h4>

          <p className="text-lighter text-lg">
            My passion for self-learning, creativity, and exploration drives me to constantly seek out new experiences
            and push the boundaries of my own potential. I am excited to embark on new adventures, collaborate with
            like-minded individuals, and contribute my unique perspectives and talents to the world around me.
          </p>

          <p className="text-lighter text-lg">
            I'm constantly seeking ways to expand my knowledge and push the boundaries of my understanding. I find
            immense joy in the process of acquiring new skills and discovering innovative concepts.
          </p>

          <div>
            <h5 className="text-xl pt-2">Tools & Technologies</h5>
            <ul className="flex flex-wrap mt-4 gap-[0.6rem]">
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">Javascript</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">Typescript</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">React</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">NextJS</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">Tailwind CSS</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">SASS / SCSS</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">SQL</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">Git</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">Python</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">Java</li>
              <li className="border-2 px-2 py-1 rounded-2xl border-light text-sm">Linux</li>
            </ul>
          </div>

          <div className="flex !mt-[4.5rem] gap-4">
            <Link
              href={'/'}
              className="bg-primary rounded-full py-[0.6rem] px-7 text-lg"
            >
              Contact
            </Link>

            <Link
              href={'/'}
              className="border-2 border-primary text-lighter rounded-full py-[0.6rem] px-7 text-lg"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
