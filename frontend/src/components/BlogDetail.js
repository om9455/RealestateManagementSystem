import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/blogs/${id}`
        );
        if (response.data.success) {
          setBlog(response.data.data);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError("Error fetching blog details");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog-detail">
            {/* Static Image */}
            <img
              className="w-100"
              src="/img/product1.jpeg"
              alt={blog.title}
            />

            {/* Blog Title & Meta Info */}
            <h1 className="blog-detail-title mt-3">{blog.title}</h1>
            <p className="blog-detail-author">
              <strong>Author:</strong> {blog.author}
            </p>

            {/* Blog Content */}
            <p className="blog-detail-content">{blog.content}</p>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default BlogDetail;
