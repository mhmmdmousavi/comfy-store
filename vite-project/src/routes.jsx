import { createBrowserRouter } from "react-router";
import { About, Cart, Checkout, Home, Login, Order, Product, Products, Register } from "./components/pages";


export const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/Products",
    element:<Products/>
  },
  {
    path:"/products/:productID",
    element:<Product/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/checkout",
    element:<Checkout/>
  },
  {
    path:"/order",
    element:<Order/>
  }
])