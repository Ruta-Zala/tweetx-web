import React, { useState } from "react";

const FollowingList = () => {
  const loggedInUserData = JSON.parse(localStorage.getItem("selectedUser"));
  const following = loggedInUserData ? loggedInUserData.following : [];
  const allUsersData = JSON.parse(localStorage.getItem("users")) || [];

  const [followingList, setFollowingList] = useState(following);
  const filteredUsers = allUsersData.filter((user) =>
    following.includes(user.userId)
  );
  const handleUnfollow = (userId) => {
    const updatedFollowingList = followingList.filter((id) => id !== userId);
    setFollowingList(updatedFollowingList);

    // Update the localStorage with the updated following list
    const updatedLoggedInUserData = {
      ...loggedInUserData,
      following: updatedFollowingList,
    };
    localStorage.setItem(
      "selectedUser",
      JSON.stringify(updatedLoggedInUserData)
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-between w-[500px] mt-10">
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.userId}>
                <div className="shadow-lg rounded-xl p-8 ">
                  <div className="flex mt-10">
                    <div className="h-16 min-w-16 border border-gray-500 rounded-full flex items-center justify-center">
                      {user.name.firstName.charAt(0)}
                      {user.name.lastName.charAt(0)}
                    </div>

                    <div className="flex flex-col justify-start">
                      <div className="ml-5 w-[200px] ">
                        <div className="text-gray-400 font-medium text-2xl">
                          {user.name.firstName} {user.name.lastName}
                        </div>
                      </div>
                      <div className="ml-5">
                        following:
                        {user.following?.length}
                      </div>
                      <button
                        className="ml-[280px] text-black bg-white-500 border border-black hover:bg-pink-400 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-pink-500 dark:hover:bg-pink-400 focus:outline-none dark:focus:ring-pink-500"
                        onClick={() => handleUnfollow(user.userId)}>
                        Following
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FollowingList;
