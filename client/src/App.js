import { Cart, Filter, Footer, Header, Products } from "./components";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products />
          <div className="filters">
            <Filter />
          </div>
        </div>
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
