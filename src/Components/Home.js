import { useState } from 'react';

const Home = () => {
    const [blogs, setBlog ] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'Github Profile', body: 'Updating github profile using awesome stats.', author: 'yoshi', id:4 }
    ]);

    return ( 
        <div className="container">
            <div className="row">
                { blogs.map((blog) => (
                    <div className="col-md-7" key={blog.id}>
                        <div className="card m-2">
                            <div className="card-body">
                                <h4 className="text-left font-weight-bold text-warning">{blog.title}</h4>
                                <p className="text-left">{blog.author}</p>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
     );
}
 
export default Home;