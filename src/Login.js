import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

import { auth } from "./Firebase";
function Login() {
  const history = useHistory();
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = (e) => {
    auth
      .signInWithEmailAndPassword(Email, password)
      .then((auth) => {
        //logged in  redirect
        history.push("/");
      })
      .catch((e) => alert(e.message));
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(Email, password)
      .then((auth) => {
        //create a user , logged in and redirect
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_img'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
        />
      </Link>

      <div className='login_container'>
        <h1>Sign In</h1>
        <form>
          <h4>Email</h4>
          <input
            value={Email}
            type='text'
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>password</h4>
          <input
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' onClick={login} className='login_signin_button'>
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazons Conditions of Use and Privacy
            Notice.
          </p>
          <button onClick={register} className='login_regester_button'>
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
