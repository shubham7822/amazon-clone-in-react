import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkoutLeft'>
        <img
          className='checkout_ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        {basket.length === 0 ? (
          <div>
            <h1>Your Shopping Basket is Empty</h1>
            <h3>
              You have no items in your basket to Add something click on 'Add to
              basket button'
            </h3>
          </div>
        ) : (
          <div>
            <h2 className='checkout_title'>Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className='checkoutRight'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
