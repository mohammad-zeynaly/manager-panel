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

// get all data adminPanel
export const createNewProduct = async (newProduct) => {
  console.log("in function createNewProduct=> ", newProduct);
  const { data, error } = await supabase
    .from("managerPanel")
    .insert(newProduct);

  if (data) {
    console.log("post data supbase=> ", data);
    return data;
  } else {
    console.warn("Couldent Fetching Data :(", error);
  }
};

// upload image in database supabase

