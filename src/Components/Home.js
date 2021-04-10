const Home = () => {
    const handleClick = (e) => {
        console.log('Hello World', e)
    }
    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target)
    }

    return ( 
        <div className="container">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Mario', e)}>Click Me Again</button>
        </div>
     );
}
 
export default Home;