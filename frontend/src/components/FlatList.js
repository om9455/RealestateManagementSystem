import { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";
import FlatItem from "./FlatItem";

const FlatList = () => {
  const title = {
    text: "Residential Ongoing Projects",
    description: "Live luxury life with us",
  };

  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/properties"
        );
        if (response.data.success) {
          // Filter only Residential properties
          const residentialFlats = response.data.data.filter(
            (flat) => flat.type === "Residential"
          );
          setFlats(residentialFlats);
        } else {
          setError("Failed to load data");
        }
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchFlats();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="section-all-re">
      <div className="container">
        <Title title={title.text} description={title.description} />
        <div className="row">
          {flats.map((flat) => (
            <FlatItem key={flat._id} flat={flat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlatList;
