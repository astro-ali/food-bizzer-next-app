import { useState } from "react";

const Header = () => {
  const [cartItems, setCartItems] = useState(5);

  return (
    <div className="container header">
      <div className="navbar">
        <div className="hidden">hello</div>
        <div className="logo">
          <img src="images/buzzer-logo.svg" alt="Logo" />
        </div>
        <div className="shopping-cart">
          <button className="shopping-cart-button">
            <img
              className="shopping-cart-button-img"
              src="images/shopping-cart-icon.svg"
              alt="Shpping cart"
            />
          </button>
          <div
            className={`shopping-cart-item-counter ${
              cartItems == 0 ? "hidden" : ""
            }`}
          >
            {cartItems > 99 ? "+99" : cartItems}
          </div>
        </div>
      </div>
      <div className="restaurant">
        <div className="restaurant-info">
          <h1>650 Cafe</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from, Contrary to popular belief,
            random text.
          </p>
        </div>
        <div className="restaurant-logo">
            <img src="images/caffe-logo.svg" alt="Restaurant logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
