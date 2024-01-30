import React, { useState } from "react";

import moment from "moment";

const Popup = ({ onClose, onPost }, { fromData }) => {
  const [sentence, setSentence] = useState("");

  const handlePost = () => {
    if (sentence.trim() !== "") {
      const post_id = new Date().getTime();
      let now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let created_time = hour + ":" + minute;
      const user_Id = 1;
      onPost({ post_id, description: sentence, created_time, user_Id });

      onClose();
    } else {
      alert("Please enter a sentence before posting.");
    }
  };

  return (
    <div className="popup flex justify-center items-center">
      <textarea
        className="block p-2.5 w-[400px] h-[100px] text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
        placeholder="Write your sentence here..."
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />
      <br />
      <div className="gap-5 flex ">
        <div>
          <button
            class="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 border border-pink-500 rounded"
            onClick={handlePost}>
            Post
          </button>
        </div>
        <div>
          <button
            class="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 border border-pink-500 rounded"
            onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
