import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SideLinks from '@/components/SideLinks';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Syed Ali Hassan | Fullstack Developer',
  description: 'My Portfolio site built with Next.js and TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-darkest ${poppins.className}`}>
        <SideLinks />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
