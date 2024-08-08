import CartContextProvider from './context/ShoppingCartContext'
import WishListContextProvider from "./context/WishListContext";
import MenuContextProvider from './context/MenuContext'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from './components/RootLayout';
import { loader as ProductsLoader } from './components/products';
import ProductPage, { loader } from './pages/ProductPage';

const router = createBrowserRouter([
  {path: '/', id: 'root', element: <RootLayout />, loader: ProductsLoader, 
    children: [
    {index: true, element: <Home />},
    {path: 'products'},
    {path: 'products/:id', loader: loader, element: <ProductPage />}
  ]}
], {scrollRestoration: 'auto'})

function App() {

  return <WishListContextProvider>
        <CartContextProvider>
          <MenuContextProvider>
            <RouterProvider router={router} />
          </MenuContextProvider>
        </CartContextProvider>
    </WishListContextProvider>
}

export default App;

// eslint-disable-next-line
{/* <WishListContextProvider>
      <CartContextProvider>
        <MenuContextProvider>
          <div className="max-w-screen-2xl relative mx-auto" >
            <Header />
            <Hero />
            <Products />
            <Banner />
          </div>
        </MenuContextProvider>
      </CartContextProvider>
    </WishListContextProvider> */}