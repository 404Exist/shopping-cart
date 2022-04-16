import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import "../../css/Checkout/Checkout.css";
import Input from '../Input/Input';
import Zoom from 'react-reveal/Zoom';
const Checkout = ({showForm, setShowForm}) => {
  const [order, setOrder] = useState({name: "", email: ""});
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  const handleChange = ({target}) => {
    setOrder({...order, [target.name]: target.value});
  }
  return (
    showForm && (
      <div className="checkout-form">
          <GrClose className="close" onClick={() => setShowForm(false)} />
          <Zoom >
            <form onSubmit={handleSubmit}>
              <Input 
                label="Name"
                type="text"
                name="name"
                onChange={handleChange}
              />
              <Input 
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
              />
              <div>
                <button type="submit">Checkout</button>
              </div>
            </form>
          </Zoom>
        </div>
    )
  )
}

export default Checkout