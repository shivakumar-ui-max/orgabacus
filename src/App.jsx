import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Prizes from "./components/Prizes";
import Glimps from "./components/Glimps";
import Contact from "./components/Contact";

const App = () => {
   return (
      <>
         <main>
            <Navbar />
            <Home />
            <Prizes />
            <Glimps />
            <Contact />
         </main>
      </>
   );
};

export default App;
