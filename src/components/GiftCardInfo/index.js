import React from "react";
import PropTypes from "prop-types";

const GiftCardInfo = ({ error, data }) => {
  if (error) {
    return (
      <div className="gift-card-info-container">
        <p className="gift-card-number-label">{error.message}</p>
      </div>
    );
  }
  return (
    <div className="gift-card-info-container">
      <div>
        <p className="sub-section-title">Gift Card</p>
        <p className="gift-card-number-label">{data.giftCardNumber}</p>
      </div>
      <div>
        <p className="gift-card-amount-laebl">{`-€${data.amount}`}</p>
      </div>
    </div>
  );
};

GiftCardInfo.propTypes = {
  error: PropTypes.object,
  data: PropTypes.object
};

export default GiftCardInfo;
