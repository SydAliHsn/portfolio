import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Space_Mono } from 'next/font/google';

import Provider from './provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SideLinks from '@/components/SideLinks';
import ThemeSwitch from '@/components/ThemeSwitch';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });

const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://syyed.me'),
  title: 'Syed Ali Hassan | Fullstack Developer',
  description: 'My Portfolio site built with Next.js and TailwindCSS',
  keywords: ['Web Developer', 'Fullstack Developer', 'Freelance Developer', 'Cyber Security'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${spaceMono.variable}`}>
        <Provider>
          <ThemeSwitch />

          <SideLinks />

          <Navbar />

          {children}

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
