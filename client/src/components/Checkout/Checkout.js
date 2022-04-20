import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Zoom from 'react-reveal/Zoom';
import "../../css/Checkout/Checkout.css";
import Input from '../Input/Input';
import OrderModal from '../Order/OrderModal';
import { clearOrder, createOrder } from '../../store/actions/order';
import { useDispatch } from 'react-redux';
const Checkout = ({showForm, setShowForm}) => {
  const [ formData, setFormData] = useState({});
  const [ modalIsOpen, setIsOpen ] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(dispatch, formData);
    setIsOpen(true);
    setShowForm(false);
  }
  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
  }
  const closeModal = () => {
    setIsOpen(false);
    clearOrder();
  }
  return (
    showForm && (
      <div className="checkout-form">
          <OrderModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
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