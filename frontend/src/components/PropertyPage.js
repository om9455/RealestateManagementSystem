import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Table,
  Form,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
const API_URI = process.env.REACT_APP_API_URI;
export default function PropertyPage() {
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);

  const amenitiesList = ["Gym", "Swimming Pool", "Parking", "WiFi", "Security"];

  const fetchProperties = async () => {
    const response = await fetch(API_URI + "properties");
    const result = await response.json();
    setProperties(Array.isArray(result.data) ? result.data : []);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      await fetch(API_URI + `properties/${id}`, { method: "DELETE" });
      fetchProperties();
    }
  };

  const openModal = (property = null) => {
    setEditingProperty(property);
    setShowModal(true);
  };

  const handleSubmit = async (form) => {
    const method = editingProperty ? "PUT" : "POST";
    const url = editingProperty
      ? `${API_URI}properties/${editingProperty._id}`
      : `${API_URI}properties`;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setShowModal(false);
    fetchProperties();
  };

  return (
    <div className="container mt-4">
      <Button variant="primary" onClick={() => openModal()}>
        Add Property
      </Button>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Price</th>
            <th>Location</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id}>
              <td>{property.title}</td>
              <td>{property.type}</td>
              <td>{property.price}</td>
              <td>{property.location}</td>
              <td>{property.description}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => openModal(property)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(property._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="md"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {editingProperty ? "Edit Property" : "Add Property"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PropertyForm
            initialData={editingProperty}
            amenitiesList={amenitiesList}
            onSubmit={handleSubmit}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

function PropertyForm({ initialData, amenitiesList, onSubmit }) {
  const [form, setForm] = useState(
    initialData || {
      title: "",
      type: "Residential",
      description: "",
      price: "",
      location: "",
      amenities: [],
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleAmenity = (amenity) => {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Amenities</Form.Label>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" className="w-100">
            {form.amenities.length > 0
              ? form.amenities.join(", ")
              : "Select Amenities"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100 p-2">
            {amenitiesList.map((amenity) => (
              <Form.Check
                key={amenity}
                type="checkbox"
                label={amenity}
                checked={form.amenities.includes(amenity)}
                onChange={() => toggleAmenity(amenity)}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <Button variant="primary" type="submit">
        {initialData ? "Update" : "Add"}
      </Button>
    </Form>
  );
}
