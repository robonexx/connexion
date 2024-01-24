import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageProps = {
  image: string | StaticImageData;
  width: number;
  height: number;
};

const Avatar = ({image, width, height }: ImageProps) => {
  return (
    <Image
            className="rounded-full"
            width={width}
            height={height}
            src={image}
            alt="User"
          />
  )
}

export default Avatar;
