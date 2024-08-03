import Header from "./components/header";
import Hero from "./components/hero";
import Products from "./components/products";
import Banner from "./components/banner";
import CartContextProvider from './context/ShoppingCartContext'

function App() {

  return (
    <CartContextProvider>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Hero />
        <Products />
        <Banner />
      </div>
    </CartContextProvider>
  );
}

export default App;
