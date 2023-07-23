import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

// Creating the router configuration using createBrowserRouter() function from react-router-dom.
const router = createBrowserRouter([
  {
    element: <AppLayout />, // The top-level layout component that wraps all the routes.
    errorElement: <Error />, // The component to be displayed when a route error occurs.
    children: [
      {
        path: "/", // The URL path for the Home page.
        element: <Home />, // The component to be rendered for the Home page.
      },
      {
        path: "/menu", // The URL path for the Menu page.
        element: <Menu />, // The component to be rendered for the Menu page.
        loader: menuLoader, // The loader function to fetch data for the Menu page.
      },
      {
        path: "/cart", // The URL path for the Cart page.
        element: <Cart />, // The component to be rendered for the Cart page.
      },
      {
        path: "/order/new", // The URL path for the CreateOrder page.
        element: <CreateOrder />, // The component to be rendered for the CreateOrder page.
        action: createOrderAction, // The action function to be executed when the CreateOrder page is accessed.
      },
      {
        path: "/order/:orderId", // The URL path for the Order page with a dynamic parameter ":orderId".
        element: <Order />, // The component to be rendered for the Order page.
        loader: orderLoader, // The loader function to fetch data for the Order page.
        errorElement: <Error />, // The component to be displayed when an error occurs on the Order page.
      },
    ],
  },
]);

// The main App component that wraps the entire application with the RouterProvider using the created router.
function App() {
  return <RouterProvider router={router} />;
}

export default App;
