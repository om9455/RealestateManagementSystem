const About = () => {
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">About Us</h1>
                            <h2 className="page-description">Your Trusted Real Estate Partner</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/product1.jpeg" alt="Real Estate Property" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                    Find Your Dream Property with Us
                                </div>
                                <div className="about-text">
                                    We specialize in helping buyers, sellers, and investors find the perfect property. Our mission is to provide a seamless real estate experience with transparency, reliability, and expert guidance. Whether you are looking for your dream home, commercial space, or an investment property, we are here to assist you at every step.
                                </div>
                                <div className="about-features">
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Wide Range of Properties</p>
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Trusted and Verified Listings</p>
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Expert Market Insights</p>
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Hassle-Free Transactions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
