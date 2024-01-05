import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
   return (
      <>
         <main>
            <Navbar />
            <Home />
            <Contact />
         </main>
      </>
   );
};

export default App;
