import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { sidebarStatusHandler } from "./Redux/reducers/adminPanelSlice";

const App = () => {
  const routers = useRoutes(routes);
  const sidebarStatus = useSelector((state) => state.adminPanel.sidebarStatus);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={sidebarStatus ? "overlay" : ""}
        onClick={() => dispatch(sidebarStatusHandler())}
      ></div>
      <div
        className={`container ${
          sidebarStatus ? "sidebar--open" : "sidebar--close"
        }`}
      >
        <main className=" app__wrapper">
          <Navbar />
          <div className="app__section">{routers}</div>
        </main>
        <SideBar />
      </div>
    </>
  );
};

export default App;
