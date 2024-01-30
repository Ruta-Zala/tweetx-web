import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImg from "../../../images/bg.png";

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    const userId = new Date().getTime();

    const [firstName, lastName] = name.split(" ");

    const newUser = {
      userId,
      name: {
        firstName,
        lastName,
      },
      email,
      password,
      followers: [],
      following: [],
    };

    onSignUp(newUser);
  };

  return (
    <div className="pl-20 pt-20 relative h-screen overflow-y-auto">
      <h1 className="flex items-center text-5xl font-extrabold dark:text-white text-pink-400 ">
        TweetX
      </h1>
      <Link to="/login">
        <button
          type="button"
          className=" mt-20 flex justify-left ml-10 py-4 px-20 text-base font-medium  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-black-500 hover:text-pink-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Login
        </button>
      </Link>
      <div className="flex justify-left ml-10 mt-10">
        <div className="max-w-lg w-full bg-white p-8 border border-gray-300 shadow-md rounded-md  ">
          <h2 className="flex justify-left  text-4xl font-semibold mb-6">
            Create Account
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-10 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-5 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-5 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-5 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <Link to="/feed">
              <button
                type="submit"
                onClick={handleSignUp}
                className="float-right px-7 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-300">
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="absolute z-0 top-0 right-0">
        <img src={bgImg} />
      </div>
    </div>
  );
};

export default SignUp;
