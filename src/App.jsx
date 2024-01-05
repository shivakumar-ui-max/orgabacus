import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Glimps from "./components/Glimps";

const App = () => {
   return (
      <>
         <main>
            <Navbar />
            <Home />
            <Glimps />
         </main>
      </>
   );
};

export default App;
