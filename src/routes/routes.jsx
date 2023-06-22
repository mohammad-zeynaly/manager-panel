import Products from "../pages/Products/Products";
import Users from "../pages/Users/Users";
import Form from "../pages/Form/Form";

const routes = [
  { path: "/", element: <Products /> },
  { path: "/users", element: <Users /> },
  { path: "/create-product", element: <Form /> },
  { path: "/update-product", element: <Form /> },
  { path: "/update-user", element: <Form /> },
];

export default routes;
