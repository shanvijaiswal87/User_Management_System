import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone , setPhone] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put('http://localhost:8081/edit/' + id, { name, email ,phone })
      .then(res => {
        console.log(res);
        navigate("/");
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 shadow">
        <form onSubmit={handleSubmit}>
          <h2>Edit User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone No.</label>
            <input
              type="number"
              placeholder="Enter number"
              className="form-control"
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
