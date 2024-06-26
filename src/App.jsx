import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/hero';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
