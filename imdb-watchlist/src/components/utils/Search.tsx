import { useEffect, useRef } from "react";
import useKey from "../../hook/useKey";

interface SearchProds {
  setSearch: (movie: string) => void;
  search: string;
}

const Search: React.FC<SearchProds> = ({ setSearch, search }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  useKey({
    key: "Enter",
    callback: function () {
      if (document.activeElement === searchRef.current) return;
      setSearch("");
      searchRef.current?.focus();
    },
  });

  return (
    <input
      ref={searchRef}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
