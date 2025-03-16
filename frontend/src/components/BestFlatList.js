import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title";
import BestFlatItem from "./BestFlatItem";
import axios from "axios";

export default class BestFlatList extends Component {
  state = {
    commercialProjects: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URI}properties`)
      .then((response) => {
        if (response.data.success) {
          // Filter only Commercial properties
          const commercialFlats = response.data.data.filter(
            (flat) => flat.type === "Commercial"
          );
          this.setState({
            commercialProjects: commercialFlats,
            loading: false,
          });
        } else {
          this.setState({ error: "Failed to load data", loading: false });
        }
      })
      .catch((error) => {
        this.setState({ error: "Error fetching data", loading: false });
      });
  }

  render() {
    const title = {
      text: "Our Commercial Projects",
      description:
        "Explore premium office spaces and retail shops in top locations",
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
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    const { commercialProjects, loading, error } = this.state;

    if (loading) return <p>Loading commercial projects...</p>;
    if (error) return <p>{error}</p>;

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
