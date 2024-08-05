import Header from "./components/header";
import Hero from "./components/hero";
import Products from "./components/products";
import Banner from "./components/banner";
import CartContextProvider from './context/ShoppingCartContext'
import WishListContextProvider from "./context/WishListContext";
import MenuContextProvider from './context/MenuContext'

function App() {

  return (
    <WishListContextProvider>
      <CartContextProvider>
        <MenuContextProvider>
          <div className="max-w-screen-2xl relative mx-auto">
            <Header />
            <Hero />
            <Products />
            <Banner />
          </div>
        </MenuContextProvider>
      </CartContextProvider>
    </WishListContextProvider>
  );
}

export default App;
