import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';
import "../../css/order/OrderModal.css";

import { useSelector } from 'react-redux';
const OrderModal = ({showForm, setShowForm}) => {
  const { items } = useSelector(state => state.cart);
  const [order, setOrder] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  const handleChange = ({target}) => {
    setOrder({...order, [target.name]: target.value});
  }
  return (
    <Modal isOpen={true}>
      <div className="order-modal">
        <GrClose className='close' />
        <p className='alert-success'>Order done</p>
        <table>
          <tr>
            <td>Name:</td>
            <td>{order.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{order.email}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{items.reduce((acc, product) => acc + product.price * product.qty, 0)}</td>
          </tr>
          <tr>
            <td>Order Products</td>
            <td>
              {items.map(item => (
                <div className='order-item' key={item.id}>
                  <p>Quantity: {item.qty}</p>
                  <p>Title: {item.title}</p>
                </div>
              ))}
            </td>
          </tr>
        </table>
      </div>
    </Modal>
  )
}

export default OrderModal