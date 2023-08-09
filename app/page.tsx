import React from 'react';


import Main from '@/components/Main';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Main />

      <Projects />

      <About />

      <Testimonials />

      <Contact />
    </>
  );
}
