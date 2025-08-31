// import { setSearchQuery } from '@/Redux/Features/globalSlice';
// import { ChangeEvent, useEffect } from 'react';
import { BiSearch } from "react-icons/bi";
// import { useDispatch } from 'react-redux';

function Search({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) {
  // const dispatch = useDispatch();

  // const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const query = e.target.value;
  //   dispatch(setSearchQuery(query));
  // };

  // useEffect(() => {
  //   dispatch(setSearchQuery(''));
  // }, [dispatch]);

  return (
    <div
      className={`card bg-grey-25 flex min-h-[46px] w-full items-center gap-2 px-3 ${className} `}
    >
      <BiSearch className="searchIcon" />
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        className="min-h-[46px] flex-1 bg-transparent focus:border-0 focus:outline-0"
        // onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default Search;
