import React, { useState } from "react";
import Button from "../Button";
import { isInteger, isEmptyString, isCorrectLength } from "../../utils";
import PropTypes from "prop-types";
import {
  GIFT_CARD_CONTROL_CODE_LENGTH,
  GIFT_CARD_NUMBER_LENGTH
} from "../../constants";

const GiftCardForm = ({ isApplying, onSubmit }) => {
  const [giftCardNumber, setGiftCardNumber] = useState("");
  const [giftCardControlCode, setGiftCardControlCode] = useState("");
  const handleSubmit = () => {
    setGiftCardNumber("");
    setGiftCardControlCode("");
    onSubmit(giftCardNumber, giftCardControlCode);
  };
  const isFormValid = !(
    isCorrectLength(giftCardNumber, "giftCardNumber") &&
    isCorrectLength(giftCardControlCode, "giftCardControlCode")
  );
  return (
    <div className="form-container">
      <div className="gift-card-form-inputs-container">
        <div className="left-input">
          <input
            onChange={event => {
              const value = event.target.value;
              if (
                (isInteger(value) && value.length <= GIFT_CARD_NUMBER_LENGTH) ||
                isEmptyString(value)
              ) {
                setGiftCardNumber(value);
              }
            }}
            value={giftCardNumber}
            className="form-input"
            placeholder="Gift Card Number"
          />
        </div>
        <div className="right-input">
          <input
            onChange={event => {
              const value = event.target.value;
              if (
                (isInteger(value) &&
                  value.length <= GIFT_CARD_CONTROL_CODE_LENGTH) ||
                isEmptyString(value)
              ) {
                setGiftCardControlCode(value);
              }
            }}
            value={giftCardControlCode}
            className="form-input"
            placeholder="Control Code"
          />
        </div>
      </div>
      <Button
        isDisabled={isFormValid}
        isLoading={isApplying}
        label="Apply"
        onClick={handleSubmit}
      />
    </div>
  );
};

GiftCardForm.propTypes = {
  isApplying: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default GiftCardForm;
