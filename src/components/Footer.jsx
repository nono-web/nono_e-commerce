import styled from 'styled-components';
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  text-align: center;
  ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 1.25rem 0rem;
  ${mobile({fontSize: "0.9rem"})}
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a``;
const SocialIcon = styled.div`
  margin-right: 1.25rem;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 1.25rem;
  ${mobile({display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 2rem;
  text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.8rem;
  cursor: pointer;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  padding: 1.25rem;
  ${mobile({backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({fontSize: "0.9rem"})}
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {

  const navigator = useNavigate();

  const onHome = () => {
    navigator('/');
  };

  const onCart = () => {
    navigator('/panier');
  };



  return (
    <Container>
      <Left>
        <Logo>La boutique de NonoduWeb</Logo>
        <Desc>
        Les vêtements les plus tendances pour madame et aussi pour Monsieur sont ici. Profitez de notre large gamme de vêtements et de notre livraison offerte à partir de 50 €. Votre panier n'attend plus que vous.
        </Desc>
        <SocialContainer>
          <Link
            href="https://www.facebook.com/nonoduWeb/?ref=pages_you_manage"
            target="_blank"
            rel="noopener"
          >
            <SocialIcon>
              <svg width="2.5rem" height="2.5rem" viewBox="0 0 256 256">
                <path
                  fill="#395185"
                  d="M241.871 256.001c7.802 0 14.129-6.326 14.129-14.129V14.129C256 6.325 249.673 0 241.871 0H14.129C6.324 0 0 6.325 0 14.129v227.743c0 7.803 6.324 14.129 14.129 14.129h227.742"
                ></path>
                <path
                  fill="#FFF"
                  d="M176.635 256.001v-99.137h33.277l4.982-38.635h-38.259V93.561c0-11.186 3.107-18.809 19.148-18.809l20.459-.009V40.188c-3.54-.471-15.684-1.523-29.812-1.523c-29.498 0-49.692 18.005-49.692 51.071v28.493h-33.362v38.635h33.362v99.137h39.897"
                ></path>
              </svg>
            </SocialIcon>
          </Link>
          <Link
            href="https://twitter.com/ArnaudDidier9"
            target="_blank"
            rel="noopener"
          >
          <SocialIcon>
            <svg width="2.5rem" height="2.5rem" viewBox="0 0 256 209">
              <path
                fill="#55acee"
                d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
              ></path>
            </svg>
          </SocialIcon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/arnaud-didier-2343a3205/"
            target="_blank"
            rel="noopener"
          >
          <SocialIcon>
            <svg width="2.5rem" height="2.5rem" viewBox="0 0 256 256">
              <path
                fill="#0A66C2"
                d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
              ></path>
            </svg>
          </SocialIcon>
          </Link>
          <Link
            href="https://github.com/nono-web"
            target="_blank"
            rel="noopener"
          >
          <SocialIcon>
            <svg width="2.5rem" height="2.5rem" viewBox="0 0 256 259.3">
              <path
                fill="#9EDCF2"
                d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0"
              ></path>
              <defs>
                <path
                  id="IconifyId1804c25f8688bbca550"
                  d="M98.1 244.8c1.6 7.5 5.5 11.9 9.4 14.5h41.1c5-3.4 10.1-9.8 10.1-21.8v-31s.6-7.7 7.7-10.2c0 0 4.1-2.9-.3-4.5c0 0-19.5-1.6-19.5 14.4v23.6s.8 8.7-3.8 12.3v-29.2s.3-9.3 5.1-12.8c0 0 3.2-5.7-3.8-4.2c0 0-13.4 1.9-14 17.6l-.3 30h-3.2l-.3-30c-.6-15.6-14-17.6-14-17.6c-7-1.6-3.8 4.2-3.8 4.2c4.8 3.5 5.1 12.8 5.1 12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4c-4.5 1.6-.3 4.5-.3 4.5c7 2.6 7.7 10.2 7.7 10.2v21.7l.4 16.6z"
                ></path>
              </defs>
              <clipPath id="IconifyId1804c25f8688bbca551">
                <use href="#IconifyId1804c25f8688bbca550"></use>
              </clipPath>
              <path
                fill="#7DBCE7"
                d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0"
                clipPath="url(#IconifyId1804c25f8688bbca551)"
              ></path>
              <path
                fill="#9EDCF2"
                d="m46.9 125.9l-2.1 7.2s-.5 2.6 1.9 3.1c2.6-.1 2.4-2.5 2.2-3.2l-2-7.1zm0 0"
              ></path>
              <path
                fill="#010101"
                d="m255.8 95.6l.2-.9c-21.1-4.2-42.7-4.3-55.8-3.7c2.1-7.7 2.8-16.7 2.8-26.6c0-14.3-5.4-25.7-14-34.3c1.5-4.9 3.5-15.8-2-29.7c0 0-9.8-3.1-32.1 11.8c-8.7-2.2-18-3.3-27.3-3.3c-10.2 0-20.5 1.3-30.2 3.9C74.4-2.9 64.3.3 64.3.3c-6.6 16.5-2.5 28.8-1.3 31.8c-7.8 8.4-12.5 19.1-12.5 32.2c0 9.9 1.1 18.8 3.9 26.5c-13.2-.5-34-.3-54.4 3.8l.2.9c20.4-4.1 41.4-4.2 54.5-3.7c.6 1.6 1.3 3.2 2 4.7c-13 .4-35.1 2.1-56.3 8.1l.3.9c21.4-6 43.7-7.6 56.6-8c7.8 14.4 23 23.8 50.2 26.7c-3.9 2.6-7.8 7-9.4 14.5c-5.3 2.5-21.9 8.7-31.9-8.5c0 0-5.6-10.2-16.3-11c0 0-10.4-.2-.7 6.5c0 0 6.9 3.3 11.7 15.6c0 0 6.3 21 36.4 14.2V177s-.6 7.7-7.7 10.2c0 0-4.2 2.9.3 4.5c0 0 19.5 1.6 19.5-14.4v-23.6s-.8-9.4 3.8-12.6v38.8s-.3 9.3-5.1 12.8c0 0-3.2 5.7 3.8 4.2c0 0 13.4-1.9 14-17.6l.3-39.3h3.2l.3 39.3c.6 15.6 14 17.6 14 17.6c7 1.6 3.8-4.2 3.8-4.2c-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6 3.6 3.8 12.3 3.8 12.3v23.6c0 16 19.5 14.4 19.5 14.4c4.5-1.6.3-4.5.3-4.5c-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8c29-2.9 42.9-12.2 49.3-26.8c12.7.3 35.6 1.9 57.4 8.1l.3-.9c-21.7-6.1-44.4-7.7-57.3-8.1c.6-1.5 1.1-3 1.6-4.6c13.4-.5 35.1-.5 56.3 3.7zm0 0"
              ></path>
              <path
                fill="#F5CCB3"
                d="M174.6 63.7c6.2 5.7 9.9 12.5 9.9 19.8c0 34.4-25.6 35.3-57.2 35.3S70.1 114 70.1 83.5c0-7.3 3.6-14.1 9.8-19.7c10.3-9.4 27.7-4.4 47.4-4.4s37-5.1 47.3 4.3zm0 0"
              ></path>
              <path
                fill="#FFF"
                d="M108.3 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.6-.1 11.9 7.6 11.9 17.1zm0 0"
              ></path>
              <path
                fill="#AF5C51"
                d="M104.5 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.3 0 7.9 5.1 7.9 11.4zm0 0"
              ></path>
              <path
                fill="#FFF"
                d="M172.2 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.5-.1 11.9 7.6 11.9 17.1zm0 0"
              ></path>
              <path
                fill="#AF5C51"
                d="M168.3 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.4 0 7.9 5.1 7.9 11.4zm-37.8 15c0 1.6-1.3 3-3 3c-1.6 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3zm-9.9 7.5c-.2-.5.1-1 .6-1.2c.5-.2 1 .1 1.2.6c.8 2.2 2.8 3.6 5.1 3.6s4.3-1.5 5.1-3.6c.2-.5.7-.8 1.2-.6c.5.2.8.7.6 1.2c-1 2.9-3.8 4.9-6.9 4.9c-3.1 0-5.9-2-6.9-4.9zm0 0"
              ></path>
              <path
                fill="#C4E5D9"
                d="M54.5 121.6c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm5.8 3.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm3.5 4.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm3.2 4.8c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm3.5 4.4c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm4.8 3.9c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm6.7 2.5c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm6.7 0c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm6.8-1.1c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.1 0 2.1.6 2.1 1.4zm0 0"
              ></path>
            </svg>
          </SocialIcon>
          </Link>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Liens Utiles</Title>
        <List>
          <ListItem onClick={onHome}>Accueil</ListItem>
          <ListItem  onClick={onCart}>Panier</ListItem>
          <ListItem>Mode Femme</ListItem>
          <ListItem>Accesoires</ListItem>
          <ListItem>Mon compte</ListItem>
          <ListItem>Suivis des commandes</ListItem>
          <ListItem>Favoris</ListItem>
          <ListItem>CGV</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            style={{ marginRight: '0.8rem' }}
          >
            <path
              fill="currentColor"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
            ></path>
          </svg>
          20 rue des halles, 33000 Bordeaux, France
        </ContactItem>
        <ContactItem>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            style={{ marginRight: '0.8rem' }}
          >
            <path
              fill="currentColor"
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
            ></path>
          </svg>
          05 05 05 05 05 05
        </ContactItem>
        <ContactItem>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            style={{ marginRight: '0.8rem' }}
          >
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
            ></path>
          </svg>
          nonoweb17@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
