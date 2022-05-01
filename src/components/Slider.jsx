import styled from 'styled-components';
import { useState } from 'react';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display: "none"})}
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  height: 8%;
  width: 4%;
  padding-left: 0.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '0.8rem'};
  right: ${(props) => props.direction === 'right' && '0.8rem'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 4.375rem;
`;

const Desc = styled.p`
  margin: 3rem 4rem 3rem 0rem;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 0.7rem;
  border:none;
  font-size: 1.25rem;
  background-color: white;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background-color: teal;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <svg width="2rem" height="2rem" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"
          ></path>
        </svg>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shoppe la collection</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <svg width="2rem" height="2rem" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
          ></path>
        </svg>
      </Arrow>
    </Container>
  );
};

export default Slider;
