import React, { useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [userDetails, setUserDetails] = useState({}); // Initialize with an empty object
  console.log(userDetails);
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedPhotoURL = localStorage.getItem("photoURL");
    const storedEmail = localStorage.getItem("email");

    if (storedName) {
      setUserDetails({
        displayName: storedName,
        photoURL: storedPhotoURL,
        email: storedEmail,
      });
    }
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const userDetails = {
          displayName: user.displayName,
          email: user.email || "", // Use empty string if email is undefined
          photoURL: user.photoURL,
        };
        setUserDetails(userDetails);
        localStorage.setItem("name", userDetails.displayName);
        localStorage.setItem("email", userDetails.email); // Store email in localStorage
        localStorage.setItem("photoURL", userDetails.photoURL);
      })
      .catch((error) => {
        setError(error.message); // Set error state
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserDetails({}); // Clear user details
        localStorage.removeItem("name"); // Remove display name from local storage
        localStorage.removeItem("photoURL");
      })
      .catch((error) => {
        setError(error.message); // Set error state
      });
  };

  return (
    <div className="flex gap-4 items-center">
      {userDetails.displayName ? (
        <div className="flex justify-center items-center gap-1">
          <img src={userDetails.photoURL} className="w-8 rounded" alt="" />
          <p>{userDetails.displayName}</p>
        </div>
      ) : (
        ""
      )}
      {userDetails.displayName ? (
        ""
      ) : (
        <button
          className="font-medium bg-red text-white py-2 px-4 rounded-md"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
      <button
        className={`font-medium py-2 px-4 rounded-md ${
          userDetails.displayName ? "bg-red text-white" : ""
        }`}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
