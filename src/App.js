import Header from "./components/header";
import Hero from "./components/hero";
import Products from "./components/products";
import Banner from "./components/banner";
import CartContextProvider from './context/ShoppingCartContext'
import WishListContextProvider from "./context/WishListContext";

function App() {

  return (
    <WishListContextProvider>
      <CartContextProvider>
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Hero />
          <Products />
          <Banner />
        </div>
      </CartContextProvider>
    </WishListContextProvider>
  );
}

export default App;
