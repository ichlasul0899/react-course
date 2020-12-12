import React, { useState } from 'react';
import { setCookie } from '../../utils/cookie';
import { authService } from '../../services';
import './style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        const cookieToken = res.token;
        const cookieUser = res.username;
        setCookie('userData', JSON.stringify(cookieUser), 10000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setUsername('');
        setPassword('');
        setLoginLoading(false);
        window.location.replace('/product');
      });
  };

  return (
    <div className="loginPage">
      <div id="card-content">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div id="card-title">
          <h2>LOGIN</h2>
          <div className="underline-title" />
        </div>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitLogin();
          }}
        >
          {/* <label htmlFor="username">
          Username :
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label> */}
          <label htmlFor="username" style={{ paddingTop: '13px' }}>
            Username
          </label>
          <input
            id="username"
            className="form-content"
            type="text"
            name="username"
            autoComplete="on"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <div className="form-border" />

          <label htmlFor="password" style={{ paddingTop: '22px' }}>
            Password
          </label>
          <input
            id="password"
            className="form-content"
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="form-border" />
          {/* <label htmlFor="password">
          Password :
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label> */}
          <input
            type="submit"
            value={isLoginLoading ? 'Loading...' : 'Login'}
            disabled={isLoginLoading}
            className="submit-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

// Login

// form => post ke server => waiting for response (loading state) =>
// receive response from server => success -> success statement to user
//                              => error -> error statement to user  -> next ngapain user?

// if success - get token from be - save Token to cookie -> redirect ??

// Loading state treatment
// race condition -> unstable connection

// Action A -> Response A  ->  Action B ->  Response B -> success
