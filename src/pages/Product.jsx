import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import { addProduct } from '../redux/cartRedux';
import { publicRequest } from '../requestMethods';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  ${mobile({ padding: '0.7rem', flexDirection: 'column' })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  ${mobile({ height: '40%' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0rem 3.12rem;
  ${mobile({ padding: '0.7rem' })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 1.25rem 0rem;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 2.2rem;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid teal;
  margin: 0rem 0.2rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 0.7rem;
  padding: 0.3rem;
  border-radius: 1rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 0.7rem;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 0.4rem;
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 2rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
     quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = ()=> {
      dispatch(addProduct({...product, quantity, color, size }))
  }

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price> {product.price}€ </Price>
          <FilterContainer>
          <Filter>
              <FilterTitle>Couleur</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                onClick={() => handleQuantity('dec')}
              >
                <path
                  fill="currentColor"
                  d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"
                ></path>
              </svg>
              <Amount>{quantity}</Amount>
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                onClick={() => handleQuantity('inc')}
              >
                <path
                  fill="currentColor"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                ></path>
              </svg>
            </AmountContainer>
            <Button onClick={handleClick}>Ajoutez au Panier</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
    </Container>
  );
};

export default Product;
