import React from 'react';
import Image from 'next/image';

interface LogoProps {
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ alt, className }) => {
  // Assuming your logo.png is in the public directory
  const src = '/logo.png';

  return (
    <img
      src={src}
      alt={alt}
      className={`w-16 h-16 object-contain ${className}`}
    />
  );
};

export default Logo;