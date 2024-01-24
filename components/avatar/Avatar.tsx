import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageProps = {
  image: string | StaticImageData;
};

const Avatar = ({image}: ImageProps) => {
  return (
    <Image
            className="rounded-full"
            width={36}
            height={36}
            src={image}
            alt="User"
          />
  )
}

export default Avatar;
