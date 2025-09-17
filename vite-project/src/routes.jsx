import { createBrowserRouter } from "react-router";
import { About, Home, Product, Products } from "./components/pages";


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
  }
])