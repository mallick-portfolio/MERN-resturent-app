import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFoods from "../../../hooks/useFoods";

const FoodList = () => {
  const [foods, setFoods] = useFoods();
  // delete food
  const handleDelete = (id) => {
    const mess = window.confirm("Are you sure to delete");
    if (mess) {
      axios({
        method: "DELETE",
        url: `http://localhost:5000/foods/${id}`,
        data: id,
      }).then((res) => {
        const remaining = foods.filter((food) => food._id !== id);
        setFoods(remaining);
        alert("deleted successfull", res);
      });
    }
  };

  return (
    <Table striped bordered hover className="container my-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Title</th>
          <th>Category</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((food, i) => (
          <tr key={food._id}>
            <td>{i + 1}</td>
            <td>{food.title}</td>
            <td>{food.category}</td>
            <td className="text-center">
              <button className="btn btn-sm btn-info">Show</button>
              <Link to={`/admin/update/${food._id}`}>
              <button className="btn btn-sm btn-warning mx-2">Update</button></Link>
              <button
                onClick={() => handleDelete(food._id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FoodList;
