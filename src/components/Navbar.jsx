import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/apiCalls';
import { persistor, store } from '../redux/store';

const Container = styled.div`
  height: 3.75rem;
  ${mobile({ height: '3rem', width: '100%' })}
`;

const Wrapper = styled.div`
  padding: 0.8rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '1rem 0rem' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1.6rem;
  padding: 0.3rem;
  ${mobile({ marginLeft: '0.2rem', fontSize: '1rem' })}
`;

const Input = styled.input`
  border: none;
  margin-right: 1rem;
  ${mobile({ width: '2.6rem' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ marginLeft: '0.2rem', fontSize: '0.7rem' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1.25rem;
  ${mobile({ fontSize: '0.8rem', marginLeft: '0.8rem' })}
`;

const Counter = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 0.8rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: teal;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: white;
  ${mobile({ top: '2.3rem', right: '0.1rem', fontSize: '1rem' })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const { isFetching, error } = useSelector((state) => state.user);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const onHome = () => {
    navigator('/');
  };

  const onLogin = () => {
    navigator('/connexion');
  };

  const onRegister = () => {
    navigator('/enregistrement');
  };

  const onCart = () => {
    navigator('/panier');
  };

  const handleDisconnect = () => {
    logout(dispatch, user.currentUser );
    console.log('handledisconnect', user.currentUser)
    localStorage.removeItem('persist:nono');
  };

  useEffect(() => {
   }, [user]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>FR</Language>
          <SearchContainer>
            <Input placeholder="Rechercher" />
            <svg width="1.2rem" height="1.2rem" viewBox="0 0 15 15">
              <path
                fill="none"
                stroke="currentColor"
                d="m8.5 8.5l2 2M7 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Zm.5 5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
              ></path>
            </svg>
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={onHome}>👕NonoduWeb👗</Logo>
        </Center>
        <Right>
          {user.currentUser ? (
            <>
            <MenuItem>Bienvenue {user.username}</MenuItem>
            <MenuItem onClick={()=> handleDisconnect() }>Deconnexion</MenuItem>
          </>
          ) : 
          <>
          <MenuItem onClick={onRegister}>Inscription</MenuItem>
          <MenuItem onClick={onLogin}>Connexion</MenuItem>
        </>
          }
          <MenuItem onClick={onCart}>
            <Counter>{quantity}</Counter>
            <svg width="2rem" height="2rem" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z"
              ></path>
            </svg>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
