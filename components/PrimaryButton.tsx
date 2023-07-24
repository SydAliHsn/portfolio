import React from 'react';

const PrimaryButton = ({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element => {
  return <button className={`bg-secondary text-primary text-xl font-bold px-6 py-3 ${className}`}>{children}</button>;
};

export default PrimaryButton;
