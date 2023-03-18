import * as React from "react";
import Footer from './Components/Footer/Footer'
import NavBar from './Components/navbar/NavBar';
import HomePage from "./pAGES/HomePage/HomePage"
import "./App.css"
function App() {
  return (
    <>
    <NavBar/>
      <div >
       <HomePage/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
