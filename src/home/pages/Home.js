import React from "react";

import Logo from "../components/Logo";
import LoginPage from "../components/LoginPage";

const Home = () => {
  return (
    <div className="flex">
      <Logo />
      <LoginPage />
    </div>
  );
};

export default Home;
