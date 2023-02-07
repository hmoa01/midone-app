import React, { useState } from "react";

import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

const LoginPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          username: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          username: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to backend later
  };

  return (
    <div className="flex-grow-1 pl-14 pr-28 w-[550px]">
      <h2 className="pt-[300px] pb-8 font-medium text-gray-800 text-3xl">
        Sign In
      </h2>
      <form onSubmit={submitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="username"
            type="text"
            className="border rounded p-4 text-sm w-96"
            placeholder="Username"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid username!"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          type="email"
          element="input"
          className="border rounded p-4 text-sm w-96"
          placeholder="Email"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          errorText="Please enter a valid e-mail address!"
          onInput={inputHandler}
        />

        <Input
          id="password"
          type="password"
          element="input"
          className="border rounded p-4 text-sm w-96"
          placeholder="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password!"
          onInput={inputHandler}
        />

        <div className="flex justify-between text-sm font-medium text-gray-800 ">
          <div className="flex">
            <input type="checkbox" className="border-slate-100" />
            <p className="pl-2">Remember Me</p>
          </div>
          <p className="pr-4">Forgot Password?</p>
        </div>
        <div className="flex pt-8 gap-3 font-medium text-xs">
          <button
            className="border rounded-md p-3 w-[140px] bg-blue-800 text-white hover:bg-white hover:text-gray-600"
            type="submit"
          >
            {isLoginMode ? "Login" : "Sign up"}
          </button>

          <button
            className="border rounded-md p-4 w-32  text-gray-600 hover:bg-blue-800 hover:text-white "
            onClick={switchModeHandler}
          >
            {isLoginMode ? "Sign up" : "Login"}
          </button>
        </div>
      </form>
      <p className="pt-[115px] text-sm text-gray-600">
        By signin up, you agree to our
      </p>
      <p className="text-sm text-blue-800">
        Terms and Conditions & Privacy Policy
      </p>
    </div>
  );
};

export default LoginPage;
