import React from 'react';
import FormContactMe from './FormContactMe';

const Contact = () => {
  return (
    <section id="contact" className="contact scrollspy">
      <div className="container">
        <h3 className="light center">You Can Contact Me</h3>
        <div className="row">
          <div className="col m5 s12 ">
            <div className="card-panel black white-text center">
              <i className="material-icons">email</i>
              <h5>
                <b>FOR YOUR INFORMATION</b>
              </h5>
              <p>
                If you want to contact me. I am avalaible start from 10 am to 8
                pm.
                {' '}
              </p>
            </div>

            <ul className="collection with-header">
              <li className="collection-header">
                <h5>
                  <b>Our Office</b>
                </h5>
              </li>
              <li className="collection-item">Web Programming</li>
              <li className="collection-item">
                Sukabirus Street No. F20, Bandung
              </li>
              <li className="collection-item">West Java, Indonesia</li>
            </ul>
          </div>

          <div className="col m7 s12">
            <FormContactMe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
