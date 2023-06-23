import supabase from "../config/supabaseClient";
// get all data adminPanel

export const getAllData = async () => {
  const { data, error } = await supabase.from("managerPanel").select();

  if (data) {
    console.log("datas", data);
    return data;
  } else {
    console.log("error => ", error);
  }
};
