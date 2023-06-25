import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  addNewProduct,
  updateProduct,
} from "../../Redux/reducers/adminPanelSlice";

import Input from "../../components/Input/Input";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import Button from "../../components/Button/Button";
import { uploadImage } from "../../services/adminPanelServices";

const Form = () => {
  // local states
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

  // submit create product
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

  // update product
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
          <Input
            type="text"
            placeholder="product name"
            onChange={(e) => setDataNameInput(e.target.value)}
            value={dataNameInput}
          />
          <Input
            type="text"
            placeholder="product name"
            onChange={(e) => setDataPriceInput(e.target.value)}
            value={dataPriceInput}
          />

          <ImageUploader
            mainEditProduct={mainEditProduct}
            onChange={(e) => {
              if (e.target.files[0]) {
                setUploadImageInput(e.target.files[0]);
              }
            }}
            mainImgSrc={uploadImageInput}
          />

          <div className="form-input__btn">
            {conditionalUpdateProduct ? (
              <Button
                conditional={`form__btn ${
                  loading ? "form__btn--disabled" : ""
                }`}
                onClick={updateProductHandler}
                loading={loading}
                label="update product"
              />
            ) : (
              <Button
                conditional={`form__btn ${
                  loading ? "form__btn--disabled" : ""
                }`}
                onClick={submitHandler}
                loading={loading}
                label="Submit"
              />
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
