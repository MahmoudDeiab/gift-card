import React from "react";
import { MoonLoader } from "react-spinners";
import PropTypes from "prop-types";

const Button = ({ label, isLoading, onClick, isDisabled }) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className="cta-btn">
      {isLoading ? (
        <MoonLoader sizeUnit={"px"} size={20} color={"#fff"} loading={true} />
      ) : (
        label
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Button;
