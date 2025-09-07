import { Footer } from "../headerfooter/footer";
import { Header } from "../headerfooter/header";
import "./shoppingCart.css";
import "../globals.css";

export const ShoppingCart = () => {
  let cart = null;
  let subtotal = null;
  let total = null;

  let subtotalDisplay;
  let displayText;
  let totalDisplay;

  if (cart === null) {
    displayText = "There are no items in your bag.";
  } else {
    displayText = cart;
  }

  if (subtotal === null) {
    subtotalDisplay = "";
  } else {
    subtotalDisplay = subtotal;
  }

  if (total === null) {
    totalDisplay = "-";
  } else {
    totalDisplay = total;
  }

  return (
    <>
      <Header></Header>
      <article className="shoppingCartPage">
        <div className="bagSection">
          <h1>Bag</h1>
          <h4>{displayText}</h4>
        </div>

        <div className="summarySection">
          <h1>Summary</h1>
          <span>
            <h4>Subtotal</h4>
            <h4>{subtotalDisplay}</h4>
          </span>
          <span>
            <h4>Estimated Shipping & Handling</h4>
            <h4>Free</h4>
          </span>
          <span>
            <h4>Estimated Tax</h4>
            <h4>-</h4>
          </span>
          <hr></hr>
          <span>
            <h3>Total</h3>
            <h3>{totalDisplay}</h3>
          </span>
          <hr></hr>
          <button className="addToBagButton checkoutBtn">Checkout</button>
        </div>
      </article>
      <Footer></Footer>
    </>
  );
};
