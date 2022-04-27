import React, { useState } from "react";
import { Button, Card, Col, Form, Modal } from "react-bootstrap";

const Food = ({ food }) => {
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const { description, image, title, prices, varients } = food;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col className="">
      <Card className="shadow-lg rounded rounded-lg border-0 h-100">
        <Card.Img  onClick={handleShow} className="h-100 p-3 pe-auto btn  img-fluid img-thumbnail" src={image} />
        <Card.Body className="px-3">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p>Size</p>
              <Form.Select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                aria-label=""
              >
                {varients.map((size, i) => (
                  <option key={i} value={size}>
                    {size}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div>
              <p>Quantity</p>
              <Form.Select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                aria-label=""
              >
                {[...Array(10).keys()].map((x, i) => {
                  return (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Price: ${prices[0][size] * quantity}</h4>
          </div>
          <button className="btn btn-info">Add To Cart</button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <img src={image} className="img-fluid p-3 img-thumbnail" alt="" />
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default Food;
