import "./header.css";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-linear-to-b from-black to-black/90 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
            Mealify
          </h1>

          <div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-full shadow-md transition">
              Login / Signup
            </button>
          </div>
        </div>

        <div className="h-0.5 bg-linear-to-r from-emerald-400 via-transparent to-emerald-400 opacity-40"></div>
      </header>
    </>
  );
};

export default Header;
