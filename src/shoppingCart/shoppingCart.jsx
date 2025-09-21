import { Footer } from "../headerfooter/footer";
import { Header } from "../headerfooter/header";
import "./shoppingCart.css";
import "../globals.css";
import { LocationComponent } from "../IPCall/locationComponent";
import deleteBtn  from "/images/deleteBtn.png";
export const ShoppingCart = () => {

  let raw = null;
  let parsed = null;
  try {
    raw = localStorage.getItem("cart:");
    parsed = raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("Failed to parse cart from localStorage:", err);
    parsed = null;
  }


  const cartArray = parsed ? (Array.isArray(parsed) ? parsed : [parsed]) : [];


  const parsePrice = (price) => {
    if (price == null) return 0;
    if (typeof price === "number") return price;
    const cleaned = String(price).replace(/[^0-9.-]+/g, "");
    const num = Number(cleaned);
    return Number.isFinite(num) ? num : 0;
  };


  const subtotal = cartArray.reduce((sum, it) => {
    const priceNum = parsePrice(it?.price);
    const qty = Number(it?.qty ?? 1);
    return sum + priceNum * qty;
  }, 0);

  const TAX_RATE = 0.0725;
  const taxNumber = Number((subtotal * TAX_RATE).toFixed(2));
  const totalNumber = Number((subtotal + taxNumber).toFixed(2));

  const fmtCurrency = (n) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(n);

  const bagIsEmpty = cartArray.length === 0;

  const bagList = bagIsEmpty ? (
    <h4>There are no items in your bag.</h4>
  ) : (
    <ul className="bagList">
      {cartArray.map((item, idx) => {
        const name = item?.shoe ?? item?.title ?? `Item ${idx + 1}`;
        const gender = item?.gender ? `(${item.gender})` : "";
        const price = parsePrice(item?.price);
        const qty = Number(item?.qty ?? 1);
        const lineTotal = price * qty;

        return (
          <li key={idx} className="bagListItem">
            <div className="bagItemMain">
              <div className="bagItemName">
                {name} <span className="bagItemGender">{gender}</span>
              </div>
              <div className="bagItemQty">Qty: {qty}</div>
            </div>
            <div className="bagItemPrice">
              <div>{fmtCurrency(price)}</div>
              <button
                onClick={() => handleDelete(item.idx)}
                className="delete-btn"
              >
                <img src={deleteBtn} alt="deleteItem"></img>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );


  const subtotalDisplay = fmtCurrency(subtotal);
  const taxDisplay = fmtCurrency(taxNumber);
  const totalDisplay = fmtCurrency(totalNumber);

  return (
    <>
      <Header />
      <article className="shoppingCartPage">
        <LocationComponent />
        <div className="bagSection">
          <h1>Bag</h1>
          {bagList}
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
            <h4>{taxDisplay}</h4>
          </span>
          <hr />
          <span>
            <h3>Total</h3>
            <h3>{totalDisplay}</h3>
          </span>
          <hr />
          <button className="addToBagButton checkoutBtn">Checkout</button>
        </div>
      </article>
      <Footer />
    </>
  );
};
