import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Form, Button } from "react-bootstrap";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(auth === "true");
  }, []);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <AdminPanel onLogout={handleLogout} />
  ) : (
    <AdminLogin onLogin={handleLogin} />
  );
}

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div
        className="card p-4 shadow-lg rounded"
        style={{ width: "350px", background: "white" }}
      >
        <h3 className="mb-4 text-center">Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminPanel({ onLogout }) {
  const [activePage, setActivePage] = useState("addProperty");

  const handlePageChange = (page) => setActivePage(page);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
        <h4 className="mb-4">Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <button
              className={`btn btn-link text-white text-start w-100 text-decoration-none ${
                activePage === "addProperty" ? "fw-bold" : ""
              }`}
              onClick={() => handlePageChange("addProperty")}
            >
              Add Property
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn btn-link text-white text-start w-100 text-decoration-none ${
                activePage === "addBlog" ? "fw-bold" : ""
              }`}
              onClick={() => handlePageChange("addBlog")}
            >
              Add Blog
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn btn-link text-white text-start w-100 text-decoration-none ${
                activePage === "contactList" ? "fw-bold" : ""
              }`}
              onClick={() => handlePageChange("contactList")}
            >
              Contact List
            </button>
          </li>
        </ul>
        <button className="btn btn-danger mt-4" onClick={onLogout}>
          Logout
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-grow-1 p-4">
        {activePage === "addProperty" && <AddPropertyForm />}
        {activePage === "addBlog" && <AddBlogForm />}
        {activePage === "contactList" && <ContactList />}
      </div>
    </div>
  );
}


function AddPropertyForm() {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const amenitiesList = ["Gym", "Swimming Pool", "Parking", "WiFi", "Security"];

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div>
      <h3>Add Property</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select className="form-select">
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter location"
          />
        </div>

        {/* Multi-Select Dropdown for Amenities */}
        <div className="mb-3">
          <label className="form-label">Amenities</label>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" className="w-100">
              {selectedAmenities.length > 0
                ? selectedAmenities.join(", ")
                : "Select Amenities"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100 p-2">
              {amenitiesList.map((amenity) => (
                <Form.Check
                  key={amenity}
                  type="checkbox"
                  label={amenity}
                  checked={selectedAmenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

function AddBlogForm() {
  return (
    <div>
      <h3>Add Blog</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter blog title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Enter blog content"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter author name"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

function ContactList() {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "Interested in a property.",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Would like to schedule a visit.",
    },
  ];

  return (
    <div>
      <h3>Contact List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
