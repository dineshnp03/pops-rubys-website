// Author name: Dinesh Narasimhalu Punniyamoorthy
import { Route, Routes } from 'react-router';
import './css/App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
      <div>
        <Navigation />
        <div className='body-section'>

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
