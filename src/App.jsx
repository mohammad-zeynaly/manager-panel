import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import {
  modalStatusHandler,
  sidebarStatusHandler,
} from "./Redux/reducers/adminPanelSlice";
import Loader from "./components/Loader/Loader";
import DeleteModal from "./components/DeleteModal/DeleteModal";

const App = () => {
  const routers = useRoutes(routes);
  const sidebarStatus = useSelector((state) => state.adminPanel.sidebarStatus);
  const modalStatus = useSelector((state) => state.adminPanel.modalStatus);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={sidebarStatus || modalStatus ? "overlay" : ""}
        onClick={() => {
          dispatch(sidebarStatusHandler(false));
          dispatch(modalStatusHandler(false));
        }}
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
      <Loader />
      <DeleteModal />
    </>
  );
};

export default App;
