import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mobile } from '../responsive';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 1.25rem;
  ${mobile({ padding: '0.7rem' })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
`;

const TopButton = styled.button`
  padding: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2rem;
  background-color: white;
  border: 1px solid teal;
  background-color: white;
  color: black;
  &:hover {
    background-color: ${(props) =>
      props.type === 'filled' ? 'green' : '#fef3ed'};
    color: ${(props) => (props.type === 'filled' ? 'white' : ' black')};
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0rem 0.8rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 12.5rem;
`;

const Details = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid teal;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;
const ProductAmount = styled.div`
  font-size: 1.6rem;
  margin: 0.3rem;
  ${mobile({ margin: '0.3rem 1rem' })}
`;
const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
  ${mobile({ marginBottom: '1rem' })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 2rem;
  padding: 1.25rem;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '1.6rem'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 0.7rem;
  background-color: white;
  color: black;
  border-radius: 2rem;
  font-weight: 600;
  border: 1px solid teal;
  &:hover {
    background-color: green;
    color: white;
  }
`;

const Cart = () => {
  const navigator = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigator('/success', {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, navigator]);
  return (
    <Container>
      <Wrapper>
        <Title>Votre Panier</Title>
        <Top>
          <TopButton>Continuer vos Achats</TopButton>
          <TopTexts>
            <TopText>Panier(2) </TopText>
            <TopText> Votre liste d'envie(0) </TopText>
          </TopTexts>
          <TopButton type="filled">Payez Maintenant</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />

                  <Details>
                    <ProductName>
                      <b>Produit: </b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Taille : </b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <svg width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"
                      ></path>
                    </svg>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <svg width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                      ></path>
                    </svg>
                  </ProductAmountContainer>
                  <ProductPrice>
                    {' '}
                    {product.price * product.quantity}€
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Récapitulatif de la commande</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice> {cart.total}€</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Expédition Estimé :</SummaryItemText>
              <SummaryItemPrice> 5.90€</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                Réduction sur les frais d’expédition
              </SummaryItemText>
              <SummaryItemPrice> -5.90€</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice> {cart.total}€</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="NonoduWeb"
              image="https://zupimages.net/up/22/21/og5h.png"
              billingAddress
              shippingAddress
              description={`Votre total est de  ${cart.total}€`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <SummaryButton>Payez Maintenant</SummaryButton>
            </StripeCheckout>
            /
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
