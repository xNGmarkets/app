import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { useDebouncedCallback } from "use-debounce";

function Search({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

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
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
