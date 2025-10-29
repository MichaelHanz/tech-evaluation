import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import { useState, useEffect } from "react";
import { getMealByFirstLetter } from "./api/api";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const data = await getMealByFirstLetter("a");
        console.log(data);
        setMeals(data.meals || []);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch meals.");
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const searching = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await getMealByFirstLetter(searchTerm);
      setMeals(data.meals || []);
    } catch (error) {
      setError("Failed to fetch meals.", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <>
      <Header />
      <form
        onSubmit={searching}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 mt-10 p-6 border border-emerald-400 rounded-2xl shadow-lg bg-linear-to-r from-white via-emerald-50 to-white hover:shadow-emerald-200 transition max-w-xl mx-auto"
      >
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button
          type="submit"
          className="bg-emerald-600 text-white w-full sm:w-auto px-5 py-2 rounded-lg hover:bg-emerald-700 transition font-medium"
        >
          Search
        </button>
      </form>
      <h1 className="text-4xl font-bold text-black text-center ">Meal Lists</h1>
      {loading && <p>Loading meals...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-wrap">
        {meals.map((meal) => {
          return (
            <div
              className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 gap-4 m-4 mx-auto"
              key={meal.idMeal}
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  {meal.strMeal}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
