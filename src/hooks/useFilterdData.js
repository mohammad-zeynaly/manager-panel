import { useState, useEffect } from "react";
import allData from "../data/allData";

const useFilteredData = (dataType) => {
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    if (allData) {
      setFilterData(allData.filter((data) => data.type === dataType));
    }
  }, [allData]);
  return filterData;
};

export default useFilteredData;
