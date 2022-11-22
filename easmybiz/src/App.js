import * as React from "react";
import Search from "./Components/Search/Search";
import NavBar from "./Components/navbar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Search />
        <NavBar />
      </div>
      <div>
        <HomePage />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
