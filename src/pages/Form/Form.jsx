import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  addNewProduct,
  updateProduct,
} from "../../Redux/reducers/adminPanelSlice";
import convertToUrlRelative from "../../functions/ConvertToUrlRelative";
import supabase from "../../config/supabaseClient";

const Form = () => {
  
  const [dataNameInput, setDataNameInput] = useState("");
  const [dataPriceInput, setDataPriceInput] = useState("");
  const [uploadImageInput, setUploadImageInput] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const { pathname } = useLocation();
  const mainEditProduct = useSelector(
    (state) => state.adminPanel.mainEditProduct
  );
  let conditionalUpdateProduct = pathname === "/update-product";

  const uploadImage = async (uploadImageInput) => {
    const { data, error } = await supabase.storage
      .from("managerPanel")
      .upload("images/" + nanoid(), uploadImageInput);
    console.log("uploadImageInput.name=> ", uploadImageInput.name);

    if (data) {
      const { path } = data;
      return path;
    } else {
      console.error("Failed upload image:(", error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await dispatch(
        addNewProduct({
          id: crypto.randomUUID(),
          img: `https://ogpcnihgeeqndoclerzw.supabase.co/storage/v1/object/public/managerPanel/${await uploadImage(
            uploadImageInput
          )}`,
          name: dataNameInput,
          price: dataPriceInput,
          type: "product",
        })
      );
      navigate("/");
    } catch (error) {
      console.warn("failed Post Request ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (conditionalUpdateProduct) {
      console.log("inside component form ", mainEditProduct);
      setDataNameInput(mainEditProduct.name);
      setDataPriceInput(mainEditProduct.price);
    }
  }, [pathname]);

  const updateProductHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(
        updateProduct({
          id: mainEditProduct.id,
          name: dataNameInput,
          price: dataPriceInput,
          img: uploadImageInput
            ? `https://ogpcnihgeeqndoclerzw.supabase.co/storage/v1/object/public/managerPanel/${await uploadImage(
                uploadImageInput
              )}`
            : mainEditProduct.img,
        })
      );
      navigate("/");
    } catch (error) {
      console.error("Failed Update Product :( ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="form-container">
      <div className="form__wrapper">
        <h3 className="form__title">
          {conditionalUpdateProduct ? "update product" : "create product"}
        </h3>
        <form className="from" encType="multipart/form-data">
          <div className="form-input">
            <input
              type="text"
              className="from__input"
              placeholder="product name"
              onChange={(e) => setDataNameInput(e.target.value)}
              value={dataNameInput}
              required
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              className="from__input"
              placeholder="product price"
              onChange={(e) => setDataPriceInput(e.target.value)}
              value={dataPriceInput}
              required
            />
          </div>
          <div className="form-input form-input--file">
            <label htmlFor="images" className="drop-container">
              <span className="drop-title">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="form-input__icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                upload photo
                <div className={uploadImageInput && "form__upload"}>
                  <img
                    className={`form__upload-img ${
                      conditionalUpdateProduct && "form__upload--img"
                    }`}
                    src={
                      uploadImageInput
                        ? convertToUrlRelative(uploadImageInput)
                        : conditionalUpdateProduct && mainEditProduct.img
                    }
                  />
                </div>
              </span>

              <input
                type="file"
                id="images"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setUploadImageInput(e.target.files[0]);
                  }
                }}
              />
            </label>
            <h6 className="form__upload--message">
              <span>Warning: </span> Please turn on your vpn before uploading
              photos
            </h6>
          </div>
          <div className="form-input__btn">
            {conditionalUpdateProduct ? (
              <button
                type="button"
                className={`form__btn ${loading ? "form__btn--disabled" : ""}`}
                onClick={updateProductHandler}
                disabled={loading}
              >
                update product
              </button>
            ) : (
              <button
                type="button"
                className={`form__btn ${loading ? "form__btn--disabled" : ""}`}
                onClick={submitHandler}
                disabled={loading}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
