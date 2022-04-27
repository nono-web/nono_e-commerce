import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 1.25rem;
  background-color: white;
  border-radius: 2rem;
  ${mobile({ width: '75%' })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.2rem 0.7rem 0rem 0rem;
  padding: 0.7rem;
  border-radius: 2rem;
  border: solid 1px teal;
`;

const Agreement = styled.span`
  font-size: 1rem;
  margin: 1.4rem 0rem;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1rem 1.2rem;
  background-color: teal;
  border-radius: 2rem;
  color: white;
  cursor: pointer;
  ${mobile({marginLeft: "5rem"})}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Créer votre compte</Title>
        <Form>
          <Input placeholder="Nom" />
          <Input placeholder="Prenom" />
          <Input placeholder="Pseudo" />
          <Input placeholder="Email" />
          <Input placeholder="Mot de passe" />
          <Input placeholder="Confirmation de mot de passe" />
          <Agreement>
            En créant un compte, je consens au traitement de mes données
            personnelles conformément à la <b> POLITIQUE DE CONFIDENTIALITÉ</b>
          </Agreement>
          <Button>Créer votre compte</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
