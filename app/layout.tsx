import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Provider from './provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SideLinks from '@/components/SideLinks';
import ThemeSwitch from '@/components/ThemeSwitch';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Syed Ali Hassan | Fullstack Developer',
  description: 'My Portfolio site built with Next.js and TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
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
