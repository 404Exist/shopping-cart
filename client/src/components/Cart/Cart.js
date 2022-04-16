import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../css/Cart/Cart.css";
import Checkout from "../Checkout/Checkout";
import Bounce from 'react-reveal/Bounce';
const Cart = ({cart, removeFromCart}) => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="cart-wrapper">
        <div className="cart-header">
          { cart.length ? `There's ${cart.length} products in cart` : t("cart.empty") }
        </div>
        <Bounce bottom cascade>
          <div className="cart">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <div className="cart-info">
                  <div>
                    <p>{ t("title") }: { item.title }</p>
                    <p>{ t("qty") } { item.qty }</p>
                    <p>{ t("price") }: ${ item.price * item.qty }</p>
                  </div>
                  <button onClick={() => removeFromCart(item)}>
                    { t("remove") }
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Bounce>
        {cart.length ? (
          <div className="cart-footer">
            <div className="total-price">Total Price : ${cart.reduce((acc, product) => {
              return acc + product.price * product.qty;
            }, 0)} </div>
            <button onClick={() => setShowForm(true)}>Select products</button>
          </div>
        ) : (<></>)}

        <Checkout showForm={showForm} setShowForm={setShowForm} />
      </div>
  )
}

export default Cart