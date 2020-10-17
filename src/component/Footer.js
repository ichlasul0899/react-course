import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer black">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Quote Of The Day</h5>
            <p className="grey-text text-lighten-4">
              Kesuksesan Harus Di Capai dengan Planning.
              {' '}
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Follow Me</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  Linked In
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  Github
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  Instagram
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2014 Copyright Text
          {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
