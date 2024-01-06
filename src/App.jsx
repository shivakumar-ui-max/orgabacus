import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Prizes from "./components/Prizes";

const App = () => {
   return (
      <>
         <main>
            <Navbar />
            <Home />
            <Prizes />
            <Contact />
         </main>
      </>
   );
};

export default App;
