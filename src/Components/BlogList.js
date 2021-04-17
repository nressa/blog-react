const BlogList = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="row mt-4">
            <div className="col-md-12">
                <h2 className="m-2 ml-3"> { title } </h2>
            </div>
            { blogs.map((blog) => (
                <div className="col-md-6" key={blog.id}>
                    <div className="card m-2">
                        <div className="card-body">
                            <h4 className="text-left font-weight-bold color-main">{blog.title}</h4>
                            <p className="text-left">{blog.author}</p>
                            <button className="btn btn-danger btn-md" onClick={() => handleDelete(blog.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )) }
        </div>
     );
}
 
export default BlogList;