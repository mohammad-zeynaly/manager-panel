import { Link } from "react-router-dom";
import useFilteredData from "../../hooks/useFilteredData";
import TablesTemplate from "../TablesTemplate/TableTemplate";
import TableRowTemplate from "../TableRowTemplate/TableRowTemplate";

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

        <TablesTemplate
          className="products-table-body"
          fieldPrice={true}
          filedPassword={false}
        >
          {productItem?.map((productItem) => (
            <TableRowTemplate
              fieldPrice={true}
              filedPassword={false}
              {...productItem}
              key={productItem.id}
            />
          ))}
        </TablesTemplate>
      </div>
    </section>
  );
};

export default ProductsTables;
