import React, { useState } from "react";
import PropTypes from "prop-types";

import "../styles/Subscribe.css";

const Subscribe = ({
  placeholder,
  buttonText,
  configureNotification,
  showNotification,

}) => {
  const [state, setState] = useState({
    email: ""
  });

  const handleChange = e => {
    setState({ email: e.target.value.trim() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (this.state.email) {
      fetch(`/api/addMember?email=${this.state.email}`)//change, add 'this keyword'
        .then(res => res.json()
          .then(data => ({ status: res.status, body: data })))
        .then(obj => {
          configureNotification(obj);
          showNotification();
        })
        .catch(err => console.log(err))


      setState({ email: "" });
    }
  };

  return (
    <form className="subscribe" onSubmit={handleSubmit}>
      {/*  <input
        className="subscribe-email"
        name="email"
        type="email"
        placeholder={placeholder}
        onChange={handleChange}
        value={state.email}
        aria-label="Email Address"
      />
      <button className="subscribe-button" type="submit">
        {buttonText}
      </button> */}
      {/* <div class="buttonIn">  */}
      <input className="subscribe-email"
        name="email"
        type="email"
        placeholder={placeholder}
        onChange={handleChange}
        value={state.email}
        aria-label="Email Address" />
      <button className="subscribe-button" type="submit"> {buttonText}</button>
      {/* </div> */}
    </form>
  );
};

Subscribe.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  configureNotification: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired,
};

export default Subscribe;
