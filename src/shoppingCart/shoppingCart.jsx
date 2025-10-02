import { Footer } from "../headerfooter/footer";
import { Header } from "../headerfooter/header";
import { Link } from "react-router-dom";
import "./shoppingCart.css";
import "../globals.css";
/*import { LocationComponent } from "../IPCall/locationComponent";*/
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


console.log(raw)
console.log(parsed)


const handleDelete = (index) => {
  console.log(index)
  console.log(parsed);
parsed.splice(index, 1)
console.log(parsed)
console.log(JSON.stringify(parsed.splice(index, 1)));
localStorage.setItem("cart:", JSON.stringify(parsed.splice(index, 1)));

}



  const bagList = bagIsEmpty ? (
    <h4>There are no items in your bag.</h4>
  ) : (
    <ul className="bagList">
      {cartArray.map((item, idx) => {
        const name = item?.shoe ?? item?.title ?? `Item ${idx + 1}`;
        const gender = item?.category ? `${item.category}` : "";
        const price = parsePrice(item?.price);
        const qty = Number(item?.qty ?? 1);
       const image = item.images[0]
        const lineTotal = price * qty;
        const index = cartArray.indexOf(item)

        return (
          <li key={idx} className="bagListItem">
            <div className="bagItemMain">
              <div className="bagItemName">
                {name}
              </div>
              <div className="bagItemQty"><div>{gender}</div>Qty: {qty}</div>
            </div>
            <div>
              <img className="bagImg" src={image}></img>
            </div>
            <div className="bagItemPrice">
              <div>{fmtCurrency(price)}</div>
              <button
                onClick={() => handleDelete(index)}
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
        <div className="shoppingLeft">
          <form>
            <label>
              Contact
              <input type="text" placeholder="Email"></input>
            </label>
            <div>
              <h5>
                <em>Using Rewards? Login!</em>
              </h5>
            </div>

            <label>
              Delivery
              <span className="relatedInputs">
                <input type="text" placeholder="First name"></input>
                <input type="text" placeholder="Last name"></input>
              </span>
              <input type="text" placeholder="Address"></input>
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
              ></input>
              <span className="relatedInputs">
                <input type="text" placeholder="City"></input>
                <label for="state">State:</label>
                <select name="state" id="state">
                  <option value="">-</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>

                <input type="text" placeholder="ZIP code"></input>
              </span>
              <input type="text" placeholder="Phone"></input>
            </label>
          </form>
          <Link to={"/checkout"}>
            <button className="addToBagButton checkoutBtn">Checkout</button>
          </Link>
        </div>

        {/*    <LocationComponent />*/}
        <div className="shoppingRight">
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
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};
