import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const Loader = () => {
  const loadingStatus = useSelector((state) => state.adminPanel.allPanelData);
  console.log("loadingStatus=> ", loadingStatus);
  return createPortal(
    <div
      className={`page-loader ${
        !loadingStatus.length ? "page-loader--active" : "page-loader--inactive"
      }`}
    >
      <div className="spinner-loader"></div>
    </div>,
    document.getElementById("page-loading")
  );
};

export default Loader;
