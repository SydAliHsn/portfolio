import React from 'react';
import Link from 'next/link';

const SecondaryButton = ({ className, children, href, newPage = true }: { className?: string, children: React.ReactNode, href: string, newPage?: boolean }): JSX.Element => {
    return <Link
        href={href}
        target={newPage ? '_blank' : '_self'}
        className={`flex items-center justify-center gap-2 border-2 border-light text-secondary-dark dark:text-secondary-light hover:text-primary-light dark:hover:text-secondary transtion-all rounded-4xl duration-300 py-2 sm:py-[0.6rem] px-6 sm:px-7 sm:text-lg font-medium hover:bg-[#a7f5ff42] dark:hover:bg-[#a7f5ff15] ${className}`}
    >
        {children}
    </Link>
};

export default SecondaryButton;