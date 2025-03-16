import { useEffect, useState } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URI}blogs`
        );
        if (response.data.success) {
          setBlogs(response.data.data);
        } else {
          setError("Failed to load blogs");
        }
      } catch (err) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="blog">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">Blog</h1>
              <h2 className="page-description">Blog</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <BlogItem
                key={blog._id}
                link={blog._id}
                title={blog.title}
                image="/img/product1.jpeg" // Keep the static image
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
