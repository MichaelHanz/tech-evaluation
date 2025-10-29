import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="flex justify-center my-6">
        <div className="flex items-center gap-2 relative w-full sm:w-80 ">
          <input
            type="text"
            className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Search by first letter"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none " />
        </div>
      </div>
      {}
    </>
  );
};

export default SearchBar;
