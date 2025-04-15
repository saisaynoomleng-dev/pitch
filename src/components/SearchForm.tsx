import Form from 'next/form';
import SearchFormReset from './SearchFormReset';
import { Button } from './ui/button';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5 form"
    >
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none"
        placeholder="start ups...."
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <Button className="size-[50px] rounded-full bg-black flex justify-center items-center text-white">
          <FaMagnifyingGlass className="size-5" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
