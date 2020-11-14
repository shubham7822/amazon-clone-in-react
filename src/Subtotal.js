import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

import "./Subtotal.css";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const history = useHistory();

  const checkoutHandle = (e) => {
    history.push("/");
    e.preventDefault();
  };
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"Rs"}
      />
      <button onClick={checkoutHandle}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
