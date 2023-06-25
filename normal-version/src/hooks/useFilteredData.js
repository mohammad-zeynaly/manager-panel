import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useFilteredData = (dataType) => {
  const [filterData, setFilterData] = useState(null);

  const allData = useSelector((state) => state.adminPanel.allPanelData);

  useEffect(() => {
    if (allData) {
      setFilterData(allData.filter((data) => data.type === dataType));
    }
  }, [allData]);
  return filterData;
};

export default useFilteredData;
