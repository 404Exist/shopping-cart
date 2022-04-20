import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';
import "../../css/Order/OrderModal.css";
import { useSelector } from 'react-redux';
const OrderModal = ({ modalIsOpen, closeModal }) => {
  const { items } = useSelector(state => state.cart);
  const { order } = useSelector(state => state.order);

  return (
    order ? (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <div className="order-modal">
        <GrClose className='close' onClick={closeModal}/>
        <p className='alert-success'>Order done</p>
        <table>
          <tbody>
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
              <td>${items.reduce((acc, product) => acc + product.price * product.qty, 0)}</td>
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
          </tbody>
        </table>
      </div>
    </Modal>
    ) : null
  )
}

export default OrderModal