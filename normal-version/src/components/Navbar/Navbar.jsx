import { useDispatch } from "react-redux";
import { sidebarStatusHandler } from "../../Redux/reducers/adminPanelSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <div className="nav-content-right">
            <div className="nav-content-right__profile">
              <span> Hi Mohammad Zeynali </span>
              <img
                className="nav-content-right__img"
                src="./assets/images/users/user-1.jpg"
                alt="admin image"
              />
            </div>
          </div>
          <div className="nav-content-left">
            <span
              className=""
              onClick={() => {
                dispatch(sidebarStatusHandler(true));
              }}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="nav-content-left__icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
