import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Logo_section from './components/Logo_section';
import About from './pages/About_us';

function App() {
  return (
    <Router>
      <Logo_section />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

      </Routes>
      
    </Router>
  );
}

export default App;
