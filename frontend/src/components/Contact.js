import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null); // Reset status

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URI}contacts`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Try again later.",
      });
    }
  };

  return (
    <section className="contact">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">Contact</h1>
              <h2 className="page-description">We’d love to hear from you!</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <h5>Mail</h5>
                    <h6>info@Ashishhouse.com</h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <h5>Address</h5>
                    <h6>South Bopal , Ahmedabad , Gujarat</h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <h5>Phone</h5>
                    <h6>+91 1234 XXX 294</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-12">
              <form onSubmit={handleSubmit} className="row mt-5">
                <div className="col-lg-6">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="inp-contact"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="inp-contact"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-12">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className="ta-contact"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-lg-12">
                  <button type="submit" className="btn-contact">
                    Send Message
                  </button>
                </div>
              </form>

              {/* Display success/error message */}
              {status && (
                <p
                  className={`mt-3 ${
                    status.type === "success" ? "text-success" : "text-danger"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
