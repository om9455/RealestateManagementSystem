import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";

const staticImages = [
  "/img/product1.jpeg",
  "/img/banner.jpg",
  "/img/product1.jpeg",
];

const FlatDetail = () => {
  const { slug } = useParams();
  const [flat, setFlat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}properties/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFlat(data.data);
        } else {
          setError("Flat not found");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching flat data:", err);
        setError("Failed to load data");
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">{error}</div>;

  const images = staticImages.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  return (
    <div className="flat-detail">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">{flat.title}</h1>
              <h2 className="page-description">{flat.description}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="fd-top flat-detail-content">
              <div>
                <h3 className="flat-detail-title">{flat.title}</h3>
                <p className="fd-address">
                  <i className="fas fa-map-marker-alt"></i> {flat.location}
                </p>
              </div>
              <div>
                <span className="fd-price">₹{flat.price.toLocaleString()}</span>
              </div>
            </div>
            <ImageGallery
              items={images}
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
            <div className="fd-item fd-property-detail">
              <h4>Property Details</h4>
              <p>Type: {flat.type}</p>
            </div>
            <div className="fd-item fd-features">
              <h4>Features</h4>
              <ul>
                {flat.amenities.map((feature, index) => (
                  <li key={index}>
                    <i className="fa fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetail;
