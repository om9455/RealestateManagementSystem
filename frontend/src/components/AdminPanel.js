import React, { useState } from "react";
import { Dropdown, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminPanel() {
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
              className={`btn text-white text-start w-100 ${
                activePage === "addProperty" ? "fw-bold" : ""
              }`}
              onClick={() => handlePageChange("addProperty")}
            >
              Add Property
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn text-white text-start w-100 ${
                activePage === "addBlog" ? "fw-bold" : ""
              }`}
              onClick={() => handlePageChange("addBlog")}
            >
              Add Blog
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn text-white text-start w-100 ${
                activePage === "contactList" ? "fw-bold" : ""
              }`}
              onClick={() => handlePageChange("contactList")}
            >
              Contact List
            </button>
          </li>
        </ul>
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
