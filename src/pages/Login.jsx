import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 1.25rem;
  background-color: white;
  border-radius: 2rem;
  ${mobile({ width: '75%' })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.8rem 0rem;
  padding: 0.7rem;
  border-radius: 2rem;
  border: solid 1px teal;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1rem 1.2rem;
  background-color: teal;
  border-radius: 2rem;
  color: white;
  cursor: pointer;
  margin-bottom: 0.8rem;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 0.3rem 0rem;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span `
color: red;
`

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  

  return (
    <Container>
      <Wrapper>
        <Title>Connexion</Title>
        <Form>
          <Input
            placeholder="Nom"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Connexion
          </Button>
         {error && <Error> Quelque chose a mal tourné </Error>}
          <Link>Mot de passe oublié ?</Link>
          <Link>Créer votre compte</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
