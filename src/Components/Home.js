import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const [blogs, setBlog ] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'Github Profile', body: 'Updating github profile using awesome stats.', author: 'yoshi', id:4 }
    ]);

    const [name, setName ] = useState('Mario')


    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlog(newBlogs)
    }

    useEffect(() => {
        console.log('Study useEffect')
        console.log(name)
    },[name]);

    return ( 
        <div className="container mt-5">
            <BlogList blogs={ blogs } 
                        title="All Blog"
                        handleDelete={handleDelete} ></BlogList>

            <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } 
                        title="Mario's Blog"
                        handleDelete={handleDelete} ></BlogList>

            <BlogList blogs={ blogs.filter((blog) => blog.author === 'yoshi') } 
                        title="Yoshi's Blog"
                        handleDelete={handleDelete} ></BlogList>

            <div className="row">
                <p>{ name }</p>
                <Button variant="primary" onClick={() => setName('Luigi')}>Primary</Button>
            </div>
        </div>
     );
}
 
export default Home;