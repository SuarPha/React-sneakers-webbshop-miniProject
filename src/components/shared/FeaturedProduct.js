import React, { useContext } from "react";
import { isInCart } from "../../helpers";
import { CartContext } from "../context/CartContext";
import { withRouter } from "react-router-dom";
import "./featuredProduct.css";

const FeaturedProduct = (props) => {
  const { title, imgUrl, price, history, id } = props;
  const product = { title, imgUrl, price, id };
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);

  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}
      >
        <img src={imgUrl} alt="product" />
      </div>
      <div className="name-price">
        <h2>{title}</h2>
        <span> $ {price}</span>
        <div className="btn">
        {!itemInCart && (
          <button
            className="button add-to-cart"
            onClick={() => addProduct(product)}
          >
            <span>ADD TO CART</span>
          </button>
        )}
        <button
            className="button is-blue"
            id="shop now"
            onClick={() => history.push(`/product/${id}`)}
          >
            CLICK ME!
          </button>
          </div>
        {itemInCart && (
          <button className="button add-more" onClick={() => increase(product)}>
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
