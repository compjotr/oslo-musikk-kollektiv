import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, className = '' }) => {
  return (
    <Link 
      href={href}
      className={`
        inline-block px-6 py-2 
        bg-blue-600 hover:bg-blue-700
        font-semibold rounded-full
        transform hover:-translate-y-0.5
        transition-all duration-300
        text-center
        shadow-md hover:shadow-lg
        text-white
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default Button; 