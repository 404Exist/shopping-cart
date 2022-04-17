import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "../../css/Cart/Cart.css";
import Checkout from "../Checkout/Checkout";
import Bounce from 'react-reveal/Bounce';
import { removeFromCart } from "../../store/actions/cart";
const Cart = () => {
  const { t } = useTranslation();
  const [ showForm, setShowForm ] = useState(false);
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-wrapper">
        <div className="cart-header">
          { items?.length ? `There's ${items.length} products in cart` : t("cart.empty") }
        </div>
        <Bounce bottom cascade>
          <div className="cart">
            {items?.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <div className="cart-info">
                  <div>
                    <p>{ t("title") }: { item.title }</p>
                    <p>{ t("qty") } { item.qty }</p>
                    <p>{ t("price") }: ${ item.price * item.qty }</p>
                  </div>
                  <button onClick={() => removeFromCart(dispatch, item.id)}>
                    { t("remove") }
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Bounce>
        {items?.length ? (
          <div className="cart-footer">
            <div className="total-price">Total Price : ${items.reduce((acc, product) => acc + product.price * product.qty, 0)} </div>
            <button onClick={() => setShowForm(true)}>Select products</button>
          </div>
        ) : (<></>)}

        <Checkout showForm={showForm} setShowForm={setShowForm} />
      </div>
  )
}

export default Cart