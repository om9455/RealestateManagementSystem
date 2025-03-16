import React from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";

const flats = {
    crest: {
        title: "Crest",
        price: "₹10,000,000",
        location: "Thaltej",
        description: "A luxurious residential property located in the heart of Thaltej with premium amenities.",
        rooms: 5,
        kitchen: 1,
        features: ["Swimming Pool", "Gym", "Smart Security"],
        images: ["/img/product1.jpeg", "/img/banner.jpg", "/img/product1.jpeg"],
    },
    skyline: {
        title: "Skyline",
        price: "₹12,500,000",
        location: "Navrangpura",
        description: "Skyline offers breathtaking views with modern architecture and smart home integration.",
        rooms: 6,
        kitchen: 2,
        features: ["Sky Lounge", "Smart Locks", "24/7 Surveillance"],
        images: ["/img/product1.jpeg", "/img/banner.jpg", "/img/product1.jpeg"],
    },
    horizon: {
        title: "Horizon",
        price: "₹8,750,000",
        location: "Gota",
        description: "A serene escape in the city, Horizon provides modern living spaces with nature-friendly designs.",
        rooms: 4,
        kitchen: 1,
        features: ["Green Spaces", "Jogging Track", "Children’s Park"],
        images: ["/img/product1.jpeg", "/img/banner.jpg", "/img/product1.jpeg"],
    },
    grandeur: {
        title: "Grandeur",
        price: "₹15,000,000",
        location: "Satellite",
        description: "Grandeur redefines luxury with its high-end design, world-class amenities, and prime location.",
        rooms: 7,
        kitchen: 2,
        features: ["Private Lift", "Infinity Pool", "Home Theater"],
        images: ["/img/product1.jpeg", "/img/banner.jpg", "/img/product1.jpeg"],
    },
    elevation: {
        title: "Elevation",
        price: "₹11,250,000",
        location: "Bopal",
        description: "A perfect blend of elegance and affordability, Elevation is ideal for modern families.",
        rooms: 5,
        kitchen: 1,
        features: ["Clubhouse", "Yoga Zone", "Library"],
        images: ["/img/product1.jpeg", "/img/banner.jpg", "/img/product1.jpeg"],
    },
    pinnacle: {
        title: "Pinnacle",
        price: "₹9,500,000",
        location: "Prahladnagar",
        description: "Designed for the elite, Pinnacle offers premium apartments with state-of-the-art infrastructure.",
        rooms: 6,
        kitchen: 2,
        features: ["Penthouse Available", "Concierge Service", "Underground Parking"],
        images: ["/img/product1.jpeg", "/img/banner.jpg", "/img/product1.jpeg"],
    },
};

const FlatDetail = () => {
    const { slug } = useParams();
    const flat = flats[slug];

    if (!flat) return <div className="container">Flat not found</div>;

    const images = flat.images.map((img) => ({
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
                                <span className="fd-price">{flat.price}</span>
                            </div>
                        </div>
                        <ImageGallery items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />
                        <div className="fd-item fd-property-detail">
                            <h4>Property Details</h4>
                            <p>Rooms: {flat.rooms}</p>
                            <p>Kitchen: {flat.kitchen}</p>
                        </div>
                        <div className="fd-item fd-features">
                            <h4>Features</h4>
                            <ul>
                                {flat.features.map((feature, index) => (
                                    <li key={index}><i className="fa fa-check"></i> {feature}</li>
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
