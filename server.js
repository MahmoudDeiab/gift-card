const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const checkIfValid = (giftCardNumber, giftCardControlCode) => {
  return giftCardNumber === "123456789123456" && giftCardControlCode === "123";
};

app.post("/verify", (req, res) => {
  const { giftCardNumber, giftCardControlCode } = req.body;
  const isValid = checkIfValid(giftCardNumber, giftCardControlCode);
  return setTimeout(() => {
    res.status(200);
    if (isValid) {
      return res.json({
        error: null,
        data: {
          giftCardNumber: `**** **** **** **** ${giftCardControlCode}`,
          amount: 20
        }
      });
    }
    return res.json({
      data: null,
      error: {
        message: "The gift card you entered is no longer valid"
      }
    });
  }, 2000);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
