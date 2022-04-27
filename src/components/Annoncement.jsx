import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div `
height: 2rem;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-style: 1rem;
font-weight: 500;
${mobile({width: "100%"})}
`

const Annoncement = () => {
  return (
    <Container>
       🔥 Livraison gratuite à partit de 50€ 🔥
    </Container>
  )
}

export default Annoncement