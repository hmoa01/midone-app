import React from "react";

import Logo from "./Logo";
import LoginPage from "./LoginPage";

const Home = () => {
  return (
    <div className="flex">
      <Logo />
      <LoginPage />
    </div>
  );
};

export default Home;
