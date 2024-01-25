// Image wrapper for base64 image
import React from 'react';
import Image from 'next/image';

type ImageContainerProps = {
  imageData: string;
};

const ImageContainer: React.FC<ImageContainerProps> = ({ imageData }) => {
    console.log(imageData)
  const imageUrl = `data:image/*;base64,${imageData}`;

  return (
    <div>
      <div className='w-full h-64 relative'>
              {imageData && (
                  <Image
                      src={imageUrl}
                      alt='Post Image'
                      fill
                      className='object-cover rounded-md object-center'
                  />
              )}
          {/* : (<Image
            src={'/dclogo-vit.png'}
            alt='Post Image'
            fill
            className='object-cover rounded-md object-center'
              />
              )}  */}
            
        
      </div>
    </div>
  );
};

export default ImageContainer;
