import { useTranslation } from "react-i18next";
import "../../css/Cart/Cart.css";
const Cart = ({cart, removeFromCart}) => {
  const { t } = useTranslation();
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        { cart.length ? `There's ${cart.length} products in cart` : t("cart.empty") }
      </div>
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
      
    </div>
  )
}

export default Cart