// import Header from "./layouts/dashboard/header/Header";
import "./App.css";
// import Profile from "./components/profile/Profile";
// import Navbar from "./layouts/dashboard/navbar/Navbar";
// // import Login from "./components/accounts/login/Login";
// import Signup from "./components/accounts/signup/Signup";
// //import Post from "./components/profile/Post";
// import Feed from "./components/feeds/Feed";
import { useState, useEffect } from "react";
import Feed from "./components/feeds/Feed";
//import ProfileLayout from "./router/ProfileLayout";
import Users from "./components/users/Users";
import { Route, Routes, Router } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Signup from "./components/accounts/signup/Signup";
import Login from "./components/accounts/login/Login";
import users from "./constant/users.json";
import Header from "./components/profile/Header";
import ProfileHeader from "./components/profile/Header";
import PostList from "./components/profile/PostList";
import FollowersList from "./components/profile/FollowersList";
import FollowingList from "./components/profile/FollowingList";
import Modal from "./components/feeds/Modal";

function App() {
  const [formData, setFormData] = useState(users);

  const handleSignUp = (user) => {
    setFormData([...formData, user]);
    console.log("user", formData);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(formData));
    console.log(users);
  }, [formData]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup onSignUp={handleSignUp} />} />
        <Route path="login" element={<Login />} />
        <Route
          path="feed"
          element={
            <>
              <Navbar />
              <Feed formData={formData} />
            </>
          }
        />

        <Route
          path="users"
          element={
            <>
              <Navbar /> <Users formData={formData} />
            </>
          }
        />

        <Route
          path="modal"
          element={
            <>
              <Navbar />
              <ProfileHeader />
              <Modal />
              <PostList />
            </>
          }
        />
        <Route
          path="profile"
          element={
            <>
              <Navbar />
              <ProfileHeader />
              <Modal />
              <PostList />
            </>
          }
        />
        <Route
          path="posts"
          element={
            <>
              <Navbar />
              <ProfileHeader />
              <Modal />
              <PostList />
            </>
          }
        />
        <Route
          path="followers"
          element={
            <>
              <Navbar />
              <ProfileHeader />
              <FollowersList />
            </>
          }
        />
        <Route
          path="following"
          element={
            <>
              <Navbar />
              <ProfileHeader />
              <FollowingList />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
