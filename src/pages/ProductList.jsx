import { useState } from 'react';
import styled from 'styled-components';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';


const Container = styled.div``;
const Title = styled.h1`
  margin: 1.25rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 1.25rem;
  ${mobile({ width: '0rem 1.25rem', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 1.25rem;
  ${mobile({ marginRight: '0rem', textAlign: 'center' })}
`;

const Select = styled.select`
  padding: 0.8rem;
  margin-right: 1.25rem;
  border-radius: 2rem;
  ${mobile({ margin: '0.7rem 0rem' })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Plus Recent");


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  
  return (
    <Container>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer les produits: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Couleur</Option>
            <Option>blanc</Option>
            <Option>noir</Option>
            <Option>rouge</Option>
            <Option>bleu</Option>
            <Option>jaune</Option>
            <Option>vert</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Taille</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier des produits: </FilterText>
          <Select onChange={(e)=> setSort(e.target.value)}>
            <Option value="Plus Recent">Plus Recent</Option>
            <Option value="asc">Prix (asc)</Option>
            <Option value="desc">Prix (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort ={sort}/>
      <Newsletter />
    </Container>
  );
};

export default ProductList;
