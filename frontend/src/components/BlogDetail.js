import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import blogData from "./BlogData";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData.find(b => b.id === id);

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-detail">
                        <img className="w-100" src={blog.image} alt={blog.title} />
                        <span className="blog-detail-category">{blog.category}</span>
                        <h1 className="blog-detail-title">{blog.title}</h1>
                        <span className="blog-detail-date">{blog.date}</span>

                        {blog.content.map((section, index) => (
                            <div key={index}>
                                <h2 className="blog-detail-alttitle">{section.subtitle}</h2>
                                <p className="blog-detail-content">{section.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default BlogDetail;
