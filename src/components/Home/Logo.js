import React from "react";
import { ReactComponent as LogoImage } from "../../assets/LoginPhoto.svg";

const Logo = () => {
  return (
    <div className="flex-grow 2 bg-black text-white h-screen">
      <div className="pt-8 pl-28">
        <p className="pl-16 pt-0.5 pb-56">Midone</p>
        <div className="w-1/2 pl-8">
          <LogoImage />
        </div>
        <p className="font-serif text-inherit text-[36px] font-bold w- pl-8 pt-10">
          A few more clicks to <br /> sign in to your account.
        </p>
        <p className="font-serif font-medium pl-8 pt-8">
          Manage all your e-commerce accounts in one place
        </p>
      </div>
    </div>
  );
};

export default Logo;
