import supabase from "../config/supabaseClient";

// get all data adminPanel
export const getAllData = async () => {
  const { data, error } = await supabase.from("managerPanel").select();

  if (data) {
    console.log("get data supabase=> ", data);
    return data;
  } else {
    console.log("error => ", error);
  }
};

// create new product in sending information to supabase database
export const createNewProduct = async (newProduct) => {
  const { data, error } = await supabase
    .from("managerPanel")
    .insert(newProduct);

  if (data) {
    console.log("post data supbase=> ", data);
    return data;
  } else {
    console.error("Failed Fetching Post Data :(", error);
  }
};

// delete main product
export const deleteMainProduct = async ({ id, imgUrl }) => {
  const { error } = await supabase.from("managerPanel").delete().eq("id", id);

  if (error) {
    console.error("Failed Delete Data :(", error);
  }
  getAllData();

  deleteImage(imgUrl);
};

const deleteImage = async (imgUrl) => {
  const imageName = imgUrl.split("/").pop().replace(/%20/g, " ");
  console.log("imageName", ["images" + "/" + imageName]);
  const { data, error } = await supabase.storage
    .from("managerPanel")
    .remove(["images" + "/" + imageName]);
};

// update main Product
export const updateMainProduct = async (updateProduct) => {
  console.log("inside updateMainProduct => ", updateProduct);

  let { id, name, price, img } = updateProduct;
  try {
    const { error, data } = await supabase
      .from("managerPanel")
      .update({ name, price, img })
      .eq("id", id);

    if (error) throw error;
    else console.log("data product updated :) ", data);
  } catch (error) {
    console.error("Failed Update Product :(", error);
  }
};
