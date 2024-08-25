import CartContextProvider from "./context/ShoppingCartContext";
import WishListContextProvider from "./context/WishListContext";
import GeneralContextProvider from "./context/generalContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { FlashSaleLoader } from "./pages/Home";
import RootLayout from "./components/RootLayout";
import { loader as ProductsLoader } from "./components/Containers/products";
import ProductPage, { loader } from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccess from './components/CheckoutPage/CheckoutSuccess'
import ErrorPage from './components/error'

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    loader: ProductsLoader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: FlashSaleLoader },
      { path: "products" },
      { path: "products/:id", loader: loader, element: <ProductPage /> },
      { path: "checkout", element: <CheckoutPage />},
      { path: "checkout/success", element: <CheckoutSuccess />},
    ],
  },
]);

function App() {
  return (
    <WishListContextProvider>
      <CartContextProvider>
        <GeneralContextProvider>
          <RouterProvider router={router} />
        </GeneralContextProvider>
      </CartContextProvider>
    </WishListContextProvider>
  );
}

export default App;