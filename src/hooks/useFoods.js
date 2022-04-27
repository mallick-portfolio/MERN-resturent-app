import { useEffect, useState } from "react";
import axios, {Axios} from 'axios'
const useFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/foods')
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return [foods, setFoods]
}
export default useFoods