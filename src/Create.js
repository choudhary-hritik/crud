import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    await axios.post(
      "https://668e9007bf9912d4c92ed161.mockapi.io/crud-api/crud",
      {
        name: name,
        description: description,
        price: price,
        header,
      }
    );
    history("/read");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1>Create</h1>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="description"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="name"
            className="form-control"
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

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
