import {
  GIFT_CARD_NUMBER_LENGTH,
  GIFT_CARD_CONTROL_CODE_LENGTH
} from "../constants";

export const isEmptyString = value => value === "";
export const isInteger = value => /^\d+$/.test(value);
export const isCorrectLength = (value, keyName) => {
  const requiredLength =
    keyName === "giftCardNumber"
      ? GIFT_CARD_NUMBER_LENGTH
      : GIFT_CARD_CONTROL_CODE_LENGTH;
  return value.length === requiredLength;
};
