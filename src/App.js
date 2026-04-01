import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import Restaurant from './pages/Restaurant';
import Bar from './pages/Bar';
import Lounge from './pages/Lounge';
import Club from './pages/Club';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/lounge" element={<Lounge />} />
          <Route path="/club" element={<Club />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;