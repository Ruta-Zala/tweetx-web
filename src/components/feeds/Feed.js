import React, { useState, useEffect } from "react";
import posts from "../../constant/post.json";
import { Link } from "react-router-dom";

const Feed = () => {
  const [userPosts, setUserPosts] = useState(posts);
  const [userDetails, setUserDetails] = useState({});
  // useEffect(() => {
  //   localStorage.setItem("posts", JSON.stringify(userPosts));
  //   const usersData = JSON.parse(localStorage.getItem("users")) || [];
  //   const userDetailsMap = {};
  //   usersData.forEach((user) => {
  //     userDetailsMap[user.userId] = user;
  //   });
  //   setUserDetails(userDetailsMap);
  // }, [userPosts]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setUserPosts(storedPosts);

    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    const userDetailsMap = {};
    usersData.forEach((user) => {
      userDetailsMap[user.userId] = user;
    });
    setUserDetails(userDetailsMap);
  }, []);
  const loggedInUserData = JSON.parse(localStorage.getItem("selectedUser"));
  const loggedInUserId = loggedInUserData ? loggedInUserData.userId : null;

  const filteredPosts = userPosts.filter(
    (post) => post.user_id !== loggedInUserId
  );

  const getPostdata = JSON.parse(localStorage.getItem("posts"));
  console.log("getPostdata", getPostdata);

  return (
    <div>
      <div className="flex flex-col gap-5 max-w-[800px] mx-auto">
        <Link to="/profile">
          <button className="mt-5 text-white bg-pink-500 hover:bg-pink-400 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-pink-500 dark:hover:bg-pink-400 focus:outline-none dark:focus:ring-pink-500">
            Write
          </button>
        </Link>

        <ul className="flex flex-col gap-5 my-10">
          {filteredPosts.map((post) => (
            <li key={post.post_id}>
              <div className="shadow-lg rounded-xl p-8">
                <div className="flex gap-7">
                  <div className="h-16 min-w-16 border border-gray-500 rounded-full flex items-center justify-center">
                    {userDetails[post.user_id]?.name?.firstName.charAt(0)}
                    {userDetails[post.user_id]?.name?.lastName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="my-5 text-gray-400 font-medium text-2xl">
                      {userDetails[post.user_id]?.name?.firstName}{" "}
                      {userDetails[post.user_id]?.name?.lastName}
                    </h3>
                    <span>{post.description}</span>
                  </div>
                  {post?.created_time?.toLocaleString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feed;
