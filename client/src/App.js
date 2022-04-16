import { useEffect, useState } from "react";
import { Cart, Filter, Footer, Header, Products } from "./components";
import data from './data.json';

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
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
  const addToCart = (product) => {
    let cartClone = [...cart];
    let isExistInCart = cartClone.find(item => item.id === product.id);
    if (!isExistInCart) cartClone.push({...product, qty: 1});
    else isExistInCart.qty++;
    setCart(cartClone);
  }
  const removeFromCart = (product) => {
    let cartClone = [...cart].filter(item => item.id !== product.id);
    setCart(cartClone);
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} addToCart={addToCart} />
          <div className="filters">
            <Filter handleSize={handleSize} handleSort={handleSort} size={size} sort={sort} count={products.length} />
          </div>
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
