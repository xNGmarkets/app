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
    <div className={`search flex w-full items-center ${className} `}>
      <BiSearch className="searchIcon" />
      <input
        type="text"
        placeholder={placeholder}
        className="form-controls !bg-[transparent]"
        // onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default Search;
