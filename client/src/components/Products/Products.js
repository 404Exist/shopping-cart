import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from 'react-modal';
import {GrClose} from 'react-icons/gr'
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal";
const Products = ({ products }) => {
  const { t } = useTranslation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  const openModal = (product) => {
    setProduct(product);
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <div className="products">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <button onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </button>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button>{ t("add to cart") }</button>
        </div>
      ))}

      <ProductModal product={product} closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </div>
  )
}

export default Products