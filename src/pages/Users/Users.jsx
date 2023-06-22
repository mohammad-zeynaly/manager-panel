import UsersStatistics from "../../components/UsersStatistics/UsersStatistics";
import UsersTables from "../../components/UsersTable/UsersTables";



const Users = () => {
  return (
    <div className="app__section">
      <UsersStatistics />
      <UsersTables />
    </div>
  );
};
export default Users;
