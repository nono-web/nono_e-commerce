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
import Success from './pages/Success'
import { useSelector } from 'react-redux';



const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log("user",user)
  return (
    <div className="App">
      <Router>
        <Annoncement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits/:categories" element={<ProductList />} />
          <Route path="/produit/:id"  element={<Product />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/success" element={<Success/>} />
          <Route path="/connexion"  element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/enregistrement" element={user ? <Navigate to="/" /> : <Register/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
