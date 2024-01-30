import React, { useEffect, useState, useMemo } from "react";

function PostList() {
  const [userPosts, setUserPosts] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const details = JSON.parse(localStorage.getItem("selectedUser") || "{}");

  const { firstName, lastName } = useMemo(() => details.name, [details.name]);
  const postData = JSON.parse(localStorage.getItem("posts"));
  const loginUserData = JSON.parse(localStorage.getItem("selectedUser"));
  useEffect(() => {
    const filteredPosts = postData.filter(
      (post) => post.user_id === loginUserData.userId
    );
    setUserPosts(filteredPosts);
  }, [loginUserData.userId, postData]);

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
  return (
    <div>
      <div className="flex flex-col max-w-[800px] mx-auto">
        <ul className="flex flex-col gap-5 my-10">
          {userPosts.map((post) => (
            <li key={post.post_id}>
              <div className="shadow-lg rounded-xl p-8 ">
                <div className="flex gap-7">
                  <div className="h-16 min-w-16 border border-gray-500 rounded-full flex items-center justify-center">
                    {firstName.charAt(0)} {lastName.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="my-5 text-gray-400 font-medium text-2xl">
                      {firstName} {lastName}
                    </h3>
                    <p>{post.description}</p>
                  </div>
                  <p>{post.created_time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostList;
