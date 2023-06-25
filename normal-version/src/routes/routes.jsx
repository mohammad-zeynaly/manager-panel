import Products from "../pages/Products/Products";
import AdminPanelForm from "../pages/AdminPanelForm/AdminPanelForm";

const routes = [
  { path: "/", element: <Products /> },
  { path: "/create-product", element: <AdminPanelForm /> },
  { path: "/update-product", element: <AdminPanelForm /> },
];

export default routes;
