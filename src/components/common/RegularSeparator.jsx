import React from "react";
import PropTypes from "prop-types";

const RegularSeparator = (props) => {
  const { style } = props;

  return <div style={{ ...{ width: 10, height: 10 }, ...style }} />;
};

RegularSeparator.propTypes = {
  style: PropTypes.any,
};

export default RegularSeparator;
