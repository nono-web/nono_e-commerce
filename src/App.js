import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Annoncement from './components/Annoncement';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Annoncement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produit" element={<Product />} />
          <Route path="/listProduit" element={<ProductList />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/enregistrement" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
