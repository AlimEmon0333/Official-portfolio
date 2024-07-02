import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/hero';
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from './components/techstack/techstack';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <hr className='container'/>
      <About/>
      <Techstack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
