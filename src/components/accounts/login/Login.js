import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bgImg from "../../../images/bg.png";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("selectedUser", JSON.stringify(user));
      history("/feed");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };
  return (
    <div className="pl-20 pt-20 relative h-screen overflow-y-auto">
      <h1 className="flex items-center text-5xl font-extrabold dark:text-white text-pink-400 ">
        TweetX
      </h1>

      <Link to="/">
        <button
          type="button"
          className=" mt-20 flex justify-left ml-10 py-4 px-20 text-base font-medium  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-black-500 hover:text-pink-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Create Account
        </button>
      </Link>
      <div className="flex justify-left ml-10 mt-10 ">
        <div className="max-w-lg w-full bg-white p-8 border border-gray-300 shadow-md rounded-md">
          <h2 className="flex justify-left text-4xl font-semibold mb-6">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-10 p-4 w-full border rounded-md bg-gray-100"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type={password}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 w-full border rounded-md mt-5 bg-gray-100"
                required
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <a href="#" className="text-base text-black-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <Link to="/feed">
              <button
                onClick={handleLogin}
                type="submit"
                className="float-right px-7 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:border-pink-300">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="absolute z-0 top-0 right-0">
        {/* <img src={bgImg} /> */}
      </div>
    </div>
  );
};

export default Login;
