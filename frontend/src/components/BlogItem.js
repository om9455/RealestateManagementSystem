import { Link } from "react-router-dom";

const BlogItem = ({ title, link, image }) => {
  return (
    <div className="col-lg-4">
      <div className="blog-item">
        <div className="blog-img">
          <img src={image} alt={title} className="w-100" />
        </div>
        <div className="blog-content">
          <h2 className="blog-title">
            <Link to={`/blog/${link}`}>{title}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
