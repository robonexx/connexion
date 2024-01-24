import React from 'react';
import ImageComponent from '@/components/image-component/ImageComponent';

interface LogoProps {
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ alt, className }) => {
  // Assuming your logo.png is in the public directory
  const src = '/logo.png';

  return (
      <ImageComponent
          src='/dclogo-vit.png'
          alt='danscenter logo'
      />
  );
};

export default Logo;