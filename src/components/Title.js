import React from "react";
import PropTypes from "prop-types";

import "../styles/Title.css";

const Title = ({ text }) =>
  <>
    <p className="title">Worldwide map of sustainable <br />fashion shops. Launch fall 2020. <br />Be the first to know.</p>
  </>


Title.propTypes = {
  text: PropTypes.string.isRequired,

};

export default Title;
