import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Formik, ErrorMessage } from "formik";
import {
  addNewProduct,
  updateProduct,
} from "../../Redux/reducers/adminPanelSlice";
import Input from "../../components/Input/Input";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import Button from "../../components/Button/Button";
import { uploadImage } from "../../services/adminPanelServices";
import { adminPanelFormValidations } from "../../validations/adminPanelFormValidations";

const AdminPanelForm = () => {
  // local states
  const [loading, setLoading] = useState(false);

  // refs
  const formikRef = useRef();

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const { pathname } = useLocation();

  // selector
  const mainEditProduct = useSelector(
    (state) => state.adminPanel.mainEditProduct
  );

  // determine whether to submit as new product or update existing one
  let conditionalUpdateProduct = pathname === "/update-product";

  // handles submission of form for new product
  const submitHandler = async (values) => {
    setLoading(true);
    try {
      const img = values.productImage
        ? `https://ogpcnihgeeqndoclerzw.supabase.co/storage/v1/object/public/managerPanel/${await uploadImage(
            values.productImage
          )}`
        : null;
      const productData = {
        id: crypto.randomUUID(),
        img,
        name: values.productName,
        price: values.productPrice,
        type: "product",
      };
      await dispatch(addNewProduct(productData));
      navigate("/");
    } catch (error) {
      console.warn("failed Post Request ", error);
    } finally {
      setLoading(false);
    }
  };

  // updates formik fields with existing product data for updating
  useEffect(() => {
    if (conditionalUpdateProduct) {
      formikRef.current.setFieldValue("productName", mainEditProduct.name);
      formikRef.current.setFieldValue("productPrice", mainEditProduct.price);
    }
  }, [pathname, conditionalUpdateProduct, formikRef]);

  // handles submission of form for updating existing product
  const updateProductHandler = async (values) => {
    setLoading(true);

    try {
      const img = values.productImage
        ? `https://ogpcnihgeeqndoclerzw.supabase.co/storage/v1/object/public/managerPanel/${await uploadImage(
            values.productImage
          )}`
        : mainEditProduct.img;
      await dispatch(
        updateProduct({
          id: mainEditProduct.id,
          name: values.productName,
          price: values.productPrice,
          img,
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
        {/* create Formik form and apply adminPanelFormValidations */}

        <Formik
          initialValues={{
            productName: "",
            productPrice: "",
            productImage: null,
          }}
          innerRef={formikRef}
          validationSchema={adminPanelFormValidations}
          onSubmit={(values, { setSubmitting }) => {
            if (conditionalUpdateProduct) {
              updateProductHandler(values);
            } else {
              submitHandler(values);
            }
            setSubmitting(false);
          }}
        >
          {(formik) => (
            <Form className="from">
              <div className="form-input">
                <Input
                  type="text"
                  placeholder="product name"
                  name="productName"
                />
                <ErrorMessage
                  name="productName"
                  render={(msg) => (
                    <span className="form-input__error-message">{msg}</span>
                  )}
                />
              </div>
              <div className="form-input">
                <Input
                  type="text"
                  placeholder="product price"
                  name="productPrice"
                />

                <ErrorMessage
                  name="productPrice"
                  render={(msg) => (
                    <span className="form-input__error-message">{msg}</span>
                  )}
                />
              </div>
              <ImageUploader
                mainEditProduct={mainEditProduct}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    formik.setFieldValue("productImage", e.target.files[0]);
                  }
                }}
                mainImgSrc={formik.values.productImage}
                name="productImage"
              />
              <div className="form-input__btn">
                {conditionalUpdateProduct ? (
                  <Button
                    conditional={`form__btn ${
                      loading ? "form__btn--disabled" : ""
                    }`}
                    loading={loading}
                    label="update product"
                  />
                ) : (
                  <Button
                    conditional={`form__btn ${
                      loading ? "form__btn--disabled" : ""
                    }`}
                    loading={loading}
                    label="Submit"
                  />
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default AdminPanelForm;
