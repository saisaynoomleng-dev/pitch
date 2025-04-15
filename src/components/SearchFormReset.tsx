'use client';

import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import { Button } from './ui/button';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.form') as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <Button
      type="reset"
      onClick={reset}
      className="size-[50px] rounded-full bg-black flex justify-center items-center text-white"
    >
      <Link
        href="/"
        className="text-white size-[50px] rounded-full bg-black flex justify-center items-center"
      >
        <IoCloseOutline className="size-5" />
      </Link>
    </Button>
  );
};

export default SearchFormReset;
