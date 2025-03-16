const Sidebar = () => {
    return (
        <div className="col-lg-4">
            <div className="right-sidebar">
                <div className="widget">
                    <div className="widget-content">
                        <input type="text" className="widget-search-inp" placeholder="Search" />
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Category</p>
                    <div className="widget-content">
                        <ul className="category-ul">
                            {/* <li>Category 1</li>
                            <li>Category 2</li>
                            <li>Category 3</li>
                            <li>Category 4</li>
                            <li>Category 5</li> */}
                        </ul>
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Title</p>
                    <p>1. Real Estate Tips</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Title</p>
                    <p>2. Real Estate Market Trends You Should Know</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Title</p>
                    <p>3. How to Increase Your Property Value</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Title</p>
                    <p>4. Mistakes to Avoid When Buying a Home</p>
                    <div className="widget-content">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar