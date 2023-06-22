import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
      const sidebarStatus = useSelector((state) => state.adminPanel.sidebarStatus);

  return (
    <aside
      className={
        sidebarStatus ? "sidebar sidebar--open" : "sidebar sidebar--close"
      }
    >
      <div className="sidebar__wrapper">
        <h4 className="sidebar__title">welcome to dashboard</h4>
        <ul className="sidebar-menu">
          <li className="sidebar-menu__item">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sidebar__icon"
            >
              <circle cx={10} cy={20.5} r={1} />
              <circle cx={18} cy={20.5} r={1} />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
            <Link className="sidebar-menu__link" to="/">
              products
            </Link>
          </li>
          <li className="sidebar-menu__item">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sidebar__icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <Link className="sidebar-menu__link" to="/users">
              users
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
