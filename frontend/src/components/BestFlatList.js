import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title";
import BestFlatItem from "./BestFlatItem";

export default class BestFlatList extends Component {
    render() {
        const title = {
            text: "Our Commercial Projects",
            description: "Explore premium office spaces and retail shops in top locations"
        };

        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        // Array of commercial properties
        const commercialProjects = [
            { flatState: "For Rent", projectName: "Skyline Plaza", location: "Downtown Business District", price: "1.00 Cr", imgSrc: "/img/commercial1.jpeg" },
            { flatState: "For Sale", projectName: "Empire Towers", location: "City Center", price: "1.10 Cr", imgSrc: "/img/commercial2.jpeg" },
            { flatState: "For Rent", projectName: "Metro Mall", location: "Urban Hub", price: "1.25 Cr", imgSrc: "/img/commercial3.jpeg" },
            { flatState: "For Sale", projectName: "Corporate Heights", location: "Tech Park", price: "1.40 Cr", imgSrc: "/img/commercial4.jpeg" },
            { flatState: "For Rent", projectName: "Business Bay", location: "Financial District", price: "1.80 Cr", imgSrc: "/img/commercial5.jpeg" },
            { flatState: "For Sale", projectName: "Trade Center", location: "Commercial Avenue", price: "2.00 Cr", imgSrc: "/img/commercial6.jpeg" }
        ];

        return (
            <section className="section-best-estate">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={title.text} description={title.description} />
                            <Slider {...settings}>
                                {commercialProjects.map((project, index) => (
                                    <BestFlatItem
                                        key={index}
                                        flatState={project.flatState}
                                        projectName={project.projectName}
                                        location={project.location}
                                        price={project.price}
                                        imgSrc={project.imgSrc}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
