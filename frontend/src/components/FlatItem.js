import { Link } from "react-router-dom";


const FlatItem = ({ flat }) => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/product1.jpeg" alt={flat.title} />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">{flat.title}</span>
                        <span className="item-price">₹{flat.price}</span>
                    </div>
                    <div className="item-icon d-flex align-items-center justify-content-between">
                        <div>
                            <i className="fas fa-map-marker-alt"></i> <span>{flat.location}</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span>{flat.status}</span>
                        </div>
                        <Link to={`/flat/${flat.slug}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlatItem;
