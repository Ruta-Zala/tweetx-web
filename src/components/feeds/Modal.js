import { React, useState, useEffect } from "react";
import Popup from "./Popup";
import posts from "../../constant/post.json";

const Modal = () => {
  const [userPosts, setUserPosts] = useState(posts);
  const [isPopupOpen, setPopupOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(userPosts));
    // console.log(posts);
  }, [userPosts]);

  const handlePost = (post) => {
    setUserPosts([...userPosts, post]);
    localStorage.setItem("posts", JSON.stringify([...userPosts, post]));
    handleClose();
  };
  const handleClose = () => {
    setPopupOpen(false);
  };
  return (
    <div className="flex justify-center">
      <button
        className="mt-5  text-white bg-pink-500 hover:bg-pink-400 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-pink-500 dark:hover:bg-pink-400 focus:outline-none dark:focus:ring-pink-500"
        onClick={() => setPopupOpen(true)}>
        Write
      </button>
      {isPopupOpen && <Popup onClose={handleClose} onPost={handlePost} />}
    </div>
  );
};

export default Modal;
