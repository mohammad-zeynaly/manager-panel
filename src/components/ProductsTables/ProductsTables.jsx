import { Link } from "react-router-dom";
import useFilteredData from "../../hooks/useFilteredData";
import ProductsTablesItem from "../ProductsTablesItem/ProductsTablesItem";

const ProductsTables = () => {
  const productItem = useFilteredData("product");

  return (
    <section className="products">
      <div className="products__wrapper">
        <div className="products__heading">
          <h3 className="products__title">Top Selling Products</h3>
          <Link className="btn-md products__btn" to="/create-product">
            New product +
          </Link>
        </div>
        <table className="products-table">
          <thead className="products-table__heading">
            <tr>
              <th className="products-table__title">Name</th>
              <th className="products-table__title">price</th>
              <th className="products-table__title">Actions</th>
            </tr>
          </thead>
          <tbody className="products-table-body">
            {productItem?.map((productItem) => (
              <ProductsTablesItem {...productItem} key={productItem.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductsTables;
