import { useState } from "react";
import { Filter, Footer, Header, Products } from "./components";
import data from './data.json';

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  
  const handleSort = ({target}) => {
    setSort(target.value);
    let productsClone = [...data];
    let sortedProducts = productsClone.sort((a, b) => {
      if (target.value === "latest") {
        return a.id < b.id ? 1 : -1;
      }
      if (target.value === "lowest") {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
    setProducts(sortedProducts);
  }
  const handleSize = ({target}) => {
    setSize(target.value);
    let productsClone = [...data];
    let filterdProducts = productsClone.filter(product => product.sizes.includes(target.value));
    if (target.value === "ALL") filterdProducts = [...data];
    setProducts(filterdProducts);
  }
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <div className="filters">
            <Filter handleSize={handleSize} handleSort={handleSort} size={size} sort={sort} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
