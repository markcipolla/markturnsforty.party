import React from 'react';

interface LinkProps {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, target, rel, className, children }) => {
  return (
    <a href={href} target={target} rel={rel} className='underline decoration-dotted text-blue-900 decoration-blue-900 hover:text-blue-600 hover:decoration-blue-600'>
      {children}
    </a>
  );
};