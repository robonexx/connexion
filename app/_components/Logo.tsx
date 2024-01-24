import Image from 'next/image'

const Logo: React.FC = () => {

  return (
    <Image
    className='h-56 w-56 object-contain'
    src='/dclogo-vit.png'
    alt='danscenter logo'
    width={224}
    height={224}
  />
  );
};

export default Logo;