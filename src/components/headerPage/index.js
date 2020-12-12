import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, setCookie } from '../../utils/cookie';

const Logout = () => {
  const hapusCookie = (e) => {
    e.preventDefault();
    setCookie('userData', '', -1);
    setCookie('token', '', -1);
    window.location.replace('/');
  };

  return (
    <>
      <button onClick={hapusCookie} type="button" className="btn btn-danger">
        Logout
      </button>
    </>
  );
};

const Login = () => {
  return (
    <Link to="/login" className="btn btn-primary">
      Login
    </Link>
  );
};

const Header = () => {
  const listMenu = ['home', 'profile', 'contact', 'infoCorona', 'product'];

  useEffect(() => {}, []);
  return (
    <div className="header">
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          {listMenu.map((name) => {
            return (
              <Link to={`/${name}`} key={name}>
                <div className="menu" style={{ textTransform: 'capitalize' }}>
                  {name}
                </div>
              </Link>
            );
          })}
        </div>
        <div>{isUserAuthenticated() ? <Logout /> : <Login />}</div>
      </div>
    </div>
  );
};
export default Header;
