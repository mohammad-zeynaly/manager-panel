import { string, object } from "yup";

export let adminPanelFormValidations = object({
  productName: string()
    .required("The entered product name is not correct")
    .typeError(
      "Product name must be text characterThe product name must be a text character and be more than three characters"
    ),
  productPrice: string()
    .required("The price of the imported product is not correct")
    .typeError("Entering the product price is required"),

  productImage: string()
    .required("It is necessary to select the product photo")
    .typeError("It is necessary to select the product photo"),
});
