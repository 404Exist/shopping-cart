import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';

const ProductModal = ({ product, closeModal, modalIsOpen }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <div className="product-modal">
        <GrClose onClick={closeModal} className="close" />
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
      </div>
    </Modal>
  )
}
export default ProductModal