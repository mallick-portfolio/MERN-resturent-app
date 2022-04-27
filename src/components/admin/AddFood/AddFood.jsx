import axios from "axios";
import React from "react";
import { Container, Form, FloatingLabel, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
const AddFood = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    const { title, category, image, description, small, medium, large } = data;
    axios.post("http://localhost:5000/food", {
      title,
      varients: ["small", "medium", "large"],
      prices: [{ small, medium, large }],
      category,
      image,
      description,
    });
    e.target.reset();
  };
  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit(onSubmit)} className="row">
        <div className="col-md-6 col-sm-12">
          <FloatingLabel
            controlId="title"
            label="Enter your Heading"
            className="mb-3"
          >
            <Form.Control {...register("title")} />
          </FloatingLabel>
        </div>
        <div className="col-md-6 col-sm-12">
          <FloatingLabel
            controlId="photoUrl"
            label="Enter your Photo URL"
            className="mb-3"
          >
            <Form.Control {...register("image")} />
          </FloatingLabel>
        </div>
        <div className="col-md-6 col-sm-12">
          <FloatingLabel controlId="description" label="description">
            <Form.Control
              {...register("description")}
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "110px" }}
            />
          </FloatingLabel>
        </div>
        <div className="col-md-6 col-sm-12">
          <label>Prices</label>
          <Form.Group as={Row} className="mb-1" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Small
            </Form.Label>
            <Col sm="10">
              <Form.Control
                {...register("small")}
                placeholder="Small Product Price"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-1" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Medium
            </Form.Label>
            <Col sm="10">
              <Form.Control
                {...register("medium")}
                placeholder="Medium Product Price"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-1" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Large
            </Form.Label>
            <Col sm="10">
              <Form.Control
                {...register("large")}
                placeholder="Large Product Price"
              />
            </Col>
          </Form.Group>
        </div>
        <div className="col-md-6 col-sm-12">
          <label htmlFor="">Select Category</label>
          <Form.Select {...register("category")}>
            <option value="vegtable">Vegetable</option>
            <option value="nonveg">Nonveg</option>
            <option value="other">other</option>
          </Form.Select>
        </div>
        <div className="w-100"></div>
        <input
          type="submit"
          value="Add Product"
          className="btn my-2 text-center btn-primary w-25"
        />
      </Form>
    </Container>
  );
};

export default AddFood;
