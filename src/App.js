import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Product from './pages/Product';
import Service from './pages/Service';
import Team from './pages/Team';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/main" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
