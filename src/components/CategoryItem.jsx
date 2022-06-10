import styled from 'styled-components';
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 0.2rem;
  height: 70vh;
  position: relative;

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height: "30vh"})}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 1.25rem;
`;

const Button = styled.button`
border: none;
padding: 0.8rem;
border-radius:2rem;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
border: 2px solid teal;
&:hover {
    background-color: teal;
    color: white
  }

`;

const CategoryItem = ({ item }) => {

  const navigator = useNavigate();

  const handleClick = () => {
      navigator(`/produits/${item.cat}`)
  }

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleClick}>C'EST PARTI</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
