import BlogItem from "./BlogItem";
import blogData from "./BlogData";

const Blog = () => {
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
                        {blogData.map((blog) => (
                            <BlogItem key={blog.id} link={blog.id} title={blog.title} image={blog.image} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
