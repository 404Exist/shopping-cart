import { useTranslation } from "react-i18next";
import "../../css/Filter/Filter.css";
const Filter = ({handleSize, handleSort, size, sort, count}) => {
  const { t } = useTranslation();
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">
        { t("filter.title") }
      </h2>
      <div className="products-count"> Products count is {count}</div>
      <div className="size-filter">
        <span>{ t("filter.size") }</span>
        <select onChange={handleSize} value={size}>
          <option value="ALL">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="sort-filter">
        <span>{ t("filter.sort") }</span>
        <select onChange={handleSort} value={sort}>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="heighest">Heighest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter