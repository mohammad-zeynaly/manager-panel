import useFilteredData from "../../hooks/useFilteredData";
import TablesTemplate from "../TablesTemplate/TableTemplate";
import TableRowTemplate from "../TableRowTemplate/TableRowTemplate";

const UsersTables = () => {
  const usersData = useFilteredData("users");

  return (
    <section className="users">
      <div className="users__heading">
        <h3 className="users__title"> users list </h3>
      </div>
      <div className="users__wrapper">
        <TablesTemplate
          className="users-table-body"
          fieldPrice={false}
          filedPassword={true}
        >
          {usersData?.map((userItem) => (
            <TableRowTemplate
              fieldPrice={false}
              filedPassword={true}
              {...userItem}
              key={userItem.id}
            />
          ))}
        </TablesTemplate>
      </div>
    </section>
  );
};

export default UsersTables;
