import axios from "axios";
import { useEffect, useState } from "react";

const useCategoryData = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/categories.json").then((res) => {
      console.log(res);
      setCategories(res.data.categories);
    });
  }, []);
  return categories;
};

export default useCategoryData;
