import { useTranslation } from "react-i18next";
import "../../css/Filter/Filter.css";
const Filter = () => {
  const { t } = useTranslation();
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">
        { t("filter.title") }
      </h2>
      <div className="products-count"> Products count is 4</div>
      <div className="size-filter">
        <span>{ t("filter.size") }</span>
        <select>
          <option value="ALL">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="order-filter">
        <span>{ t("filter.order") }</span>
        <select>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="heighest">Heighest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter