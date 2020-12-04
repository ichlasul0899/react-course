import Axios from 'axios';
import React, { useState } from 'react';
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    console.log(username, 'baru login');
    setLoginLoading(true);
    Axios.post('https://dev.api.etalasy.com/v1/login');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>
        Username kamu :
        {username || '. . .'}
        & Password kamu
        {password || '. . .'}
        login:
        {isLoginLoading}
      </p>
      <form
        className="login_form"
        onSubmit={() => {
          onSubmitLogin();
        }}
      >
        <label htmlFor="username">
          Username :
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="username">
          Password :
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" disabled={isLoginLoading} />
      </form>
    </div>
  );
};

export default Login;
