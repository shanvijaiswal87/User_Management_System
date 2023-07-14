import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8081/user/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex vh-100 bg justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body shadow">
                <Link to="/create" className="btn btn-success mb-3 justify-content-center align-items-center">
                  Add Users
                </Link>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.map((data, i) => (
                        <tr key={i}>
                          <td>{data.Name}</td>
                          <td>{data.Email}</td>
                          <td>{data.PhoneNo}</td>
                          <td>
                            <Link
                              to={`edit/${data.ID}`}
                              className="btn btn-primary me-2"
                            >
                              Edit
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={(e) => handleDelete(data.ID)}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
