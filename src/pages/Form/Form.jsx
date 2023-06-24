import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../../Redux/reducers/adminPanelSlice";
import convertToUrlRelative from "../../functions/ConvertToUrlRelative";
import supabase from "../../config/supabaseClient";

const Form = () => {
  const [dataNameInput, setDataNameInput] = useState("");
  const [dataCaptionInput, setDataCaptionInput] = useState("");
  const [uploadImageInput, setUploadImageInput] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate("");

  const uploadImage = async (uploadImageInput) => {
    const { data, error } = await supabase.storage
      .from("managerPanel")
      .upload("images/" + uploadImageInput.name, uploadImageInput);

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
          price: dataCaptionInput,
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

  return (
    <section className="form-container">
      <div className="form__wrapper">
        <h3 className="form__title">create product</h3>
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
              onChange={(e) => setDataCaptionInput(e.target.value)}
              value={dataCaptionInput}
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
                    className="form__upload-img"
                    src={
                      uploadImageInput && convertToUrlRelative(uploadImageInput)
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
            <span> قبل از آپلود عکس لطفا vpn خود را روشن کنید </span>
          </div>
          <div className="form-input__btn">
            <button
              type="button"
              className={`form__btn ${loading ? "form__btn--disabled" : ""}`}
              onClick={submitHandler}
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
