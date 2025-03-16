import { Link } from "react-router-dom";

const BestFlatItem = ({ flatState, projectName, location, price, imgSrc }) => {
  return (
    <div className="best-estate">
      <div className="best-estate-item">
        <div className="best-estate-img-area">
          <img
            className="best-estate-img"
            src="/img/product1.jpeg"
            alt="commercial-property"
          />
          <div
            className={`best-estate-state ${
              flatState === "For Rent" ? "bg-green" : "bg-red"
            }`}
          >
            {flatState}
          </div>
        </div>
        <div className="best-estate-content">
          <h4>
            <Link to="/">{projectName}</Link>
          </h4>
          <span>
            <Link to="/">{location}</Link>
          </span>
        </div>
        <div className="best-estate-features">
          <div className="d-flex">
            <div className="best-estate-feature">
              <i className="fas fa-check-circle"></i>
              <span>Office Spaces</span>
            </div>
            <div className="best-estate-feature">
              <i className="fas fa-check-circle"></i>
              <span>Retail Shops</span>
            </div>
          </div>
          <h5 className="best-estate-price">₹{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default BestFlatItem;
