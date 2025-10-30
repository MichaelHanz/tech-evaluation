import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import { useState, useEffect } from "react";
import {
  getMealByFirstLetter,
  getMealByCategory,
  getMealBySelectedCategory,
} from "./api/api";
import backgroundImage from "./assets/nordwood-themes-Tmz8FThN_BE-unsplash.jpg";
function App() {
  //useState hooks

  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  //useEffect for fetching meals by the first letter,default letter is 'a'

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const data = await getMealByFirstLetter("p");
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

  //useEffect for fetching meal categories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getMealByCategory();
        console.log(data);
        setCategories(data.categories || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  //function for searching meals by the first letter

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

  //filter meals by selected category

  const handleCategoryChange = async (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (!category) return;
    setLoading(true);

    try {
      const data = await getMealBySelectedCategory(category);
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Failed to fetch meals by category:", error);
    } finally {
      setLoading(false);
    }
  };

  //for  displaying loading and error states

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header />

        <div className="pt-28 flex flex-col items-center">
          <div className="bg-white/90 backdrop-blur-sm border border-emerald-400 rounded-2xl shadow-lg p-8 max-w-2xl w-11/12 mx-auto text-center">
            <h2 className="text-3xl font-semibold text-emerald-700 mb-6">
              Find Your Meal 🍽️
            </h2>

            <form
              onSubmit={searching}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white w-full sm:w-auto px-5 py-2 rounded-lg hover:bg-emerald-700 transition font-medium"
              >
                Search
              </button>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <label htmlFor="category" className="text-gray-700 font-medium">
                Choose Category:
              </label>
              <select
                id="category"
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option
                    key={category.idCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-black text-center mt-16">
          Meal Lists
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm m-4"
                key={meal.idMeal}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="rounded-t-lg"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                    {meal.strMeal}
                  </h5>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-10">
              <p className="text-gray-500 text-lg font-medium">
                🍴 No meals found. Try another search or category.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default App;
