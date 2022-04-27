import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Food from "./Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/foods')
    .then(res => {
      setFoods(res.data)
    })
    
  }, []);
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {foods.map(food => <Food key={food._id} food={food} />)}
      </Row>
    </Container>
  );
};

export default Foods;
