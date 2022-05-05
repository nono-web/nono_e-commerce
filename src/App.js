import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
  const user = true
  return (
    <div className="App">
      <Router>
        <Annoncement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits/:categories" element={<ProductList />} />
          <Route path="/produit/:id"  element={<Product />} />
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
