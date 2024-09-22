import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HealthCareServices = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://668e9007bf9912d4c92ed161.mockapi.io/crud-api/crud"
    );
    setData(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `https://668e9007bf9912d4c92ed161.mockapi.io/crud-api/crud/${id}`
    );
    getData();
  };

  const setToLocalStorage = (id, name, description, price) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("description", description);
    localStorage.setItem("price", price);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="d-flex justify-content-between m-5">
        <h1 className="m-auto">Health Care Services</h1>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((data) => {
          return (
            <tbody key={data.id}>
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.price}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        setToLocalStorage(data.id, data.name, data.description, data.price)
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default HealthCareServices;
