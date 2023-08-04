import React from 'react';
import Link from 'next/link';

const PrimaryButton = ({ className, children, href, newPage = true }: { className?: string, children: React.ReactNode, href: string, newPage?: boolean }): JSX.Element => {
    return <Link
        href={href}
        target={newPage && !href.startsWith('#') ? '_blank' : '_self'}
        className={`flex items-center justify-center gap-2 text-lightest bg-primary-light hover:bg-primary transition-all rounded-4xl py-2 sm:py-[0.6rem] px-6 sm:px-7 duration-300 sm:text-lg ${className}`}
    >
        {children}
    </Link>
};

export default PrimaryButton;