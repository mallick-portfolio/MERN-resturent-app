import { Container, Row } from "react-bootstrap";
import useFoods from "../../hooks/useFoods";
import Food from "./Food";

const Foods = () => {
  const [foods] = useFoods()
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {foods.map(food => <Food key={food._id} food={food} />)}
      </Row>
    </Container>
  );
};

export default Foods;
