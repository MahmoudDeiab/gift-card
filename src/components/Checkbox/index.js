import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ label, value, handleCheckboxChange }) => {
  return (
    <label className="checkbox-container">
      {label}
      <input
        value={value}
        type="checkbox"
        name="checkbox"
        onClick={event => handleCheckboxChange(event.target.checked)}
      />
      <span className="checkmark" />
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};

export default Checkbox;
