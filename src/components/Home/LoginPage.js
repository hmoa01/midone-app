import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === "" || "hmoa01@gmail.com" || password === "" || "Ahmed") {
      setError(true);
      console.log(error);
    } else {
      return (
        <div className="login-success">
          <h1>You are logged!</h1>
        </div>
      );
    }
  };

  return (
    <div className="flex-grow-1 pl-14 pr-28 w-[550px]" onSubmit={submitHandler}>
      <h2 className="pt-[300px] pb-8 font-medium text-gray-800 text-3xl">
        Sign In
      </h2>
      <form>
        <div className="flex flex-col pb-4">
          <input
            className="border rounded p-4 text-sm"
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col pb-4">
          <input
            className="border rounded p-4 text-sm "
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-800 ">
          <div className="flex">
            <input type="checkbox" className="border-slate-100" />
            <p className="pl-2">Remember Me</p>
          </div>
          <p className="pr-4">Forgot Password?</p>
        </div>
        <div className="flex pt-8 gap-3 font-medium text-xs">
          <button
            className="border rounded-md p-3 w-[140px] bg-blue-800 text-white"
            type="submit"
          >
            Login
          </button>

          <button className="border rounded-md p-4 w-32  text-gray-600 ">
            Sign Up
          </button>
        </div>
        <p className="pt-[115px] text-sm text-gray-600">
          By signin up, you agree to our
        </p>
        <p className="text-sm text-blue-800">
          Terms and Conditions & Privacy Policy
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
