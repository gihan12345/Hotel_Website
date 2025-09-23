import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Logo_section from './components/Logo_section';
import About from './pages/About_us';
import Rooms from './pages/Rooms';
import RoomGrid from './pages/RoomGrid';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Logo_section />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:category" element={<RoomGrid />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
      
    </Router>
  );
}

export default App;
