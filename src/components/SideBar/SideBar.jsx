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
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
