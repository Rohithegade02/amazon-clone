import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout_ad"
            src="https://gos3.ibcdn.com/top-1568020025.jpg"
            alt=""
          />
          <div>
            <h3>Hello,{user?.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
