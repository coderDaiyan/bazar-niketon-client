import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { firebaseConfig } from "./firebase.config";
import "./Login.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || {
    from: { pathname: `/` },
  };

  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [newUser, setNewUser] = useState(false);
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        // ? Sign in successful
        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          password: "",
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <>
      <div className="login">
        <div className="login-box mt-5 p-5">
          <h3 className="text-white">Login With</h3>
          <br />
          <button className="login-btn text-left" onClick={handleGoogleSignIn}>
            <img
              alt=""
              width="30px"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
            />
            <b className="pr-5">Continue with Google</b>
          </button>

          <p style={{ color: "red" }}>{error.errorMessage}</p>
        </div>
      </div>
    </>
  );
};

export default Login;
