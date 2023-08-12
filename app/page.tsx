import React from 'react';


import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Projects />

      <Testimonials />

      <Contact />
    </>
  );
}
