import { useState } from "react";

const Form = () => {
  const [uploadImageInput, setUploadImageInput] = useState();

  return (
    <section className="form-container">
      <div className="form__wrapper">
        <h3 className="form__title">create product</h3>
        <form className="from">
          <div className="form-input">
            <input
              type="text"
              className="from__input"
              placeholder="product name"
              required
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              className="from__input"
              placeholder="product price"
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
                  <img className="form__upload-img" src={uploadImageInput} />
                </div>
              </span>

              <input
                type="file"
                id="images"
                accept="image/*"
                onChange={(e) => {
                  console.log(window.URL.createObjectURL(e.target.files[0]));
                  setUploadImageInput(
                    window.URL.createObjectURL(e.target.files[0])
                  );
                }}
              />
            </label>
          </div>
          <div className="form-input__btn">
            <button type="submit" className="form__btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
