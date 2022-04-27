import styled from 'styled-components';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

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
  ${mobile({width: "0rem 1.25rem", display:"flex", flexDirection:"column", })}
`;

const FilterText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 1.25rem;
  ${mobile({marginRight: "0rem", textAlign: "center"})}
`;

const Select = styled.select`
  padding: 0.8rem;
  margin-right: 1.25rem;
  border-radius: 2rem;
  ${mobile({margin: "0.7rem 0rem"})}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Title>Dressing</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer les produits: </FilterText>
          <Select>
            <Option disabled selected>
              Couleur
            </Option>
            <Option>Blanc</Option>
            <Option>Noir</Option>
            <Option>Rouge</Option>
            <Option>Bleu</Option>
            <Option>Jaune</Option>
            <Option>Vert</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Taille
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier des produits: </FilterText>
          <Select>
            <Option selected>Plus Recent</Option>
            <Option>Prix (asc)</Option>
            <Option>Prix (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
    </Container>
  );
};

export default ProductList;
