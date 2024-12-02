import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'spotify';
}

const Button: React.FC<ButtonProps> = ({ 
  href, 
  children, 
  className = '',
  variant = 'default'
}) => {
  const baseStyles = `
    inline-block px-6 py-2 
    font-semibold rounded-full
    transform hover:-translate-y-0.5
    transition-all duration-300
    text-center
    shadow-md hover:shadow-lg
    text-white
  `;

  const variantStyles = {
    default: 'bg-blue-600 hover:bg-blue-700',
    spotify: 'bg-[#1DB954] hover:bg-[#1ed760]'
  };

  return (
    <Link 
      href={href}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Link>
  );
};

export default Button; 