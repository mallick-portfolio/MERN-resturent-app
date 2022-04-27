import { useEffect, useState } from "react";
import axios from "axios";
const useFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/foods").then((res) => {
      setFoods(res.data);
    });
  }, []);
  return [foods, setFoods];
};
export default useFoods;
