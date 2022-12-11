import * as React from "react";
import Footer from './Components/Footer/Footer'
import NavBar from './Components/navbar/NavBar';
import HomePage from "./pages/homepage/Homepage"
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
