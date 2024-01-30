import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const details = JSON.parse(localStorage.getItem("selectedUser") || "{}");
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");

  const { firstName, lastName } = useMemo(() => details.name, [details.name]);
  const userPosts = posts.filter((post) => post.user_id === details.userId);

  return (
    <div>
      <div className="header">
        <div className="flex flex-row justify-center gap-[150px]  mt-10">
          <div className="h-[150px] w-[150px] rounded-full border border-gray-400  flex items-center justify-center text-3xl font-bold text-gray-300">
            {firstName.charAt(0)} {lastName.charAt(0)}
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-5xl font-bold text-gray-400 flex justify-center items-center">
              {firstName} {lastName}
            </div>
            <div className="flex flex-row gap-5 mt-10">
              <div>
                Post:
                {userPosts.length}
              </div>
              <div>
                followers:
                {details.followers?.length}
              </div>
              <div>
                following:
                {details.following?.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <hr className="w-[700px] h-px my-8 bg-gray-200 border-2 dark:bg-gray-700 "></hr>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="hidden w-full md:block md:w-auto mr-20"
          id="navbar-default">
          <ul className="gap-20 ml-[100px] font-medium text-xl flex flex-col p-4 md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200
                                 ${isActive ? "text-pink-500" : "text-gray-600"}
                                 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-600 lg:p-0`
                }>
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/followers"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200
                                 ${isActive ? "text-pink-500" : "text-gray-700"}
                                 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-600 lg:p-0`
                }>
                Followers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/following"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200
                                 ${isActive ? "text-pink-500" : "text-gray-700"}
                                 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-600 lg:p-0`
                }>
                Following
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
