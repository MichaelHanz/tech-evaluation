import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <>
      <div className="search-section flex items-center gap-2 justify-center my-4">
        <span className="px-3">
          <FaSearch />
        </span>
        <input
          type="text"
          className=" bg-indigo-50 border-2 px-5"
          placeholder="Yo mama"
        />
      </div>
      {}
    </>
  );
};

export default SearchBar;
