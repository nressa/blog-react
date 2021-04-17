const BlogList = ({blogs, title}) => {

    return ( 
        <div className="row">
            <div className="col-md-12">
                <h2> { title } </h2>
            </div>
            { blogs.map((blog) => (
                <div className="col-md-7" key={blog.id}>
                    <div className="card m-2">
                        <div className="card-body">
                            <h4 className="text-left font-weight-bold color-main">{blog.title}</h4>
                            <p className="text-left">{blog.author}</p>
                        </div>
                    </div>
                </div>
            )) }
        </div>
     );
}
 
export default BlogList;