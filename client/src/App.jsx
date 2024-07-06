import React from "react";
import backgroundImage from "./assets/introduction.png";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import AddReview from "./components/AddReview";
import Success from "./components/Success";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div
        className="absolute inset-0 bg-cover bg-center h-[100vh] md:w-[25%] md:mx-auto  md:rounded-lg md:shadow-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* < LandingPage /> */}
         {/* < Home /> */}
        < AddReview />
        {/* < Success /> */}
        {/* < Reviews /> */} 
      </div>
  );
}

export default App;
