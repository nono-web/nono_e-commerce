import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div `
height: 60vh;
background-color:#fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1 `
font-size: 4.36rem;
margin-bottom: 1.25rem;
`
const Description = styled.div `
font-size: 1.6rem;
font-weight: 300;
margin-bottom: 1.25rem;
${mobile({textAlign: "center"})}
`
const Input = styled.input `
border: none;
flex:9;
padding-left: 1.25rem
`
const InputContainer = styled.div `
width: 50%;
height: 2.5rem;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
${mobile({width: "80%"})}
`
const Button = styled.button `
flex:1;
border:none;
background-color: teal;
color: white;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Obtenez des mises à jour opportunes de vos produits préférés</Description>
      <InputContainer>
      <Input  placeholder="Votre Email"/>
      <Button>
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="m2 21l21-9L2 3v7l15 2l-15 2v7Z"></path></svg>
      </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
