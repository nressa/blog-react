import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog ] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'Github Profile', body: 'Updating github profile using awesome stats.', author: 'yoshi', id:4 }
    ]);

    return ( 
        <div className="container mt-5">
            <BlogList blogs={ blogs } title="All Blog" ></BlogList>
        </div>
     );
}
 
export default Home;