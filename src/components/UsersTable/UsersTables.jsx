import useFilteredData from "../../hooks/useFilteredData";
import TablesTemplate from "../TablesTemplate/TableTemplate";
import TableRowTemplate from "../TableRowTemplate/TableRowTemplate";

const usersData = [
  {
    id: 15,
    name: "ali ",
    img: "./assets/images/users/user-1.jpg",
    password: "12345678",
  },
  {
    id: 16,
    name: "akbar ",
    img: "./assets/images/users/user-2.jpg",
    password: "01010101",
  },
  {
    id: 17,
    name: "mohammad ",
    img: "./assets/images/users/user-3.jpg",
    password: "kj87ty98",
  },
  {
    id: 18,
    name: "sasan ",
    img: "./assets/images/users/user-4.jpg",
    password: "Awe#7895",
  },
  {
    id: 19,
    name: "hamid ",
    img: "./assets/images/users/user-5.jpg",
    password: "li$#1245",
  },
  {
    id: 20,
    name: "reza ",
    img: "./assets/images/users/user-6.jpg",
    password: "Aer%2145",
  },
];

const UsersTables = () => {
  //   const userItem = useFilteredData("users");

  return (
    <section className="users">
      <div className="users__wrapper">
        <div className="users__heading">
          <h3 className="users__title"> users list </h3>
        </div>

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
