import Products from "../pages/Products/Products";
import Form from "../pages/Form/Form";

const routes = [
  { path: "/", element: <Products /> },
  { path: "/create-product", element: <Form /> },
  { path: "/update-product", element: <Form /> },
];

export default routes;
