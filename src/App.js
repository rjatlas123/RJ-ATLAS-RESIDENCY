import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Resident from './components/Resident';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background'; // Assuming you have a Background component for the background effect


function App() {
  return (
    <Background>
      <Navbar />
      <Home />
      <About />
      <Amenities />
      <Gallery />
      <Resident />
      <Contact />
      <Footer />
    </Background>
  );
}

export default App;
