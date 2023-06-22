const TablesTemplate = ({ children }) => {
  return (
    <table className="table">
      <thead className="table__heading">
        <tr>
          <th className="table__title">Name</th>
          <th className="table__title">price</th>
          <th className="table__title">Actions</th>
        </tr>
      </thead>
      <tbody className="table-body">{children}</tbody>
    </table>
  );
};

export default TablesTemplate;
