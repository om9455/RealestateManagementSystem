import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Form } from "react-bootstrap";
import ContactList from "./ContactList";
import PropertyPage from "./PropertyPage";
import BlogPage from "./BlogPage";
const API_URI = process.env.REACT_APP_API_URI;
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
      <div className="bg-dark text-white vh-110 p-3" style={{ width: "250px" }}>
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
        {activePage === "addProperty" && <PropertyPage />}
        {activePage === "addBlog" && <BlogPage />}
        {activePage === "contactList" && <ContactList />}
      </div>
    </div>
  );
}





// function AddPropertyForm() {
//   const [form, setForm] = useState({
//     title: "",
//     type: "Residential",
//     description: "",
//     price: "",
//     location: "",
//     amenities: [],
//   });

//   const amenitiesList = ["Gym", "Swimming Pool", "Parking", "WiFi", "Security"];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const toggleAmenity = (amenity) => {
//     setForm((prev) => ({
//       ...prev,
//       amenities: prev.amenities.includes(amenity)
//         ? prev.amenities.filter((item) => item !== amenity)
//         : [...prev.amenities, amenity],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const propertyData = {
//       ...form,
//       price: Number(form.price), // Convert price to number
//     };

//     console.log("Form Data:", propertyData); // Debug the payload

//     try {
//       const response = await fetch(API_URI + "properties", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(propertyData),
//       });

//       if (response.ok) {
//         alert("Property added successfully!");
//         setForm({
//           title: "",
//           type: "Residential",
//           description: "",
//           price: "",
//           location: "",
//           amenities: [],
//         });
//       } else {
//         alert("Failed to add property. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h3>Add Property</h3>
//       <form onSubmit={handleSubmit}>
//         {/* Title */}
//         <div className="mb-3">
//           <label className="form-label">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter title"
//             required
//           />
//         </div>

//         {/* Type */}
//         <div className="mb-3">
//           <label className="form-label">Type</label>
//           <select
//             name="type"
//             value={form.type}
//             onChange={handleChange}
//             className="form-select"
//             required
//           >
//             <option value="Residential">Residential</option>
//             <option value="Commercial">Commercial</option>
//           </select>
//         </div>

//         {/* Description */}
//         <div className="mb-3">
//           <label className="form-label">Description</label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             className="form-control"
//             rows="4"
//             placeholder="Enter description"
//             required
//           />
//         </div>

//         {/* Price */}
//         <div className="mb-3">
//           <label className="form-label">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={form.price}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter price"
//             required
//           />
//         </div>

//         {/* Location */}
//         <div className="mb-3">
//           <label className="form-label">Location</label>
//           <input
//             type="text"
//             name="location"
//             value={form.location}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter location"
//             required
//           />
//         </div>

//         {/* Amenities */}
//         <div className="mb-3">
//           <label className="form-label">Amenities</label>
//           <Dropdown>
//             <Dropdown.Toggle variant="secondary" className="w-100">
//               {form.amenities.length > 0
//                 ? form.amenities.join(", ")
//                 : "Select Amenities"}
//             </Dropdown.Toggle>
//             <Dropdown.Menu className="w-100 p-2">
//               {amenitiesList.map((amenity) => (
//                 <Form.Check
//                   key={amenity}
//                   type="checkbox"
//                   label={amenity}
//                   checked={form.amenities.includes(amenity)}
//                   onChange={() => toggleAmenity(amenity)}
//                 />
//               ))}
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// function AddBlogForm() {
//   const [form, setForm] = useState({
//     title: "",
//     content: "",
//     author: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(API_URI+"blogs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         alert("Blog added successfully!");
//         setForm({
//           title: "",
//           content: "",
//           author: "",
//         });
//       } else {
//         alert("Failed to add blog. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h3>Add Blog</h3>
//       <form onSubmit={handleSubmit}>
//         {/* Title */}
//         <div className="mb-3">
//           <label className="form-label">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter blog title"
//             required
//           />
//         </div>

//         {/* Content */}
//         <div className="mb-3">
//           <label className="form-label">Content</label>
//           <textarea
//             name="content"
//             value={form.content}
//             onChange={handleChange}
//             className="form-control"
//             rows="5"
//             placeholder="Enter blog content"
//             required
//           ></textarea>
//         </div>

//         {/* Author */}
//         <div className="mb-3">
//           <label className="form-label">Author</label>
//           <input
//             type="text"
//             name="author"
//             value={form.author}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter author name"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

