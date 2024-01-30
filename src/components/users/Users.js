import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [followingMap, setFollowingMap] = useState({});

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(usersData);

    const loggedInUserData =
      JSON.parse(localStorage.getItem("selectedUser")) || {};
    setLoggedInUser(loggedInUserData);

    const storedFollowingMap =
      JSON.parse(localStorage.getItem("followingMap")) || {};
    setFollowingMap(storedFollowingMap);
  }, []);

  const handleToggleFollow = (userId) => {
    const updatedFollowingMap = { ...followingMap };

    if (updatedFollowingMap[userId]) {
      delete updatedFollowingMap[userId];
    } else {
      updatedFollowingMap[userId] = true;
    }

    setFollowingMap(updatedFollowingMap);
    localStorage.setItem("followingMap", JSON.stringify(updatedFollowingMap));
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center w-[500px] ">
        <div className="flex flex-col justify-between w-[500px]">
          {users.map((user) => (
            <div className="shadow-lg rounded-xl p-8 ">
              <div className="flex justify-start">
                <p className="flex justify-end  mt-2 " key={user.userId}>
                  <div className="flex mt-10">
                    <div className="h-16 min-w-16 border border-gray-500 rounded-full flex items-center justify-center">
                      {user.name.firstName.charAt(0)}
                      {user.name.lastName.charAt(0)}
                    </div>
                    <div className="flex flex-col justify-start">
                      <div className=" ml-5 w-[200px] ">
                        <div className="text-gray-400 font-medium text-2xl">
                          {user.name.firstName} {user.name.lastName}
                        </div>
                        <div>
                          following:
                          {user.following?.length}
                        </div>
                      </div>
                      {user.userId !== loggedInUser.userId && (
                        <div>
                          <button
                            className="mt-5 ml-[250px] text-white bg-pink-500 hover:bg-pink-400 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-pink-500 dark:hover:bg-pink-400 focus:outline-none dark:focus:ring-pink-500"
                            onClick={() => handleToggleFollow(user.userId)}>
                            {followingMap[user.userId] ? "Following" : "Follow"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
