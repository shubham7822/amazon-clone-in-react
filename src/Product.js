import { Button } from "@material-ui/core";
import React from "react";
import "./Product.css";

import { useStateValue } from "./StateProvider";

function Product({ title, price, image, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product_info'>
        <p className='product_title'>{title}</p>
        <p className='product_Price'>
          <span>&#x20B9;</span>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((i) => {
              return <p>🌟</p>;
            })}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket} className='Product_btn'>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
