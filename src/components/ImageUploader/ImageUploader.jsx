// import { useState } from "react";
// import { nanoid } from "@reduxjs/toolkit";
import convertToUrlRelative from "../../functions/ConvertToUrlRelative";
// import supabase from "../../config/supabaseClient";
import { useLocation } from "react-router-dom";

function ImageUploader({ mainEditProduct, onChange, mainImgSrc }) {
  const { pathname } = useLocation();
  let conditionalUpdateProduct = pathname === "/update-product";

  return (
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
          <div className={mainImgSrc && "form__upload"}>
            <img
              className={`form__upload-img ${
                conditionalUpdateProduct && "form__upload--img"
              }`}
              src={
                mainImgSrc
                  ? convertToUrlRelative(mainImgSrc)
                  : conditionalUpdateProduct && mainEditProduct.img
              }
            />
          </div>
        </span>

        <input type="file" id="images" accept="image/*" onChange={onChange} />
      </label>
      <h6 className="form__upload--message">
        <span>Warning: </span> Please turn on your vpn before uploading photos
      </h6>
    </div>
  );
}
export default ImageUploader;
