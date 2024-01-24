'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  count: number;
  page?: number;
}

const Pagination = ({ count }: PaginationProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get('page') || '1';

  const params = new URLSearchParams(searchParams);
  const ITEMS_LIMIT = 5;

  const hasPrev = ITEMS_LIMIT * (parseInt(page) - 1) > 0;
  const hasNext = ITEMS_LIMIT * (parseInt(page) - 1) + ITEMS_LIMIT < count;

    
    // this took awhile to get right
  const handleChangePage = (type: string) => {
    const currentPage = parseInt(page);

    if (!isNaN(currentPage)) {
      const newPage = type === 'prev' ? currentPage - 1 : currentPage + 1;
      params.set('page', newPage.toString());
      replace(`${pathname}?${params}`);
    }
  };

  return (
    <div className='relative flex p-2 justify-between'>
      <button
        className='py-1 px-3 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:hover:border-red-400 border-transparent bg-white rounded-md hover:border-gray-100 border-2'
        disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <button
        className='py-1 px-3 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:hover:border-red-400 border-transparent bg-white rounded-md hover:border-gray-100 border-2'
        disabled={!hasNext}
        onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
