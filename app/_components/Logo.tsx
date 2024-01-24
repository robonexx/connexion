import Image from 'next/image'
import { StaticImageData } from 'next/image'

type LogoProps    = {
    image: string | StaticImageData
  }
const Logo: React.FC<LogoProps> = () => {

  return (
    <Image
    className='h-48 w-48'
    src='/dclogo-vit.png'
    alt='danscenter logo'
    width={256}
    height={256}
  />
  );
};

export default Logo;