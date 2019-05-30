export const applyGiftCard = async (giftCardNumber, giftCardControlCode) => {
  return new Promise((resolve, reject) => {
    const requestBody = {
      giftCardNumber,
      giftCardControlCode
    };
    fetch("http://localhost:5000/verify", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        resolve(response.json());
      })
      .catch(() => {
        reject({
          message:
            "An error occurred. Please try again later or contact support."
        });
      });
  });
};
