import { useState } from "react";
import { Footer, Header, Products } from "./components";
import data from './data.json';

function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <div className="filters">
            asd
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
