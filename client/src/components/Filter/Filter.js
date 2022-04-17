import { useTranslation } from "react-i18next";
import "../../css/Filter/Filter.css";
import Bounce from 'react-reveal/Bounce';
import { useDispatch, useSelector } from "react-redux";
import { sizeFilter, sortFilter } from "../../store/actions/products";
const Filter = () => {
  const { t } = useTranslation();
  const { size, sort, products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  return (
    <Bounce right>
      <div className="filter-wrapper">
        <h2 className="filter-title">{ t("filter.title") }</h2>
        <div className="products-count"> Products count is {products?.length}</div>
        <div className="size-filter">
          <span>{ t("filter.size") }</span>
          <select onChange={(e) => sizeFilter(dispatch, e.target.value)} value={size}>
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
          <select onChange={(e) => sortFilter(dispatch, e.target.value)} value={sort}>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="heighest">Heighest</option>
          </select>
        </div>
      </div>
    </Bounce>
  )
}

export default Filter