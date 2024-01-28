import Link from 'next/link';

const unauthorized = async () => {
  return (
    <section className='flex flex-col gap-12 items-center'>
      <h1 className='text-5xl'>Access Denied</h1>
      <p className='text-3xl max-w-2xl text-center'>
        This is a clear sign that you shouldn&apos;t be here... sorry buddy!
      </p>
      <Link href='/' className='text-3xl underline'>
        Please return there is nothing to see here... 🕵
      </Link>
    </section>
  );
};

export default unauthorized;
