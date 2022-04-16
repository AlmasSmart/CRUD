import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const Home = () => {
  var navigate = useNavigate();
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState("");
  const callApiData = async () => {
    await axios
      .get("https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch")
      .then((res) => {
        setValue(res.data.data);
      });
  };

  const onDelete = (id) => {
    console.log("id", id);
    confirmAlert({
      message: `Are you Sure to Delete ${id.first_name} ${id.last_name} `,
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            axios
              .get(
                `https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete?param1=${id.email}`
              )
              .then(() => {
                alert(`Deleted Successfully`)
                getData();
              }),
        },
        {
          label: "No",
          onClick: () => navigate("/"),
        },
      ],
    });
  };

  const getData = () => {
    axios
      .get("https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch")
      .then((res) => {
        setValue(res.data.data);
      });
  };

  const setData = (data) => {
    let { city, email, first_name, last_name, pincode, states } = data;
    localStorage.setItem("email", email);
    localStorage.setItem("city", city);
    localStorage.setItem("states", states);
    localStorage.setItem("First Name", first_name);
    localStorage.setItem("Last Name", last_name);
    localStorage.setItem("Pincode", pincode);
    console.log(data);
  };
  useEffect(() => {
    callApiData();
  }, []);
  return (
    <div>
      <div className="container">
        <a href="/AddData">+Add Records</a>
        <input
          className="search"
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr className="bg-primary text-white">
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Pincode</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {value.map((val, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.email}</td>
                <td>{val.states}</td>
                <td>{val.city}</td>
                <td>{val.pincode}</td>
                <td>
                  <button
                    className="btnEdit"
                    onClick={() => {
                      setData(val);
                      navigate("/update");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btnDelete"
                    onClick={() => onDelete(val)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
