interface SearchProds {
  setSearch: (movie: string) => void;
  search: string;
}

const Search: React.FC<SearchProds> = (
  {setSearch, search}
) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
