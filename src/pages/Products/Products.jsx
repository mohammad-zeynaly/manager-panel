import AllStatistics from "../../components/AllStatistics/AllStatistics";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import UsersStatistics from "../../components/UsersStatistics/UsersStatistics";

const Products = () => {
  return (
    <>
      <AllStatistics />
      <UsersStatistics />
      <ProductsTable />
    </>
  );
};

export default Products;
