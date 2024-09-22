import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const history = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setDescription(localStorage.getItem("description"));
    setPrice(localStorage.getItem("price"));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://668e9007bf9912d4c92ed161.mockapi.io/crud-api/crud/${id}`,
      {
        name: name,
        description: description,
        price: price
      }
    );
    history("/read");
  };

  return (
    <div className="container mt-5">
      <h1>Update</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="name"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <div className="d-flex gap-3">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
       <Link to="/read">
       <button
          className="btn btn-secondary"
        >
          Back
        </button>
       </Link>
        </div>
      </form>
    </div>
  );
};

export default Update;
