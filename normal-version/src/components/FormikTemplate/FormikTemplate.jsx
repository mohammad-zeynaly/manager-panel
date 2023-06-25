import { Formik } from "formik";
import { adminPanelFormValidations } from "../../validations/adminPanelFormValidations";

const FormikTemplate = ({ children }) => {
  return (
    <Formik
      initialValues={{
        productName: "",
        productPrice: "",
        productImage: "",
      }}
      validationSchema={adminPanelFormValidations}
        onSubmit={}
    >
      {children}
    </Formik>
  );
};

export default FormikTemplate;
