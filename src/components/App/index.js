import React, { Component } from "react";
import Checkbox from "../Checkbox";
import GiftCardInfo from "../GiftCardInfo";
import GiftCardForm from "../GiftCardForm";
import { applyGiftCard } from "../../api";

class App extends Component {
  state = {
    hasGiftCard: false,
    isApplying: false,
    isApplied: false,
    data: null,
    error: null
  };

  toggleHasGiftCard = hasGiftCard => this.setState({ hasGiftCard });

  toggleIsApplying = () =>
    this.setState({ isApplying: !this.state.isApplying });

  applyGiftCard = async (giftCardNumber, giftCardControlCode) => {
    this.toggleIsApplying();
    try {
      const { data, error } = await applyGiftCard(
        giftCardNumber,
        giftCardControlCode
      );
      this.setState({ data, error, isApplied: true });
    } catch (error) {
      this.setState({ data: null, error, isApplied: true });
    }
    this.toggleIsApplying();
  };

  render() {
    const { hasGiftCard, isApplying, isApplied, data, error } = this.state;
    return (
      <div className="app">
        <h3 className="section-title">Gift Cards</h3>
        <Checkbox
          label="Do you have a gift card?"
          handleCheckboxChange={this.toggleHasGiftCard}
          value={hasGiftCard}
        />
        {hasGiftCard && (
          <div>
            <p className="form-instruction-label">
              Please enter the 19-digit number and code from your gift card
              below.
            </p>
            {isApplied && <GiftCardInfo error={error} data={data} />}
            <GiftCardForm
              isApplying={isApplying}
              onSubmit={this.applyGiftCard}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
