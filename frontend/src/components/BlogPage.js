import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Form, Row, Col } from "react-bootstrap";
const API_URI = process.env.REACT_APP_API_URI;

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const fetchBlogs = async () => {
    const response = await fetch(API_URI + "blogs");
    const result = await response.json();
    setBlogs(Array.isArray(result.data) ? result.data : []);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await fetch(API_URI + `blogs/${id}`, { method: "DELETE" });
      fetchBlogs();
    }
  };

  const openModal = (blog = null) => {
    setEditingBlog(blog);
    setShowModal(true);
  };

  const handleSubmit = async (form) => {
    const method = editingBlog ? "PUT" : "POST";
    const url = editingBlog
      ? `${API_URI}blogs/${editingBlog._id}`
      : `${API_URI}blogs`;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setShowModal(false);
    fetchBlogs();
  };

  return (
    <div className="container mt-4">
      <Button variant="primary" onClick={() => openModal()}>
        Add Blog
      </Button>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => openModal(blog)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(blog._id)}
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
          <Modal.Title>{editingBlog ? "Edit Blog" : "Add Blog"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BlogForm initialData={editingBlog} onSubmit={handleSubmit} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

function BlogForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(
    initialData || { title: "", content: "", author: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={form.content}
          onChange={handleChange}
          rows={5}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {initialData ? "Update" : "Add"}
      </Button>
    </Form>
  );
}
