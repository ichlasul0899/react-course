/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FormContactMe = () => {
  return (
    <form action="">
      <div className="card-panel">
        <h5>Please fill out this form</h5>
        <div className="input-field">
          <input type="text" name="name" id="name" required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input
            type="email"
            name="email"
            id="email"
            className="validate"
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input type="text" name="phone" id="phone" required />
          <label htmlFor="phone">Phone Number</label>
        </div>
        <div className="input-field">
          <textarea
            name="message"
            id="message"
            className="materialize-textarea"
            required
          />
          <label htmlFor="name">Message</label>
        </div>
        <button type="submit" className=" btn black white-text ">
          Send
        </button>
      </div>
    </form>
  );
};

export default FormContactMe;
