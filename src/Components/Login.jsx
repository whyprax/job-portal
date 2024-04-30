import React, { useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [userDetails, setUserDetails] = useState({}); // Initialize with an empty object
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    // Check if user is already logged in
    const displayName = localStorage.getItem("name");
    if (displayName) {
      setUserDetails({ displayName });
    }
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUserDetails({ displayName: user.displayName, email: user.email });
        localStorage.setItem("name", user.displayName);
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
      })
      .catch((error) => {
        setError(error.message); // Set error state
      });
  };

  return (
    <div className="flex gap-4 items-center">
      <p>Welcome, {userDetails.displayName}</p>
      <button
        className="font-medium bg-red text-white py-2 px-4 rounded-md"
        onClick={handleLogin}
      >
        Login
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
