import { useState } from 'react';

const Home = () => {
    // let name = 'Mario';
    
    
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(20);

    const handleClick = (e) => {
        setName('Luigi');
        setAge('25');
    }

    return ( 
        <div className="container">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;