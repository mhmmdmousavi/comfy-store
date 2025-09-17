import { createBrowserRouter } from "react-router";
import { Home } from "./components/pages";


export const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
])