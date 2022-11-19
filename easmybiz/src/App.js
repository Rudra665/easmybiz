import * as React from "react";
import Search from "./Components/Search/Search";
import NavBar from "./Components/navbar/NavBar";
import HomePage from "./pAGES/HomePage/HomePage";

function App() {
  return (
    <>
      <div>
        <Search />
        <NavBar />
      </div>
      <HomePage />
    </>
  );
}

export default App;
