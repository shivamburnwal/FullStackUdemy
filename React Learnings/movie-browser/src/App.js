import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutView from "./Components/AboutView";
import SearchView from "./Components/SearchView";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={AboutView} />
        <Route
          path="/search"
          element={
            <SearchView searchText={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
