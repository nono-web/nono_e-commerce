import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://api.ecommerce.nonoweb17.fr/api/products?category=${cat}`
            : 'http://api.ecommerce.nonoweb17.fr./api/products'
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.createAt - b.createAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat 
      ? filteredProducts.map((item) => <Product item={item} key={item.id} /> )
      : products.slice(0,8).map((item) => <Product item={item} key={item.id} /> )}
    </Container>
  );
};

export default Products;
