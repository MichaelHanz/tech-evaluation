import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline text-black text-center ">
        Meal Lists
      </h1>
      <SearchBar />
    </>
  );
}

export default App;
