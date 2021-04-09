import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  const title = "My Blog";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        
        <Home/>
        <h3>{title}</h3>
        
      </div>
    </div>
  );
}

export default App;
