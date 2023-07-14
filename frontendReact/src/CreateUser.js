import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone , setPhone] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/create", { name, email, phone })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg justify-content-center align-items-center">
      
      <div className="w-50 bg-white rounded p-3 shadow">
        
        <form onSubmit={handleSubmit}>
          
          <h2>Add User</h2>
          <div className="mb-2">
            
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            
            <label htmlFor="">Phone No.</label>
            <input type='number'
              placeholder="Enter Number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
