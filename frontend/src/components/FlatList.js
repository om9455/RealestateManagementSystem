import Title from "./Title";
import FlatItem from "./FlatItem";

const FlatList = () => {
    const title = {
        text: "Residential Ongoing Projects",
        description: "Live luxury life with us"
    };

    const flats = [
        { slug: "crest", title: "Crest", price: "10,000,000", location: "Thaltej", status: "Newly launched" },
        { slug: "skyline", title: "Skyline", price: "12,500,000", location: "Navrangpura", status: "Under construction" },
        { slug: "horizon", title: "Horizon", price: "8,750,000", location: "Gota", status: "Ready to move" },
        { slug: "grandeur", title: "Grandeur", price: "15,000,000", location: "Satellite", status: "Luxury Edition" },
        { slug: "elevation", title: "Elevation", price: "11,250,000", location: "Bopal", status: "Limited Availability" },
        { slug: "pinnacle", title: "Pinnacle", price: "9,500,000", location: "Prahladnagar", status: "Last Few Left" },
    ];

    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    {flats.map((flat) => (
                        <FlatItem key={flat.slug} flat={flat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlatList;
