'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { LiaSearchSolid } from 'react-icons/lia';
import { useDebouncedCallback } from 'use-debounce';

// so trying out this way of doing the search using the next navigation methods

interface SearchProps {
    placeholder: string;
  page?: string | number
}

const SearchDashboard = ({ placeholder }: SearchProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');

    if (e.target.value) {
      e.target.value.length > 2 && params.set('q', e.target.value);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className='w-fit h-[32px] rounded-md flex items-center px-2 border-[1px] border-[#888]'>
      <LiaSearchSolid className='text-[#888] w-5 h-5' />
      <input
        className='flex gap-2 border-none outline-none w-full focus:outline-none bg-gray-800 placeholder-gray-500 border px-2'
        type='text'
        id='searchDashboard'
        name='searchDashboard'
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchDashboard;
