import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  isDeleteHandler,
  modalStatusHandler,
} from "../../Redux/reducers/adminPanelSlice";

const DeleteModal = () => {
  const deleteModalStatus = useSelector(
    (state) => state.adminPanel.modalStatus
  );
  const isDelete = useSelector((state) => state.adminPanel.isDelete);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isDelete) {
  //     console.log("isDelete=> ", isDelete);
  //   }
  // }, [isDelete]);

  return createPortal(
    <>
      {deleteModalStatus === true ? (
        <div className="modal delete-modal">
          <div className="delete-modal__wrapper">
            <h4 className="delete-modal__title">
              Are you sure about deleting the product?
              {console.log("deleteModalStatus=> ", deleteModalStatus)}
            </h4>
            <div className="delete-modal__buttons">
              <button
                className="btn-md delete-modal__btn"
                onClick={() => {
                  dispatch(isDeleteHandler(true));
                  dispatch(modalStatusHandler());
                }}
              >
                Yes
              </button>
              <button
                className="btn-md delete-modal__btn"
                onClick={() => {
                  dispatch(isDeleteHandler(false));
                  dispatch(modalStatusHandler());
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>,
    document.getElementById("modal-container")
  );
};

export default DeleteModal;
