import { useTranslation } from "react-i18next";
import "../../css/Products/Products.css";
const Products = ({ products }) => {
  const { t } = useTranslation();
  return (
    <div className="products">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button>{ t("add to cart") }</button>
        </div>
      ))}
    </div>
  )
}

export default Products